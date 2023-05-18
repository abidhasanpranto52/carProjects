import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import BookingInfo from "./BookingInfo";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  const url = `https://car-project-server-chi.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url,{
      method: 'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('car-project-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-project-server-chi.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
      }
    });
  };

  const handleBookingConfirm = (id) => {
    fetch(`https://car-project-server-chi.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update
          const remaining = bookings.filter(booking => booking._id  !== id);
          const updated = bookings.find(booking => booking._id === id);
          updated.status = 'confirm'
          const newBooking = [updated,...remaining];
          setBookings(newBooking);
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-2xl">My bookings : {bookings.length}</h1>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr style={{ "font-family": "'Rancho', cursive" }}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <BookingInfo
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                  handleBookingConfirm={handleBookingConfirm}
                ></BookingInfo>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;

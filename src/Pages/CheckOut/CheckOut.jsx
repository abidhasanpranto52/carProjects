import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";
//

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, img, price } = service;
  // console.log(service);

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const email = user?.email;
    const message = form.message.value;

    const booking = {
      name,
      date,
      phone,
      email,
      message,
      service: _id,
      img,
      title,
      price,
    };

    console.log(booking);

    fetch("https://car-project-server-chi.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Thank You🥰!",
            text: "Service Booked Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div className="container animate__animated animate__zoomIn">
      <h1 className="text-center text-3xl font-bold">
        {" "}
        Service name : {title}
      </h1>

      <div className="my-6 bg-slate-100 p-12">
        <form onSubmit={handleBooking}>
          {/* Name and date */}
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                readOnly
                placeholder="Enter Your Name"
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Phone and Email */}
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                type="number"
                placeholder="Your Phone"
                name="phone"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Price</span>
              </label>
              <input
                type="number"
                placeholder="Your Price"
                name="price"
                readOnly
                defaultValue={price}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Message Box */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Your Message"
              name="message"
            ></textarea>
          </div>
          <div className="my-4">
            {/* <Link to={"/bookings"}> */}
              <input
                type="submit"
                value="Order Confirm"
                className="btn btn-block bg-red-600"
              />
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;

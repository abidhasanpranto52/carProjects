import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect( () =>{
        fetch(`https://car-project-server-chi.vercel.app/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

  return (
    <div className="my-4">
      <div className="text-center">
        <h3 className="text-2xl mb-3 font-semibold text-red-600">Service</h3>
        <h1 className="font-bold mb-3 text-4xl">Our Service Area</h1>
        <p className="mb-5">
          the majority have suffered alteration in some form, by injected 
          humour, or randomised <br /> words which don't look even slightly believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 place-items-center">
        {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
        
      </div>

    </div>
  );
};

export default Services;

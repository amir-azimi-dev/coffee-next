import React from "react";
import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";

function Services({ data }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Services</h4>
          <h1 className="display-4">Fresh & Organic Beans</h1>
        </div>
        <div className="row">
          {data.map(service => (
            <ServiceItem
              key={service.id}
              title={service.title}
              description={service.desc}
              icon={service.icon}
              img={service.img}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services;

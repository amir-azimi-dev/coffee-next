import React from "react";
import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";

function Services() {
  return <div className="container-fluid pt-5">
    <div className="container">
      <div className="section-title">
        <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Services</h4>
        <h1 className="display-4">Fresh & Organic Beans</h1>
      </div>
      <div className="row">
        <ServiceItem
          title=""
          description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
          icon=""
          img="/img/service-1.jpg" />
        <ServiceItem
          title=""
          description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
          icon=""
          img="/img/service-2.jpg" />
        <ServiceItem
          title=""
          description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
          icon=""
          img="/img/service-3.jpg" />
        <ServiceItem
          title=""
          description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
          icon=""
          img="/img/service-4.jpg" />
      </div>
    </div>
  </div>
}

export default Services;

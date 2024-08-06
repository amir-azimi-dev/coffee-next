import React from "react";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

function ServiceItem({ title, description, icon, img }) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src={img} alt={title} />
        </div>
        <div className="col-sm-7">
          <h4>{icon && <FontAwesomeIcon icon={icon} className="service-icon px-2 py-2" />}{title}</h4>
          <p className="m-0">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem;

import React from "react";
import Link from "next/link";

function Card({ id, img, title, price, desc }) {
  return (
    <div className="row align-items-center mb-5">
      <div className="col-4 col-sm-3">
        <img className="w-100 rounded-circle mb-3 mb-sm-0" src={img} alt={title} style={{ aspectRatio: 1, objectFit: "cover" }} />
        <h5 className="menu-price">${price}</h5>
      </div>
      <div className="col-8 col-sm-9">
        <h4><Link href={`/product/${id}`}>{title}</Link></h4>
        <p className="m-0">{desc}</p>
      </div>
    </div>
  )
}

export default Card;

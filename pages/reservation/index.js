import PageHeader from "@/components/modules/PageHeader/PageHeader";
import React from "react";
import ReservationComponent from "@/components/templates/Reservation/Reservation";

function Reservation() {
  return (
    <>
      <PageHeader route="Reservation" />
      <ReservationComponent />
    </>
  )
}

export default Reservation;

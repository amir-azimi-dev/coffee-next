import React from "react";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ServicesComponent from "@/components/templates/Index/Services";

function Services({ services }) {


  return (
    <>
      <PageHeader route="services" />
      <ServicesComponent data={services} />
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:8080/services")
  const data = await response.json()

  return {
    props: {
      services: data
    }
  }
}

export default Services;

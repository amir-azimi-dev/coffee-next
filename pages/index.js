import React from "react";
import Slider from "@/components/templates/Index/Slider";
import About from "@/components/templates/Index/About";
import Services from "@/components/templates/Index/Services";
import Offer from "@/components/templates/Index/Offer";
import Menu from "@/components/templates/Index/Menu";
import Reservation from "@/components/templates/Reservation/Reservation";
import Testimonial from "@/components/templates/Index/Testimonial";

function Index({ services, menu, comments }) {

  return (
    <>
      <Slider />
      <About />
      <Services data={services} />
      <Offer />
      <Menu data={menu} />
      <Reservation />
      <Testimonial data={comments} />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:8080/services")
  const services = await servicesResponse.json();

  const menuResponse = await fetch("http://localhost:8080/menu")
  const menu = await menuResponse.json();

  const commentResponse = await fetch("http://localhost:8080/comments")
  const comments = await commentResponse.json();

  return {
    props: {
      services,
      menu,
      comments
    },
    revalidate: 60 * 60 * 12 // 12 hour
  }
}

export default Index;

import React from "react";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import TestimonialComponent from "@/components/templates/Index/Testimonial";

function Testimonial({ comments }) {

  return (
    <>
      <PageHeader route="Testimonial" />
      <TestimonialComponent data={comments} />
    </>
  )
}

export async function getStaticProps() {
  // Fetch data from an API
  const response = await fetch('http://localhost:8080/comments');
  const comments = await response.json();

  return {
    props: {
      comments
    },
    revalidate: 60 * 60 * 12 // 12 hours
  }
}

export default Testimonial;

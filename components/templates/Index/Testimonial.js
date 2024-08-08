import Comment from "@/components/modules/Testimonial/Testimonial";

function Testimonial({ data }) {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Testimonial</h4>
          <h1 className="display-4">Our Clients Say</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          {data.slice(0, 4).map(comment => <Comment key={comment.id} {...comment} />)}
        </div>
      </div>
    </div>
  )
}

export default Testimonial;

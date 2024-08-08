import { useState } from "react";

function Offer() {
  const [emailValue, setEmailValue] = useState("")

  const joinNewsletter = async event => {
    event.preventDefault()
    const res = await fetch("http://localhost:8080/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: emailValue })
    })

    if (res.ok) {
      console.log("you have successfully joined to the newsletter.")
      setEmailValue("")
    }
  }

  return (
    <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
      <div className="container py-5">
        <h1 className="display-3 text-primary mt-3">50% OFF</h1>
        <h1 className="text-white mb-3">Sunday Special Offer</h1>
        <h4 className="text-white font-weight-normal mb-4 pb-3">Only for Sunday from 1st Jan to 30th Jan 2045</h4>
        <form className="form-inline justify-content-center mb-4" onSubmit={joinNewsletter}>
          <div className="input-group">
            <input
              value={emailValue}
              onChange={event => setEmailValue(event.target.value)}
              type="text"
              className="form-control p-4"
              placeholder="Your Email"
              style={{ height: 60 }}
            />
            <div className="input-group-append">
              <button className="btn btn-primary font-weight-bold px-4" type="submit">Join Us</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Offer;

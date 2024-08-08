import React from 'react'

function Testimonial({ profile, username, body }) {
    return (
        <div className="testimonial-item p-2 mb-3 shadow-sm">
            <div className="d-flex align-items-center mb-3">
                <img className="img-fluid" src={profile} alt={`${username} profile image`} />
                <div className="ml-3">
                    <h4>{username}</h4>
                    <i>Profession</i>
                </div>
            </div>
            <p className="m-0">{body}</p>
        </div>
    )
}

export default Testimonial
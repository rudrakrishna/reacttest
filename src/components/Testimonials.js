import React from 'react';
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";


const Testimonials = () => {
  return (
    <>
      <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">
                What They Are Saying!
            </h1>
            <p className="primary-text">
            I got my large order of Raw Vegan foods in today via UPS and was very impressed with the packaging & freshness as well as the quality of my meals. The Raw Tuna Sandwich was soooo good!! Looking forward to being a REGULAR ordering customer from now on!!
            </p>
        </div>
        <div className="testimonial-section-botttom">
            <img src={ProfilePic} alt="" />
            <p>Just fell in love with the kale chips! Can’t wait to try more Awesome Foods!! Thank you!!!</p>
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>Jhon Doe.</h2>
        </div>
      </div>
    </>
  )
};

export default Testimonials;

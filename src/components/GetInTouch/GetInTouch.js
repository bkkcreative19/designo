import React from "react";
import Button from "../Button/Button";
import "./GetInTouch.scss";

const GetInTouch = () => {
  return (
    <section className="get-in-touch container">
      <div className="get-in-touch__content">
        <div className="get-in-touch__content-text">
          <h2>Let’s talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Button text="Get in touch" color="#333136" bgColor="#fff" />
      </div>
    </section>
  );
};

export default GetInTouch;

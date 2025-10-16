import React from "react";
import Heading from "../../common/Heading";
import { list } from "../../data/Data";
import "./recent.css";

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="How to Get Started"
            subtitle="Follow these easy steps to manage or verify property ownership on blockchain."
          />

          <div className="timeline">
            {list.map((val, index) => (
              <div className="step" key={index}>
                <div className="icon">
                  <span>{val.icon}</span>
                </div>
                <div className="content">
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;

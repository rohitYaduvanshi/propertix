import React from "react";
import Heading from "../../common/Heading";
import { awards } from "../../data/Data";
import "./awards.css";

const Awards = () => {
  return (
    <>
      <section className="awards padding">
        <div className="container">
          <Heading
            title="Trusted by 1,24,000+ Verified Property Owners on Blockchain"
            subtitle="Our Blockchain Achievements"
          />

          <div className="content grid4 mtop">
            {awards.map((val, index) => (
              <div className="boxx" key={index}>
                <div className="icon glow">
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;

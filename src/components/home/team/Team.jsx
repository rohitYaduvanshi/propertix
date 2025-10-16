import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./team.css";

const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Blockchain Experts"
            subtitle="Meet certified agents, validators, and admins who make property management secure and easy."
          />

          <div className="content mtop grid3">
            {team.map((val, index) => (
              <div className="box minimal-agent" key={index}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <h4>{val.name}</h4>
                <p>{val.role}</p>
                <button className="btn3">{val.list} Listings</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

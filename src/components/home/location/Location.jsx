import React from "react";
import Heading from "../../common/Heading";
import { blockchainInfo } from "../../data/Data";
import "./style.css";

const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="How Our Blockchain Property Management Works"
            subtitle="Secure ownership, smart contracts, and intuitive management — step-by-step."
          />

          <div className="content grid3 mtop">
            {blockchainInfo.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.cover} alt="" />
                <div className="overlay">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  {item.metamask && <div className="metamask-info">{item.metamask}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;

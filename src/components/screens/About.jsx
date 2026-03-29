import React from "react";
import assets from "../assets/assets";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/patterns/SectionHeader";

const About = () => {
  return (
    <Section id="aboutus">
      <SectionHeader
        tag="Our Excellence"
        title={
          <>
            Cultivating <br /> Connection
          </>
        }
      />

      <div className="grid-about">
        <div className="rounded-premium overflow-hidden shadow-2xl aspect-[4/5]">
          <img
            src={assets.abtimg}
            className="w-full h-full object-cover"
            alt="Heritage"
          />
        </div>

        <div className="space-y-12">
          <p className="type-manifesto">
            "The world has been taught to imagine coffee as a cup..."
          </p>
          <div className="space-y-6">
            <p className="type-body">
              At [Contingent Panacea](http://127.0.0.1:5173/#aboutus), we reject
              that erasure.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

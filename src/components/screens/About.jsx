/* 1. Go up to 'components', then down to 'ui' */
import { Section } from "../ui/Section";

/* 2. Go up to 'components', then down to 'patterns' */
import { SectionHeader } from "../patterns/SectionHeader";
import { PremiumImage } from "../patterns/PremiumImage";

/* 3. Go up twice to 'src', then down to 'assets' */
import assets from "../../assets/assets";



const About = () => {
  return (
    <Section id="aboutus">
      {/* High Level Component */}
      <SectionHeader
        tag="Our Excellence"
        title={
          <>
            Cultivating <br /> Connection
          </>
        }
      />

      <div className="grid-about">
        <PremiumImage src={assets.abtimg} alt="Heritage" />

        <div className="space-y-12">
          <p className="type-manifesto">
            "The world has been taught to imagine coffee as a cup... We are here
            to break that illusion."
          </p>

          <div className="space-y-6 max-w-lg">
            <p className="type-body">
              In much of the modern world, coffee has been reduced to a
              service—a morning ritual sold by corporations who trade heritage
              for consistency.
            </p>
            <p className="type-body">
              At [Contingent Panacea](http://127.0.0.1:5173/#aboutus), we reject
              that erasure.
            </p>
          </div>

          {/* Stats Pattern */}
          <div className="flex gap-12 pt-10 border-t border-dark/5">
            <div>
              <h4 className="type-title !text-3xl">100%</h4>
              <p className="type-tag mt-2">Ethical Origin</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

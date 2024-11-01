import { IFeature } from "../../types/LandingPage";
import FeatureCard from "../molecules/FeatureCard";

const Feature = ({ features }: { features: IFeature[] }) => {
  return (
    <section className="relative flex justify-center w-full h-0">
      <div className="flex justify-between px-[40px] py-[50px] top-[-150px] w-primary rounded-2xl bg-white shadow-xl absolute">
        {features.map((feature, i) => (
          <FeatureCard feature={feature} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Feature;

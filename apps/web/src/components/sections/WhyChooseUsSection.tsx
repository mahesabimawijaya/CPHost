import WhyChooseUsCard from "../molecules/WhyChooseUsCard";

function WhyChooseUsSection() {
  return (
    <section className="flex flex-col items-center gap-16 w-screen mx-auto py-20">
      {/* TITLE */}
      <div className="flex-col items-center flex gap-4">
        <div className="text-center text-primary bg-secondary rounded-full px-2 py-2 font-semibold w-40">
          Why Choose Us
        </div>
        <div className="text-4xl font-bold">Why Choose CPHost</div>
      </div>

      {/* STEPS */}

      {/* CARD */}
      <div className="flex flex-wrap gap-4 justify-center">
        <WhyChooseUsCard />
        <WhyChooseUsCard />
        <WhyChooseUsCard />
        <WhyChooseUsCard />
      </div>
    </section>
  );
}

export default WhyChooseUsSection;

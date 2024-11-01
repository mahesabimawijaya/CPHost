import React from "react";
import SectionSubTitleThin from "../atoms/SectionSubtitleThin";
import SectionTitle from "../atoms/SectionTitle";
import SectionDesc from "../atoms/SectionDesc";
import DomainPriceList from "../organisms/DomainPriceList";

function DomainPriceListSection() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 w-screen mx-auto py-20">
        <SectionSubTitleThin subtitle={"test"} />
        <SectionTitle title={"test"} />
        <SectionDesc desc={"test"} />
        <DomainPriceList />
      </section>
    </>
  );
}

export default DomainPriceListSection;

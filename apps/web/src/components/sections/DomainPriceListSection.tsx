import React from "react";
import SectionSubTitleThin from "../atoms/SectionSubtitleThin";
import SectionTitle from "../atoms/SectionTitle";
import SectionDesc from "../atoms/SectionDesc";
import DomainPriceList from "../organisms/DomainPriceList";
import { IDomainPriceListSection } from "../../types/DomainPage";

function DomainPriceListSection({
  domainPriceList,
}: {
  domainPriceList: IDomainPriceListSection;
}) {
  const headers = [
    domainPriceList.tableHead.head1,
    domainPriceList.tableHead.head2,
    domainPriceList.tableHead.head3,
    domainPriceList.tableHead.head4,
  ];

  const rows = Array.isArray(domainPriceList.tableContent)
    ? domainPriceList.tableContent
    : [domainPriceList.tableContent];

  return (
    <section className="flex flex-col items-center gap-4 w-screen mx-auto py-10">
      <SectionSubTitleThin subtitle={domainPriceList.subtitle} />
      <SectionTitle title={domainPriceList.title} />
      <SectionDesc desc={domainPriceList.description} />
      <DomainPriceList headers={headers} rows={rows} />{" "}
    </section>
  );
}

export default DomainPriceListSection;

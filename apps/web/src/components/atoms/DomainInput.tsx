import { useState } from "react";
import { DomainPricing } from "../../types/LandingPage";
import { useQuery } from "@tanstack/react-query";
import { fetchDomain } from "../../api/domain.service";

const DomainInput = ({ domains }: { domains: DomainPricing[] }) => {
  const [currDomain, setCurrDomain] = useState(".com");
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const { data, isFetching, refetch } = useQuery({ queryKey: ["domain"], queryFn: () => fetchDomain(query + currDomain), enabled: false });

  const handleSearch = () => {
    if (query) {
      refetch();
    }
  };

  return (
    <>
      <div className="flex items-center w-full h-[24px] bg-white pl-[25px] pr-[5px] py-[35px] rounded-lg">
        <input
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="w-[250px] flex-1 text-gray-600 text-[18px] focus:outline-none"
          placeholder="domain.com"
        />
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          id="domain-dropdown"
          className="text-black font-semibold mr-2 relative cursor-pointer"
        >
          <p>{currDomain}</p>
          {isActive && (
            <div className="absolute flex flex-col shadow-xl bg-blue-950 top-8 text-white rounded-md left-[-10px] h-[120px] overflow-y-auto">
              {domains.map((domain, i) => (
                <div
                  key={i}
                  className="px-3 py-2 hover:bg-blue-800"
                  onClick={() => {
                    setIsActive(false);
                    setCurrDomain(domain.name);
                  }}
                >
                  {domain.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <button onClick={handleSearch} disabled={isFetching} className="bg-[#FFA31A] disabled:opacity-70 w-[200px] py-[16px] font-bold rounded-md text-[18px] hover:bg-[#384BFF] duration-200">
          {isFetching ? "Searching..." : "Search Now"}
        </button>
      </div>
      {data && (
        <p className={`${data.meta.results === 0 ? "text-green-600" : "text-red-500"} mt-5 text-[18px] font-semibold`}>{data.meta.results === 0 ? "Domain is available" : "Domain is not available"}</p>
      )}
    </>
  );
};

export default DomainInput;

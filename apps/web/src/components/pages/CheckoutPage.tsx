import { useParams } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { useQuery } from "@tanstack/react-query";
import { PlanData } from "../../types/LandingPage";
import { fetchPlanById } from "../../api/strapi.service";
import Loading from "../atoms/Loading";
import PriceCard from "../molecules/PriceCard";
import { useState } from "react";
import { useFormik } from "formik";

const CheckoutPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({ queryKey: ["plan"], queryFn: () => fetchPlanById(id) });
  const [period, setPeriod] = useState("Monthly");
  const formik = useFormik({
    initialValues: {
      firstName: "Mahesa",
      lastName: "Wijaya",
      email: "mahesabw26@gmail.com",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  if (isLoading) return <Loading />;
  if (error) throw error;

  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: "url(/assets/img/hero/hero-bg-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex justify-center w-full h-[1000px] pt-[150px]"
      >
        <div className="flex justify-between w-primary">
          <div id="checkout-left" className="flex flex-col w-1/2">
            <h2 className="text-4xl text-white font-bold">Checkout</h2>
            <form onSubmit={formik.handleSubmit} className="bg-white mt-5 rounded-md w-full px-[75px] py-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-gray-700">
                    First Name
                  </label>
                  <input type="text" value={formik.values.firstName} className="border rounded-md border-gray-400 focus:outline-primary px-2 py-2 w-[230px]" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-gray-700">
                    Last Name
                  </label>
                  <input type="text" value={formik.values.lastName} className="border rounded-md border-gray-400 focus:outline-primary px-2 py-2 w-[230px]" />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-gray-700">
                  Email
                </label>
                <input type="text" value={formik.values.email} className="border rounded-md border-gray-400 focus:outline-primary px-2 py-2 w-full" />
              </div>
            </form>
          </div>
          <div id="checkout-right">
            <PriceCard plan={data?.data as PlanData} i={Number(id)} period={period} checkout />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;

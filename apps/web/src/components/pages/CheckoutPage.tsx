import { useNavigate, useParams } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { useQuery } from "@tanstack/react-query";
import { Plan, PlanData } from "../../types/LandingPage";
import { fetchPlanById } from "../../api/strapi.service";
import Loading from "../atoms/Loading";
import PriceCard from "../molecules/PriceCard";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DomainInput from "../atoms/DomainInput";
import { domains, loadSnapScript, newInvoiceCode, oneMonthLater, oneYearLater, periods } from "../../utils/helper";
import { useAppSelector } from "../../lib/redux/hooks";
import { RootState } from "../../lib/redux/store";
import { IoIosArrowDown } from "react-icons/io";
import { createData } from "../../api/axios";
import Swal from "sweetalert2";

const CheckoutPage = () => {
  const { id } = useParams();
  const parsedId = Number(id);
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery<Plan>({ queryKey: ["plan"], queryFn: () => fetchPlanById(id) });
  const { templates } = useAppSelector((state: RootState) => state.strapi);
  const [currPeriod, setCurrPeriod] = useState("Monthly");
  const [currTemplate, setCurrTemplate] = useState(0);
  const [currTemplateId, setCurrTemplateId] = useState(2);
  const [isActive, setIsActive] = useState(false);
  const [domain, setDomain] = useState("");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const price = currPeriod === "Monthly" ? data?.data.attributes.price : data?.data?.attributes?.price * 12 - (data?.data.attributes.price * 12 * 25) / 100;
  const endDate = currPeriod === "Monthly" ? oneMonthLater : oneYearLater;
  console.log(templates);
  useEffect(() => {
    loadSnapScript(() => console.log("Snap script loaded"));
    const urlParams = new URLSearchParams(window.location.search);
    const transactionStatus = urlParams.get("transaction_status");
    const statusCode = urlParams.get("status_code");

    if (transactionStatus === "settlement" && statusCode === "200") {
      Swal.fire({
        title: "Success",
        text: "Payment successful, transaction details have sent to your email",
        icon: "success",
      }).then(() => {
        navigate("/", { replace: true });
      });

      navigate(window.location.pathname, { replace: true });
    } else if (transactionStatus === "deny" || statusCode === "500") {
      Swal.fire({
        title: "Failed",
        text: "Payment Failed",
        icon: "error",
      }).then(() => {
        navigate("/", { replace: true });
      });

      // Clear query parameters
      navigate(window.location.pathname, { replace: true });
    }
  }, [navigate]);

  const formik = useFormik({
    validationSchema: Yup.object({
      data: Yup.object({
        templateId: Yup.number().required("Template Required"),
        planId: Yup.number().required("Plan Required"),
        amount: Yup.number().required("Price Required"),
        endDate: Yup.date().required("End Date Required"),
        invoice: Yup.string().required("Invoice Required"),
        domain: Yup.string().required("Domain Required"),
        user: Yup.object({
          firstName: Yup.string().required("First Name Required"),
          lastName: Yup.string().required("Last Name Required"),
          email: Yup.string().required("Email Required"),
        }),
      }),
    }),
    initialValues: {
      data: {
        templateId: currTemplateId,
        planId: parsedId,
        amount: price,
        endDate,
        invoice: newInvoiceCode,
        domain: domain,
        user: {
          firstName: "Mahesa",
          lastName: "Wijaya",
          email: "mahesabw26@gmail.com",
        },
      },
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log(values);
      const res = await createData(
        "cms",
        "transactions",
        {
          data: {
            domain: values.data.domain,
            endDate: values.data.endDate,
            amount: values.data.amount,
            invoice: values.data.invoice,
            planId: values.data.planId,
            templateId: values.data.templateId,
            plan: { id: values.data.planId },
            template: { id: values.data.templateId },
            user: {
              firstName: values.data.user.firstName,
              lastName: values.data.user.lastName,
              email: values.data.user.email,
            },
          },
        },
        "application/json"
      );

      console.log(res);
      if (window.snap) {
        window.snap.pay(res.data.token, {
          onSuccess: function (result) {
            console.log("Payment Success:", result);
          },
          onPending: function (result) {
            console.log("Payment Pending:", result);
          },
          onError: function (result) {
            console.log("Payment Error:", result);
          },
          onClose: function () {
            console.log("Payment popup closed");
          },
        });
      } else {
        console.log("Snap is not loaded yet");
      }
    },
  });

  if (isLoading || templates.data.length === 0) return <Loading />;
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
                  <input
                    type="text"
                    id="firstName"
                    name="data.user.firstName"
                    value={formik.values.data.user.firstName}
                    onChange={formik.handleChange}
                    className="border rounded-md border-gray-400 focus:outline-primary px-2 py-2 w-[230px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="data.user.lastName"
                    value={formik.values.data.user.lastName}
                    onChange={formik.handleChange}
                    className="border rounded-md border-gray-400 focus:outline-primary px-2 py-2 w-[230px]"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="email" className="text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="data.user.email"
                  value={formik.values.data.user.email}
                  onChange={formik.handleChange}
                  className="border rounded-md border-gray-400 focus:outline-primary px-2 py-2 w-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col mb-3">
                  <label htmlFor="template" className="text-gray-700">
                    Template
                  </label>
                  <div className="relative">
                    <div
                      onClick={() => {
                        setIsActive(!isActive);
                      }}
                      className="border cursor-pointer hover:border-primary flex items-center w-fit gap-3 p-2 border-gray-400 rounded-md"
                    >
                      {templates.data[currTemplate].attributes.name} <IoIosArrowDown />{" "}
                    </div>
                    {isActive && (
                      <div className="absolute top-12 border bg-white shadow-md rounded-md">
                        {templates?.data.map((template, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setCurrTemplate(i);
                              setCurrTemplateId(template.id);
                              setIsActive(false);
                            }}
                            className="px-4 py-2 hover:bg-gray-300 duration-200 cursor-pointer"
                          >
                            {template.attributes.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-1 font-medium rounded-full border border-gray-300 bg-white p-[6px]">
                  {periods.map((period, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setCurrPeriod(period.benefit);
                      }}
                      className={`${currPeriod === period.benefit ? "bg-primary text-white cursor-default" : "cursor-pointer hover:bg-blue-100"} rounded-full py-3 px-7 w-1/2 duration-300`}
                    >
                      {period.benefit}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col h-[150px]">
                <label htmlFor="domain" className="text-gray-700">
                  Domain
                </label>
                <DomainInput domains={domains} setDomain={setDomain} />
                <p className="text-red-500">{formik.errors.data?.domain}</p>
              </div>
              <button
                type="submit"
                className="bg-green-600 justify-self-end flex items-center justify-center gap-3 hover:bg-[#FFA31A] duration-200 text-white px-10 py-3 rounded-md font-medium text-lg mt-5"
              >
                Checkout
              </button>
            </form>
          </div>
          <div id="checkout-right">
            <PriceCard plan={data?.data as PlanData} i={Number(id) - 1} period={currPeriod} checkout />{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;

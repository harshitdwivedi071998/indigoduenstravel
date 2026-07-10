import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";


export default function Contact() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");


  const formik = useFormik({

    initialValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      pickup: "",
      drop: "",
      travel_date: "",
      vehicle: "",
      message: "",
    },


    validationSchema: Yup.object({

      name: Yup.string()
        .matches(
          /^[A-Za-z\s]+$/,
          "Name can contain only letters and spaces"
        )
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name cannot exceed 50 characters")
        .required("Name is required"),


      email: Yup.string()
        .matches(
          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
          "Enter a valid email address"
        )
        .required("Email is required"),


      phone: Yup.string()
        .matches(
          /^[0-9]{10}$/,
          "Phone number must be 10 digits"
        )
        .required("Phone is required"),


      country: Yup.string()
        .required("Country is required"),


      pickup: Yup.string()
        .required("Pickup location required"),


      drop: Yup.string()
        .required("Drop location required"),


      travel_date: Yup.string()
        .required("Travel date required"),


      vehicle: Yup.string()
        .required("Please select vehicle"),


      message: Yup.string()
        .min(10, "Message should be minimum 10 characters")
        .required("Message required")

    }),



    onSubmit: async (values, { resetForm }) => {


      setLoading(true);


      try {


        await emailjs.send(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          values,
          "YOUR_PUBLIC_KEY"
        );


        setSuccess(
          "Your inquiry has been sent successfully."
        );


        resetForm();


      } catch (error) {

        console.log(error);

        setSuccess(
          "Something went wrong. Please try again."
        );

      }


      setLoading(false);

    }

  });

  useEffect(() => {
    if (formik.submitCount === 0) return;

    const firstError = Object.keys(formik.errors)[0];

    if (firstError) {
      const element = document.querySelector(
        `[name="${firstError}"]`
      );

      if (element) {
        element.focus({
          preventScroll: true,
        });

        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [formik.submitCount]);



  return (
    <>
      <Navbar />
      <section className="pt-36 pb-24 bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Let us help you plan a comfortable and memorable journey across Rajasthan.
          </p>
        </div>

      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-10 leading-8">
                Whether you need airport transfers, sightseeing tours, group travel,
                or custom transportation services, our team is ready to assist you.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <FaPhoneAlt className="text-[#D4A017]" size={22} />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <FaEnvelope className="text-[#D4A017]" size={22} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">
                      info@royaldesertrides.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <FaMapMarkerAlt className="text-[#D4A017]" size={22} />
                  <div>
                    <h4 className="font-semibold">
                      Location
                    </h4>
                    <p className="text-gray-600">
                      Jodhpur, Rajasthan, India
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold"
                >
                  <FaWhatsapp />
                  Chat On WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-3xl font-bold mb-6">
                Request A Quote
              </h3>
              <form
                onSubmit={formik.handleSubmit}
                className="space-y-5"
              >



                <input
                  name="name"
                  placeholder="Full Name"
                  className={`w-full p-4 rounded-xl border ${formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : "border-gray-300"
                    }`}
                  value={formik.values.name}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    formik.setFieldValue("name", value);
                  }}
                  onBlur={formik.handleBlur}
                />

                {
                  formik.touched.name &&
                  formik.errors.name &&
                  <p className="text-red-500">
                    {formik.errors.name}
                  </p>
                }




                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full border p-4 rounded-xl"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {
                  formik.touched.email &&
                  formik.errors.email &&
                  <p className="text-red-500">
                    {formik.errors.email}
                  </p>
                }




                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  maxLength={10}
                  className="w-full border p-4 rounded-xl"

                  value={formik.values.phone}

                  onChange={(e) => {

                    formik.setFieldValue(
                      "phone",
                      e.target.value.replace(/\D/g, "")
                    )

                  }}

                  onBlur={formik.handleBlur}

                />


                {
                  formik.touched.phone &&
                  formik.errors.phone &&
                  <p className="text-red-500">
                    {formik.errors.phone}
                  </p>
                }




                <input
                  name="country"
                  onBlur={formik.handleBlur}
                  placeholder="Country"
                  className="w-full border p-4 rounded-xl"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                />
                {formik.touched.country && formik.errors.country && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.country}
                  </p>
                )}



                <input
                  name="pickup"
                  onBlur={formik.handleBlur}
                  placeholder="Pickup Location"
                  className="w-full border p-4 rounded-xl"
                  value={formik.values.pickup}
                  onChange={formik.handleChange}
                />

                {formik.touched.pickup && formik.errors.pickup && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.pickup}
                  </p>
                )}



                <input
                  name="drop"
                  onBlur={formik.handleBlur}
                  placeholder="Drop Location"
                  className="w-full border p-4 rounded-xl"
                  value={formik.values.drop}
                  onChange={formik.handleChange}
                />

                {formik.touched.drop && formik.errors.drop && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.drop}
                  </p>
                )}



                <input
                  type="date"
                  onBlur={formik.handleBlur}
                  name="travel_date"
                  className="w-full border p-4 rounded-xl"
                  value={formik.values.travel_date}
                  onChange={formik.handleChange}
                />

                {formik.touched.travel_date && formik.errors.travel_date && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.travel_date}
                  </p>
                )}


                <select
                  onBlur={formik.handleBlur}
                  name="vehicle"
                  className="w-full border p-4 rounded-xl"
                  value={formik.values.vehicle}
                  onChange={formik.handleChange}
                >


                  <option value="">
                    Select Vehicle
                  </option>


                  <option>
                    Toyota Innova Crysta
                  </option>


                  <option>
                    Tempo Traveller
                  </option>
                  <option>
                    Luxury SUV
                  </option>
                </select>

                {formik.touched.vehicle && formik.errors.vehicle && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.vehicle}
                  </p>
                )}
                <textarea
                  name="message"
                  rows="5"
                  onBlur={formik.handleBlur}
                  placeholder="Tell us about your travel requirements..."
                  className="w-full border p-4 rounded-xl"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
                {formik.touched.message &&
                  formik.errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.message}
                    </p>
                  )}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-semibold flex cursor-pointer items-center justify-center gap-3 transition-all duration-300 ${loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#D4A017] hover:bg-yellow-700 active:scale-95 text-white"
                    }`}
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin text-lg" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>




                {success && (
                  <div
                    className={`mt-4 p-4 rounded-xl text-center font-medium ${success.includes("✅")
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-red-100 text-red-700 border border-red-300"
                      }`}
                  >
                    {success}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[450px]">
        <iframe
          title="Jodhpur Location"
          src="https://www.google.com/maps?q=Jodhpur,Rajasthan&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        />
      </section>
      <Footer />
    </>
  );
}
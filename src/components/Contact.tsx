import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import Popup from "./ContactSubmitPopup";
import { useForm } from "react-hook-form";
import RootLayout from "../layout/RootLayout";
import { Link } from "react-router-dom";

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorSubmitting, setErrorSubmitting] = useState(false);

  const submitForm = (data) => {
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (response) => {
          setSubmitted(true);
          reset();
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED TO SEND MESSAGE...", error);
          setErrorSubmitting(true);
        }
      );
  };

  return (
    <>
      <RootLayout>
        <h1 className="pageTitle">Contact Me</h1>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 pb-10">
          <div className="lg:col-span-2">
            <h1 className="font-bold text-6xl text-primaryColor">Let's Talk</h1>
            <p className="max-w-xl text-lg pt-4 text-grayColor">
              Have any questions? Send me a message here! <br />I respond
              quickly (within 48 hours). <br />
              <br />
              Additional ways to get in touch <br />
              LinkedIn:{" "}
              <Link
                className="text-primaryColor hover:underline"
                to="https://www.linkedin.com/in/prasad-chavan2003/"
                target="_blank"
              >
                /in/prasad-chavan2003/
              </Link>{" "}
              <br />
              Email:{" "}
              <Link
                className="text-primaryColor hover:underline"
                to="mailto:askokc4321@gmail.com"
              >
                askokc4321@gmail.com
              </Link>
            </p>
          </div>

          <div className="rounded-lg lg:col-span-3">
            <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only text-whiteColor">
                  Name
                </label>
                <input
                  id="name"
                  className="w-full p-3 text-sm rounded-sm border border-grayColor bg-bgGrayColor placeholder:text-grayColor"
                  placeholder="Name"
                  type="text"
                  {...register("name")}
                />
                <p className="text-red-600">{errors.name?.message}</p>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  className="w-full p-3 text-sm rounded-sm border border-grayColor bg-bgGrayColor placeholder:text-grayColor"
                  placeholder="Email address"
                  type="email"
                  {...register("email")}
                />
                <p className="text-red-600">{errors.email?.message}</p>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 text-sm rounded-sm border border-grayColor bg-bgGrayColor placeholder:text-grayColor"
                  placeholder="Message"
                  {...register("message")}
                ></textarea>
                <p className="text-red-600">{errors.message?.message}</p>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="btn inline-flex items-center justify-center w-full px-5 py-3 rounded-lg sm:w-auto space-x-2"
                >
                  <span className="font-medium"> Send </span>
                  <IoIosSend size="20px" />
                </button>
              </div>
              {submitted && (
                <Popup
                  title="Message Sent! 👍"
                  message="Thank you for your message. I will get back to you within 48 hours."
                />
              )}
              {errorSubmitting && (
                <Popup
                  title="Error Sending Message!"
                  message="If this error keeps occurring please contact me directly through email and/or LinkedIn"
                />
              )}
            </form>
          </div>
        </div>
      </RootLayout>
    </>
  );
};

export default Contact;

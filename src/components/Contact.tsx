import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import Popup from "./ContactSubmitPopup";
import RootLayout from "../layout/RootLayout";

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorSubmitting, setErrorSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      if (contactSchema.isValidSync(Object.fromEntries(formData))) {
        emailjs
          .sendForm("service_womj1hn", "template_6kca3d9", formRef.current, {
            publicKey: "pqxjk8SFtfGw-by0G",
          })
          .then(
            (response) => {
              setSubmitted(true);
              formRef?.current?.reset();
              console.log("SUCCESS!", response.status, response.text);
            },
            (error) => {
              console.log("FAILED TO SEND MESSAGE...", error);
              setErrorSubmitting(true);
            }
          );
      } else {
        // Handle form validation errors
        console.log("Form validation failed");
      }
    }
  };

  return (
    <RootLayout>
      <h1 className="pageTitle">Contact Me</h1>
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 pb-10">
        <div className="lg:col-span-2">
          <h1 className="font-bold text-6xl text-primaryColor">Let's Talk</h1>
          <p className="max-w-xl text-lg pt-4 text-grayColor">
            Have any questions? Send me a message here! <br />I respond quickly
            (within 48 hours). <br />
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
          <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only text-whiteColor">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="w-full p-3 text-whiteColor text-sm rounded-sm border border-grayColor bg-bgGrayColor placeholder:text-grayColor"
                placeholder="Name"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                className="w-full p-3 text-whiteColor text-sm rounded-sm border border-grayColor bg-bgGrayColor placeholder:text-grayColor"
                placeholder="Email address"
                type="email"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 text-whiteColor text-sm rounded-sm border border-grayColor bg-bgGrayColor placeholder:text-grayColor"
                placeholder="Message"
              ></textarea>
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
  );
};

export default Contact;

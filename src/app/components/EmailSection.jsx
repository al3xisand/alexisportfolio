"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import emailjs from 'emailjs-com';

const EmailSection = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      console.error("Please fill in all fields");
      return;
    }

    try {
      emailjs.init("JGnSU18B_UbQ89xyZ");

      const templateParams = {
        to_name: "alexisand2001@gmail.com",
        from_name: "alexisand201",
        emailjs_email: formData.email,
        emailjs_subject: formData.subject,
        emailjs_message: formData.message,
      };

      const response = await emailjs.send("service_psbiz3k", "template_sg84iws", templateParams);
      console.log("Email sent successfully:", response);
      setEmailSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com" legacyBehavior>
            <a><Image src={GithubIcon} alt="Github Icon" width="24" height="24" /></a>
          </Link>
          <Link href="https://linkedin.com" legacyBehavior>
            <a><Image src={LinkedinIcon} alt="Linkedin Icon" width="24" height="24" /></a>
          </Link>
        </div>
      </div>
      <div>
        {emailSent ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-[#1F2937] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-primary-500 focus:ring-primary-500"
                placeholder="Jane Doe"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#1F2937] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-primary-500 focus:ring-primary-500"
                placeholder="jane@example.com"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#1F2937] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-primary-500 focus:ring-primary-500"
                placeholder="Subject"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#1F2937] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-primary-500 focus:ring-primary-500"
                placeholder="Your message..."
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium py-3 px-6 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

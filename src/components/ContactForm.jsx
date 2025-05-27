import React, { useState } from "react";
import { FiUser, FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const phoneRegex = /^\d{10}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && value && !phoneRegex.test(value)) {
      e.target.setCustomValidity("Phone number must be 10 digits.");
    } else {
      e.target.setCustomValidity("");
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = {
      ...formData,
      date: new Date().toLocaleDateString(),
    };

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/qqye3i7whwnu8w9a0u1pre3j0dsz7et6",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        navigate("/thankyou");
      } else {
        alert("Submission failed. Try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" ">
      <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-2xl  ">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-semibold text-[#7A3EF2]">Let’s Connect Together</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Share your details & we’ll connect to you.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="flex items-center bg-white border border-gray-300 rounded-md p-3 shadow-sm">
            <FiUser className="text-gray-400 text-xl mr-3" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className="w-full bg-transparent outline-none text-gray-700"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex items-center bg-white border border-gray-300 rounded-md p-3 shadow-sm">
            <FiPhone className="text-gray-400 text-xl mr-3" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="10-digit mobile number"
              className="w-full bg-transparent outline-none text-gray-700"
              pattern="^\d{10}$"
              title="Phone number must be exactly 10 digits"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-white border border-gray-300 rounded-md p-3 shadow-sm">
            <FiMail className="text-gray-400 text-xl mr-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              className="w-full bg-transparent outline-none text-gray-700"
              required
            />
          </div>

          {/* Description */}
          <div className="flex items-start bg-white border border-gray-300 rounded-md p-3 shadow-sm">
            <FiMessageSquare className="text-gray-400 text-xl mr-3 mt-1" />
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Tell us about your space or requirement"
              className="w-full bg-transparent outline-none text-gray-700 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#7A3EF2] hover:bg-[#612ce0]"
            } text-white font-semibold py-3 rounded-md transition duration-300`}
          >
            {isSubmitting ? "Submitting..." : "Let's Talk"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;

import   { useState, lazy  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Lazy-load icons
const FiUser = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiUser })));
const FiPhone = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiPhone })));
const FiMail = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiMail })));
const FiMessageSquare = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiMessageSquare })));
const FiKey = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiKey })));

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
    otp: "",
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
    try {
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istTime = new Date(now.getTime() + istOffset);
      const timestamp = istTime.toISOString().replace("T", " ").split(".")[0];

      const dataToSend = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        description: formData.description,
        timestamp,
      };

      console.log("Sending form data:", dataToSend);

      const response = await axios.post(
        "https://hook.eu2.make.com/zprge6g8im5axb6r4vpzmtxuemo6syoi",
        dataToSend
      );

      if (response.status === 200) {
        alert("Form submitted successfully!");
        navigate("/thank-you");
        setFormData({
          name: "",
          phone: "",
          email: "",
          description: "",
          otp: "",
        });
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="max-w-lg mx-auto bg-gray- md:p-8 p-0 rounded-2xl">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="md:text-2xl text-xl font-semibold text-[#7A3EF2]">
            Let’s Connect Together
          </h2>
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
              placeholder="Your name*"
              className="w-full bg-transparent outline-none text-gray-700"
              required
            />
          </div>

          {/* Phone + Send OTP */}
          <div className="flex items-center bg-white border border-gray-300 rounded-md p-3 shadow-sm">
            <FiPhone className="text-gray-400 text-xl mr-3" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="10-digit mobile number*"
              className="w-full bg-transparent outline-none text-gray-700 mr-2"
              pattern="^\d{10}$"
              title="Phone number must be exactly 10 digits"
              required
            />
            {/* <button
              type="button"
              onClick={() => alert("OTP sent!")} 
              className="md:text-sm bg-[#7A3EF2] text-white py-1 px-4 rounded-md text-xs font-semibold hover:underline"
            >
              Send OTP
            </button> */}
          </div>

          {/* OTP Field */}
          {/* <div className="flex items-center bg-white border border-gray-300 rounded-md p-3 shadow-sm">
            <FiKey className="text-gray-400 text-xl mr-3" />
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleInputChange}
              placeholder="Enter OTP"
              className="w-full bg-transparent outline-none text-gray-700"
            />

             <button
              type="button"
              onClick={() => alert("OTP sent!")} 
              className="md:text-sm bg-[#7A3EF2] text-white py-1 px-4 rounded-md text-xs font-semibold hover:underline"
            >
              Verify  
            </button>
          </div> */}

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
          {/* <div className="flex items-start bg-white border border-gray-300 rounded-md p-3 shadow-sm">
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
          </div> */}

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


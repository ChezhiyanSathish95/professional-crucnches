import React, { useState } from "react";
import axios from "axios";
import "./RegisterForm.css";

const RegisterForm = () => {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    dob: "",
    qualification: "",
    competencies: "",
    experience: "",
    city: "",
    state: "",
    address: "",
    referral: "",
    languages: "",
    computerSkills: "",
    laptop: "",
    bike: "",
    native: "",
    resume: null,
    marksheet: null,
    aadhar: null,
    photo: null,
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formDataToSend = new FormData();

    // Append text fields
    Object.keys(formData).forEach((key) => {
      if (!["resume", "marksheet", "aadhar", "photo"].includes(key)) {
        formDataToSend.append(key, formData[key] || "");
      }
    });

    // Append files if they exist
    ["resume", "marksheet", "aadhar", "photo"].forEach((fileKey) => {
      if (formData[fileKey]) {
        formDataToSend.append(fileKey, formData[fileKey]);
      }
    });

    try {
      const response = await axios.post("http://localhost/backend/server.php", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Form submitted successfully!"); // Success message

      // Reset form fields after submission
      setFormData(initialFormState);

      // Clear file inputs manually
      ["resume", "marksheet", "aadhar", "photo"].forEach((fileKey) => {
        const inputElement = document.getElementById(fileKey);
        if (inputElement) inputElement.value = "";
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="register-form-container">
      <div className="form">
        <h1 className="title">Register</h1>
        <form onSubmit={handleSubmit}>
          {[
            { name: "name", label: "Name" },
            { name: "email", label: "Email", type: "email" },
            { name: "phone", label: "Phone" },
            { name: "dob", label: "", type: "date" },
            { name: "qualification", label: "Qualification" },
            { name: "experience", label: "Experience in Relevant Field" },
            { name: "city", label: "City" },
            { name: "state", label: "State" },
            { name: "referral", label: "Referral (If any)" },
            { name: "languages", label: "Languages Known" },
            { name: "computerSkills", label: "Computer Skills" },
            { name: "native", label: "Native Place" },
          ].map(({ name, label, type = "text" }) => (
            <label key={name}>
              <input
                type={type}
                name={name}
                className="input"
                placeholder=" "
                value={formData[name]}
                onChange={handleChange}
                required
              />
              <span>{label}</span>
            </label>
          ))}

          <label className="dropdown-label">
            <select name="competencies" className="input" value={formData.competencies} onChange={handleChange} required>
              <option value="">Select Competency</option>
              {[
                "Internal Audits/IFC",
                "Stock Audits/Physical Verification of Assets",
                "Statutory Audits",
                "Bank Audits",
                "Valuation/Financial Modelling",
                "Forensic Audits",
                "Direct Taxation",
                "Indirect Taxation",
                "Book Keeping",
                "Secretarial Compliances/Company Law",
                "Project Financing",
                "Equity Funding",
                "IFRS / Ind AS Reporting",
                "Due Diligence",
                "ITGC Review",
                "IT and System Audits",
                "Insolvency and Bankruptcy",
                "Other",
              ].map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>

          <label>
            <textarea
              name="address"
              className="input"
              placeholder=" "
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
            <span>Address in Full</span>
          </label>

          {["laptop", "bike"].map((item) => (
            <div className="radio-group" key={item}>
              <label>{item === "laptop" ? "Do you own a laptop?" : "Bike Available?"}</label>
              <input type="radio" name={item} value="Yes" checked={formData[item] === "Yes"} onChange={handleChange} /> Yes
              <input type="radio" name={item} value="No" checked={formData[item] === "No"} onChange={handleChange} /> No
            </div>
          ))}

          {["resume", "aadhar", "marksheet", "photo"].map((file) => (
            <label key={file}>
              <span className="up-label">Upload {file.charAt(0).toUpperCase() + file.slice(1)}</span>
              <input
                type="file"
                name={file}
                id={file}
                className="input"
                onChange={handleFileChange}
                required
              />
            </label>
          ))}

          <button type="submit" className="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

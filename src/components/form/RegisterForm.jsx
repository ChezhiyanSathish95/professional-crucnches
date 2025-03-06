import React, { useState } from "react";
import axios from "axios";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
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
<<<<<<< HEAD
    computerSkills: "",
    laptop: "",
    bike: "",
    native: "",
=======
    computerskills: "",
    native: "",
    laptop: "",
    bike: "",
>>>>>>> e832c6df17abd24a6d6b450ffa46d2bf8570ce49
    resume: null,
    marksheet: null,
    aadhar: null,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
  
    Object.keys(formData).forEach((key) => {
<<<<<<< HEAD
        formDataToSend.append(key, formData[key]);
=======
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
>>>>>>> e832c6df17abd24a6d6b450ffa46d2bf8570ce49
    });
  
    console.log("FormData before sending:");
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    try {
<<<<<<< HEAD
        const response = await fetch('http://localhost:5173/backend/server.php', {
            method: 'POST',
            body: formDataToSend
        });

        const text = await response.text(); // Read the response as text first

        try {
            const data = JSON.parse(text); // Try parsing as JSON
            console.log("Form submitted successfully:", data);
        } catch (error) {
            console.error("Invalid JSON response:", text);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};
  return (
    <div className="register-form-container">
      <div className="form">
        <h1 className="title">Register Now!</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="name" className="input" placeholder=" " onChange={handleChange} required />
            <span>Name</span>
          </label>
          <label>
            <input type="email" name="email" className="input" placeholder=" " onChange={handleChange} required />
            <span>Email</span>
          </label>
          <label>
            <input type="text" name="phone" className="input" placeholder=" " onChange={handleChange} required />
            <span>Phone</span>
          </label>
          <label>
            <input type="date" name="dob" className="input" onChange={handleChange} required />
          </label>
          <label>
            <input type="text" name="qualification" className="input" placeholder=" " onChange={handleChange} required />
            <span>Qualification</span>
          </label>
          <label className="dropdown-label">
            <select name="competencies" className="input" onChange={handleChange} required>
              <option value="">Select Competency</option>
              {[
                'Internal Audits/IFC', 'Stock Audits/Physical Verification of Assets', 'Statutory Audits',
                'Bank Audits', 'Valuation/Financial Modelling', 'Forensic Audits', 'Direct Taxation',
                'Indirect Taxation', 'Book Keeping', 'Secretarial Compliances/Company Law', 'Project Financing',
                'Equity Funding', 'IFRS / Ind AS Reporting', 'Due Diligence', 'ITGC Review', 'IT and System Audits',
                'Insolvency and Bankruptcy', 'Other'
              ].map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            <input type="text" name="experience" className="input" placeholder=" " onChange={handleChange} required />
            <span>Experience in Relevant Field</span>
          </label>
          <label>
            <input type="text" name="city" className="input" placeholder=" " onChange={handleChange} required />
            <span>City</span>
          </label>
          <label>
            <input type="text" name="state" className="input" placeholder=" " onChange={handleChange} required />
            <span>State</span>
          </label>
          <label>
            <textarea name="address" className="input" placeholder=" " onChange={handleChange} required></textarea>
            <span>Address in Full</span>
          </label>
          <label>
            <input type="text" name="referral" className="input" placeholder=" " onChange={handleChange} required />
            <span>How Did You Get To Know About Us? </span>
          </label>
          <label>
            <input type="text" name="languages" className="input" placeholder=" " onChange={handleChange} required />
            <span>Languages Known</span>
          </label>
          <label>
            <input type="text" name="computerSkills" className="input" placeholder=" " onChange={handleChange} required />
            <span>Computer Skills</span>
          </label>
          <label>
            <input type="text" name="native" className="input" placeholder=" " onChange={handleChange} required />
            <span>Native Place</span>
          </label>
          <div className="radio-group" style={{ marginBottom: 20 }}>
            <label>You Have Own Laptop?</label>
            <input type="radio" name="laptop" value="Yes" onChange={handleChange} /> Yes
            <input type="radio" name="laptop" value="No" onChange={handleChange} /> No
          </div>
          <div className="radio-group" style={{ marginBottom: 40 }}>
            <label>Bike Available?</label>
            <input type="radio" name="bike" value="Yes" onChange={handleChange} /> Yes
            <input type="radio" name="bike" value="No" onChange={handleChange} /> No
          </div>
          
          <label>
            <span className='up-label'>Upload Resume</span>
            <input type="file" name="resume" className="input" onChange={handleFileChange} required />
          </label>
          <label>
            <span className='up-label'>Upload Aadhaar</span>
            <input type="file" name="aadhar" className="input" onChange={handleFileChange} required />
          </label>
          <label>
            <span className='up-label'>Upload Marksheet</span>
            <input type="file" name="marksheet" className="input" onChange={handleFileChange} required />
          </label>
          <label>
            <span className='up-label'>Upload Recent Photo</span>
            <input type="file" name="photo" className="input" onChange={handleFileChange} required />
          </label>
          <button type="submit" className="submit">Register</button>
        </form>
      </div>
    </div>
=======
      const response = await axios.post("http://localhost/backend/server.php", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response Data:", response.data);
      alert(response.data.message);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="register-form-container" encType="multipart/form-data">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
      <input type="date" name="dob" onChange={handleChange} required />
      <input type="text" name="qualification" placeholder="Qualification" onChange={handleChange} required />
      <input type="text" name="competencies" placeholder="Competencies" onChange={handleChange} required />
      <input type="text" name="experience" placeholder="Experience" onChange={handleChange} required />
      <input type="text" name="city" placeholder="City" onChange={handleChange} required />
      <input type="text" name="state" placeholder="State" onChange={handleChange} required />
      <textarea name="address" placeholder="Address" onChange={handleChange} required></textarea>
      <input type="text" name="referral" placeholder="Referral" onChange={handleChange} required />
      <input type="text" name="languages" placeholder="Languages" onChange={handleChange} required />
      <input type="text" name="computerskills" placeholder="Computer Skills" onChange={handleChange} required />
      <input type="text" name="native" placeholder="Native Place" onChange={handleChange} required />

      <label>
        Laptop:
        <input type="radio" name="laptop" value="yes" onChange={handleChange} required /> Yes
        <input type="radio" name="laptop" value="no" onChange={handleChange} required /> No
      </label>

      <label>
        Bike:
        <input type="radio" name="bike" value="yes" onChange={handleChange} required /> Yes
        <input type="radio" name="bike" value="no" onChange={handleChange} required /> No
      </label>

      <input type="file" name="resume" onChange={handleFileChange}  />
      <input type="file" name="aadhar" onChange={handleFileChange}  />
      <input type="file" name="marksheet" onChange={handleFileChange}  />
      <input type="file" name="photo" onChange={handleFileChange}  />

      <button type="submit">Register</button>
    </form>
>>>>>>> e832c6df17abd24a6d6b450ffa46d2bf8570ce49
  );
};

export default RegisterForm;

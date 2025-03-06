import React, { useState } from 'react';
import './RegisterForm.css';

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
    computerSkills: "",
    laptop: "",
    bike: "",
    native: "",
    resume: null,
    marksheet: null,
    aadhar: null,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
    });

    try {
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
  );
};

export default RegisterForm;

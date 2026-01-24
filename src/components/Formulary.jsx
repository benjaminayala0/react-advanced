import React, { useState } from 'react'

const MyFormulary = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: 'formart@gmail.com',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const processChange = (event) => {
    const {name,value} = event.target;
    setFormData({
      ...formData,
      [name]: value
    });

    setFormErrors((prevFormErrors) => ({
    ...prevFormErrors,
    [name]: ''
    }));
  }

  const processSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newFormErrors = {};

    if (!formData.username.trim()) {
      newFormErrors.username = 'Username is required';
    } 
    if (!formData.email.trim()) {
      newFormErrors.email = 'Email is required';
    }else if (!emailRegex.test(formData.email)) {
      newFormErrors.email = 'Email is not valid';
    }
    if (!formData.password.trim()) {
      newFormErrors.password = 'Password is required';
    }

    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
    } else {
      console.log('Form data is valid. Proceed with submission.');

    setFormData({
      username: '',
      email: '',
      password: ''
  });
    setFormErrors({});
    }
  };
   
  return (
    <div>
      <form autoComplete="off" onSubmit={processSubmit}>
        <div>
          <label htmlFor="username">User:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={processChange}
          />   
          {formErrors.username && <span style={{color: 'red'}}>{formErrors.username}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={processChange}
          />
          {formErrors.email && <span style={{color: 'red'}}>{formErrors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={processChange}
          />
          {formErrors.password && <span style={{color: 'red'}}>{formErrors.password}</span>}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MyFormulary;
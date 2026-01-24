import React, { useState } from 'react'

const MyFormulary = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: 'formart@gmail.com',
    password: ''
  });

  const processChange = (event) => {
    const {name,value} = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const processSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
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
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MyFormulary;
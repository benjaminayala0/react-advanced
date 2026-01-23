import React, { useState } from 'react'

const MyFormulary = () => {

    const OnforEvent = (event) => {
        console.log('event on', event.type);
    }
    
  return (
    <div>
      <form autoComplete="off">
        <div>
          <label htmlFor="username" onMouseMove={OnforEvent} >User:</label>
          <input
            type="text"
            id="username"
            name="username"
          />   
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={OnforEvent}
          />
        </div>
        <div>
          <label htmlFor="password" onclick={OnforEvent}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MyFormulary;
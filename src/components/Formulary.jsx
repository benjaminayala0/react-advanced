import React, { useState } from 'react'

const MyFormulary = () => {

    const imputOn = (event) => {
      event.stopPropagation();
        console.log('input on', event.type);
    }

    const OnforEvent = (event) => {
      event.stopPropagation();
        console.log('event on', event.type);
    }
    
  return (
    <div>
      <form autoComplete="off" onClick={OnforEvent}>
        <div>
          <label htmlFor="username" onMouseMove={OnforEvent} >User:</label>
          <input
            type="text"
            id="username"
            name="username"
            onClick={imputOn}
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
          <label htmlFor="password" onClick={OnforEvent}>Password:</label>
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
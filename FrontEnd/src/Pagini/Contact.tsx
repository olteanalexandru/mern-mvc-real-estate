// @ts-nocheck
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {


  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ynv83op', 'template_3oljtxo', form.current, '92Cb78cmp5MUyYktO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <div className="container-fluid text-center bg-grey border-colorat" >
	<div className="row">
		<div className="col-md-12">

    <form ref={form} onSubmit={sendEmail} style={{'display': 'inline-grid'}}>
      <label>Name</label>
      <input type="text" value={localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['name'] : "Name"} name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

    </div>
	</div>
</div>
  );
};   

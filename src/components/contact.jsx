'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("myzypkjg");
  if (state.succeeded) {
      return (
       <div>

       <p className='bg-slate-200  h-52 w-72 p-6 text-2xl mx-16 my-20 font-semibold'>Thanks for Contact Us! <br /> 🙂 </p></div>
      )
      
  }
  return (
   <div>
 
   <section className="my-4">
    <div className=" mx-9">
     <h1 className="xl:text-4xl font-serif my-6 "><b>Get In touch</b></h1>
     <h1 className="xl:text-2xl font-serif text-gray-700 ">Have a question or just want to say hi? We love to hear from you.</h1>
    </div>
   </section>
   <form onSubmit={handleSubmit}>

   <label htmlFor="name">
      Name
      </label>
      <input
      className="bg-slate-200 mx-4 xl:h-8 xl:w-72  my-5"
        id="text"
        type="text" 
        name="text"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
      className="bg-slate-200 mx-4 xl:h-8 xl:w-72  my-5"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            <label htmlFor="message">
    Message
      </label>
      <textarea
       className="bg-slate-200   mx-4 xl:w-1/2 "
        id="message"
        rows={6}
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="sm:text-2xl text-white sm:ml-56 my-9 border border-accent bg-blue-950 xl:h-12 xl:w-60 rounded-2xl hover:bg-stone-600" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
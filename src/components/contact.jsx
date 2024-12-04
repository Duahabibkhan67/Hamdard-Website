'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("myzypkjg");
  if (state.succeeded) {
      return (
       <div>

       <p className='bg-slate-200  h-52 w-44 lg:w-72 md:w-72 p-6 text-2xl mx-16 my-20 font-semibold'>Thanks for Contacting Us! <br /> 🙂 </p></div>
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
      className="bg-slate-200 mx-0 sm:mx-4 lg:ml-16 h-8 w-44 lg:w-72 md:w-52   my-5"
        id="text"
        type="text" 
        name="text"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br />
      <label htmlFor="email">
        Email Address
      </label>
      <input
      className="bg-slate-200 mx-0 sm:mx-2 lg:mx-2  h-8 w-44 lg:w-72 md:w-52  my-4"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br />
            <label htmlFor="message">
    Message
      </label>
      <textarea
       className="bg-slate-200   mx-0 sm:mx-4 w-1/2 "
        id="message"
        rows={6}
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <br />
      <button className="text-xl sm:text-2xl lg:text-2xl  text-white ml-5 sm:ml-56 lg:ml-56  my-9 border border-accent bg-blue-950 h-12 w-60 rounded-2xl hover:bg-stone-600" type="submit" disabled={state.submitting}>
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
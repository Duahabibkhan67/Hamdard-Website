'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("myzypkjg");
  if (state.succeeded) {
      return (
       <div>

       <p className='bg-slate-200  h-52 w-72 p-6 text-2xl mx-16 my-20 font-semibold'>Thanks for Applying In Our College! <br /> 🙂 </p></div>
      )
      
  }
  return (
   <div>
   <form onSubmit={handleSubmit}>

   <label className="text-white mx-4 my-6 sm:h-20  font-serif"  htmlFor="name">
      Name
      </label>
      <input
     className="bg-slate-950 mx-4 sm:h-8 sm:w-60 text-white my-5"
     placeholder="Your name"
        id="text"
        type="text" 
        name="text"
        required
      />
      <ValidationError 
        prefix="text" 
        field="text"
        errors={state.errors}
      />
 
     
           {/* number */}
      <label  className="text-white mx-4 my-6 sm:h-20   font-serif" htmlFor="number">
       Phone Number
      </label>
      <input
       placeholder="Your Number"
 className="bg-slate-950 mx-4 sm:h-8 sm:w-52  my-5 text-white"
        id="number"
        type="number" 
        name="number"
        required
      />
      <ValidationError 
        prefix="number" 
        field="number"
        errors={state.errors}
      />
      <label  className="text-white mx-4 my-6 sm:h-20   font-serif" htmlFor="number">
        Matric Number
      </label>
      <input
       placeholder="Your Matric Number"
 className="bg-slate-950 mx-4 sm:h-8 sm:w-52 text-white  my-5"
        id="number"
        type="number" 
        name="number"
        required
      />
      <ValidationError 
        prefix="number" 
        field="number"
        errors={state.errors}
      />

       <label  className="text-white mx-4 my-6 sm:h-20   font-serif" htmlFor="field">
      Which Field
      </label>
      <input
       placeholder="Your Field"
 className="bg-slate-950 mx-4 sm:h-8 sm:w-52 my-5 text-white"
        id="text"
        type="text" 
        name="text"
        required
      />
      <ValidationError 
        prefix="text" 
        field="text"
        errors={state.errors}
      />
            <label  className="text-white mx-4 my-6 sm:h-20  font-serif" htmlFor="email">
        Email Address
      </label>
      <input
       placeholder="Your E-mail"
 className="bg-slate-950 mx-4 sm:h-8 sm:w-52  my-5 text-white"
        id="email"
        type="email" 
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <button className="  text-xl  text-white border border-accent h-9 w-20  bg-gray-500 hover:bg-lime-800 hover:scale-105 my-6  mx-11   p-2 " type="submit" disabled={state.submitting}>
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
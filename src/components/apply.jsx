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
     className="bg-slate-900 text-white mx-4 sm:h-8 sm:w-60  my-5"
     placeholder="Your name"
     accept='text'
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
 <br />
     
           {/* number */}
      <label  className="text-white mx-4 my-6 sm:h-20   font-serif" htmlFor="number">
       Phone Number
      </label>
      <input
      pattern="\d{3}-\d{3}-\d{4}"
       placeholder="Your Number"
 className="bg-slate-900 mx-2 text-white sm:h-8 sm:w-44  my-5 "
 min={11}
 max={13}
 accept='13'
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
      <br />
      <label  className="text-white mx-4 my-6 sm:h-20   font-serif" htmlFor="number">
        Matric Marks
      </label>
      <input
       placeholder="Your Matric Number"
 className="bg-slate-900 text-white mx-2 sm:h-8 sm:w-44   my-5"
 accept='6'
min={3}
max={5}
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
      <br />

       <label  className="text-white mx-4 my-6 sm:h-20   font-serif" htmlFor="field">
      Which Field
      </label>
      <select id="field" name="field"  className="bg-slate-900  text-white  sm:h-8 sm:w-52  my-5 " >
    
    <option value="Computer Science">Computer Science</option>
    <option value="Pre-Engineering">Pre-Engineering</option>
    <option value="Pre-Medical">Pre-Medical</option>
    <option value="Commerce">Commerce</option>
</select>
      <ValidationError 
        prefix="text" 
        field="text"
        errors={state.errors}
      />
      <br />
            <label  className="text-white mx-4 my-6 sm:h-20  font-serif" htmlFor="email">
        Email Address
      </label>
      <input
       placeholder="Your E-mail"
 className="bg-slate-900  text-white  sm:h-8 sm:w-52  my-5 "
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
      <br />
      <button className="  text-xl  text-white shadow-md  h-9 w-20  bg-black hover:bg-lime-900 hover:scale-105 my-6  mx-11   p-2 " type="submit" disabled={state.submitting}>
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
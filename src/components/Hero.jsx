import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        {/* <img src={logo} alt='sumz_logo' className='w-28 object-contain' /> */}
{/* 
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button> */}
      </nav>

      <h1 className='head_text'>
        Summarify Articles<br className='max-md:hidden' />
        <span className='blue_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      the one-stop-shop for quickly summarizing long pieces of Articles. Our AI-powered summarization tool condenses any text into an easy-to-digest summary in seconds. Try it out now for free and save time on your reading!
      </h2>
    </header>
  );
};

export default Hero;

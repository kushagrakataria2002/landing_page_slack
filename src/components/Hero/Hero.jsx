import React from 'react';
import logo from "./google.png";

const Hero = () => {
  return (
    <>

      <div className='flex justify-center items-center'>

        <div className='w-[90%] flex flex-row'>

          <div className="left_container w-1/2 h-[400px]">

            <div className="text_container flex flex-col p-6 mt-2">

              <p className='text-5xl font-bold'>Slack is where the</p>

              <p className='text-5xl font-bold'>future works</p>

            </div>

            <div className="sub_text_conatiner p-6">

              <p className='font-bold'>Transform the way you work with one place for</p>

              <p className='font-bold'>everyone and everythingyou need to get stuff done.</p>

            </div>

            <div className="button_container p-6 flex justify-start items-center">

              <button type="button" class="uppercase text-white bg-purple-900 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-purple-900 dark:hover:bg-purple-800">try for free</button>

              <button type="button" class="flex justify-center items-center uppercase text-white bg-blue-900 font-bold rounded-lg text-sm px-5 py-1.5 me-2 gap-2 ">

                <div className='w-[25px] bg-white flex justify-center items-center rounded-md '>

                  <img className='w-[25px] h-[25px]' src={logo} alt="" />

                </div>

                sign up with google</button>

            </div>

          </div>

          <div className="right_container w-1/2 h-[400px] flex justify-center items-center">

            <img className='w-[80%] rounded' src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

          </div>

        </div>

      </div>

    </>
  )
}

export default Hero
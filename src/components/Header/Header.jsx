import React from 'react';
import "./Header.css";
import logo from "./Slack-logo (1).png"; 

const Header = () => {
    return (
        <>

            <div className="header_container flex" >

                <div className="left_div flex flex-1">

                    <ul className='flex justify-center items-center gap-4'>

                        {/* <h2 className='font-bold text-2xl'>Slack</h2> */}
                        <img className='w-1/6' src={logo} alt="" />

                        <li className='font-semibold capitalize'>Enterprise</li>
                        <li className='font-semibold capitalize'>Products</li>
                        <li className='font-semibold capitalize'>Resources</li>
                        <li className='font-semibold capitalize'>Pricing</li>

                    </ul>

                </div>

                <div className="right_div flex justify-center items-center gap-8 flex-1">

                    <i class="fa-solid fa-magnifying-glass"></i>

                    <p className='capitalize'>sign in</p>

                    <button type="button" class="uppercase text-purple-900 hover:text-white border border-purple-900 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">talk to sales</button>

                    <button type="button" class="uppercase text-white bg-purple-900 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-900 dark:hover:bg-purple-800">try for free</button>

                </div>

            </div>

        </>
    )
}

export default Header
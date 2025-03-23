import React from 'react';
import air_bnb from "./air_bnb.png";
import nasa from "./nasa.png";
import uber from "./uber.png";
import newespaper from "./newspaper.png";
import intuit from "./intuit.png"; 

const Partners = () => {
    return (
        <>

            <div className='flex justify-around items-center mt-4'>

                <img className='w-1/12' src={air_bnb} alt="" />
                <img className='w-1/12' src={nasa} alt="" />
                <img className='w-1/12' src={uber} alt="" />
                <img className='w-1/12' src={newespaper} alt="" />
                <img className='w-1/12' src={intuit} alt="" />

            </div>

        </>
    )
}

export default Partners
import React from 'react'
import ValidatorsTable from './ValidatorsTable'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";

const Validators = () => {
  return (
    <div className='flex flex-col w-full pt-[80px]'>
      <div className='flex flex-col justify-between w-10/12 mx-auto mb-[20px]'>
          {/* featured row */}
          <div className='flex justify-between'> 
            <div>
              <p className='text-white/[0.90] text-[24px] font-normal leading-[30px]'>Featured</p>
              <p className='text-white/[0.40] text-[14px] font-normal leading-[22.5px]'>Our top picks to get you started</p>
            </div>
            <div>
              <input type='text'
                placeholder='Search Validator here...' 
                id='search_validator'
                name='search_validator'
                // onChange={inputChangeHandler}
                // value={formData.firstName}
                className='bg-white/[0.05] rounded-[5px] py-[10px] pl-[30px] pr-[40px]'>

              </input>
            </div>
          </div>

          {/* 5 blocks div */}
          <div className='flex justify-evenly gap-[20px] mt-[20px]'>
            <div className='flex py-[20px] px-[10px] pr-[25px] flex-col justify-center items-end rounded-[10px] bg-white/[0.05] grow'>
              <p className='text-white/[0.40] text-[14px] font-normal'>Active Validators</p>
              <p className='text-white/[0.90] text-[24px] font-normal'>175</p>
            </div>
            <div className='flex py-[20px] px-[10px] pr-[25px] flex-col justify-center items-end rounded-[10px] bg-white/[0.05] grow'>
              <p className='text-white/[0.40] text-[14px] font-normal'>Allocated</p>
              <p className='text-white/[0.90] text-[24px] font-normal'>536</p>
            </div>
            <div className='flex py-[20px] px-[10px] pr-[25px] flex-col justify-center items-end rounded-[10px] bg-white/[0.05] grow'>
              <p className='text-white/[0.40] text-[14px] font-normal'>APY</p>
              <p className='text-white/[0.90] text-[24px] font-normal'>3.13%</p>
            </div>
            <div className='flex py-[20px] px-[10px] pr-[25px] flex-col justify-center items-end rounded-[10px] bg-white/[0.05] grow'>
              <p className='text-white/[0.40] text-[14px] font-normal'>Bonded Rate</p>
              <p className='text-white/[0.90] text-[24px] font-normal'>29.09%</p>
            </div>
            <div className='flex py-[20px] px-[10px] pr-[25px] flex-col justify-center items-end rounded-[10px] bg-white/[0.05] grow'>
              <p className='text-white/[0.40] text-[14px] font-normal'>Average Commision</p>
              <p className='text-white/[0.90] text-[24px] font-normal'>11.03%</p>
            </div>
          </div>

          {/* Validator div */}
          <div className='flex items-start mt-[40px] gap-[15px]'>
            <span className='text-white/[0.90] text-[24px] font-normal leading-[30px]'>Validators</span>
            <span className='text-white/[0.60] text-[20px] font-normal leading-[30px]'> 175/175</span>
          </div>

          {/* manage field and vector block div */}
          <div className='flex  mt-[17px] justify-between'>
            <div>
              <button className='pl-[40px] relative px-[20px] py-[1px] bg-inherit border-[1px] rounded-[5px] border-white/[0.60]'>
              {<IoEye className='absolute top-[6px] left-[10px] text-[20px]'/>}
              <span className='text-[14px] text-white/[0.80] leading-[30px]'>Manage Fields</span>
              </button>
            </div>
            <div>
              <PiSquaresFourFill className='text-[30px] mr-[15px]'/>
            </div>
          </div>
      </div>

      <ValidatorsTable />

      <div className='flex flex-col justify-between w-10/12 
            mx-auto mb-[20px] text-white/[0.90] text-[24px] 
            font-normal leading-[30px] pl-[5px]'>
        Validator Expense
      </div>
      
      <div className='flex flex-col w-10/12 
            mx-auto mb-[20px] text-white/[0.90] text-[20px] 
            font-normal leading-[30px] h-[360px] bg-white/[0.10]
            rounded-[10px] justify-center items-center'>
              <p>Validator Expense vs time</p>
              <p>4 combinations (only atom, a-n, a-s, all 3)</p>
              <p>(bar-line graph)</p>
      </div>
      
    </div>
  )
}

export default Validators
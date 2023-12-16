import React from 'react'

const Assets = () => {
  return (
    <div className='flex flex-col w-full pt-[80px]'>
      {/* featured + 4 blocks */}
      <div className='flex flex-col justify-between w-10/12 mx-auto mb-[20px]'>
          {/* featured row */}
          <div> 
            <div className='pl-[5px]'>
              <p className='text-white/[0.90] text-[24px] font-normal leading-[30px]'>Featured</p>
              <p className='text-white/[0.40] text-[14px] font-normal leading-[22.5px]'>Our top picks to get you started</p>
            </div>
          </div>

          {/* 4 blocks div */}
          <div className='flex justify-evenly gap-[20px] mt-[20px]'>
            <div className='flex py-[20px] px-[10px] pr-[25px] flex-col justify-center items-end rounded-[10px] bg-white/[0.05] grow'>
              <p className='text-white/[0.40] text-[14px] font-normal'>Total Value</p>
              <p className='text-white/[0.90] text-2xl font-normal'>$2,105,254,445</p>
            </div>
            <div className='flex py-[20px] px-[10px] pr-[25px] flex-col justify-center items-end rounded-[10px] bg-white/[0.05] grow'>
              <p className='text-white/[0.40] text-[14px] font-normal'>Total Assets</p>
              <p className='text-white/[0.90] text-2xl font-normal'>506</p>
            </div>
            <div className='flex py-[20px] px-[10px] pr-[25px] flex-col justify-center items-end rounded-[10px] bg-white/[0.05] grow'>
              <p className='text-white/[0.40] text-[14px] font-normal'>Total IBC Out</p>
              <p className='text-white/[0.90] text-2xl font-normal'>$126,262,817</p>
            </div>
            <div className='flex py-[20px] px-[10px] pr-[25px] flex-col justify-center items-end rounded-[10px] bg-white/[0.05] grow'>
              <p className='text-white/[0.40] text-[14px] font-normal'>Native Asset Rate</p>
              <p className='text-white/[0.90] text-2xl font-normal'>96.093%</p>
            </div>
          </div>
      </div>

      {/* 2 divs 3d pie chart + assets  */}
      <div className="flex w-10/12 h-[544px] mx-auto gap-[40px] ">
        <div className="w-full md:w-7/12 lg:w-7/12 xl:w-7/12 grow bg-white/[0.10] rounded-[10px]">

        </div>

        <div className="w-full md:w-5/12 lg:w-5/12 xl:w-5/12 bg-white/[0.10] rounded-[10px]">

        </div>
      </div>

      {/* Total supply area graph */}
      <div className="flex w-10/12 h-[360px] mx-auto gap-[40px] bg-white/[0.10] mt-[40px] rounded-[10px] mb-[10px]">

      </div>
    </div>
  )
}

export default Assets
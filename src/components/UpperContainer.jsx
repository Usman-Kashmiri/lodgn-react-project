import React from 'react'
import DetailsGrid from './DetailsGrid'

const UpperContainer = () => {
  return (
    <div className="flex flex-col justify-between mt-5 gap-6 bg-white py-4 px-2">
    <div className="w-fit pl-4">
      <DetailsGrid />
    </div>
    <div className="grid grid-cols-3 border-2 rounded-full overflow-hidden">
      <div className="bg-[#FDF307] p-2 flex items-center border-r-2">
        <span className="text-[#959595] font-[lato] font-[500] text-[12px]">
          RECEIVED
        </span>
      </div>
      <div className="p-2 flex items-center justify-center border-r-2">
        <span className="text-[#959595] font-[lato] font-[500] text-[12px]">
          NEGOTIATING
        </span>
      </div>
      <div className="p-2 flex items-center justify-center">
        <span className="text-[#959595] font-[lato] font-[500] text-[12px]">
          COMPLETED
        </span>
      </div>
    </div>
  </div>
  )
}

export default UpperContainer
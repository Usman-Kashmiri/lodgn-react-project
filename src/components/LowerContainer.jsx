import React from 'react'
import Card from './Card'
import DetailsGrid from './DetailsGrid'

const LowerContainer = () => {
  return (
    <div className="flex flex-col justify-between mt-5 gap-10 bg-white p-12 max-2xl:p-6 rounded-3xl">
            <div className="w-fit px-2 flex flex-col gap-5">
              <DetailsGrid />
              <span className="flex font-[lato] font-[500] bg-[#44A16F] text-white py-2 px-6 text-md rounded-full">
                COMPLETED
              </span>
            </div>
            <div className="grid grid-cols-3 justify-between gap-40 max-2xl:gap-12">
              <div className="flex justify-end">
                <span className="absolute px-8 py-2 rounded-lg bg-[#D96A6B] text-white -mt-3 -mr-5">
                  Rare Find
                </span>
                <Card
                  svgTxt="Holiday Inn"
                  distance={1.5}
                  singlePrice={120}
                  doublePrice={145}
                />
              </div>
              <Card
                svgTxt="Holiday Inn"
                distance={1.5}
                singlePrice={120}
                doublePrice={145}
              />
              <Card
                svgTxt="Holiday Inn"
                distance={1.5}
                singlePrice={120}
                doublePrice={145}
              />
            </div>
          </div>
  )
}

export default LowerContainer
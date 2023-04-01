import React from 'react'

const DetailsGrid = () => {
  return (
    <div className="flex">
              <div className="flex flex-col border-r-2 pr-6">
                <span className="text-[#72AA83] font-[lato] text-lg font-[700]">
                  St Judes Hospital
                </span>
                <span className="text-[#959595] text-xs font-[lato] font-normal">
                  Sarasota,FL. 33178
                </span>
              </div>
              <div className="flex border-r-2 px-6 gap-5">
                <span className="flex flex-col">
                  <span className="text-[#72AA83] font-[lato] text-lg font-[700]">10</span>
                  <span className="text-[#959595] text-xs font-[lato] font-normal">
                    October
                  </span>
                </span>
                <span className="text-[#72AA83] font-[lato] text-lg font-[700]">-</span>
                <span className="flex flex-col">
                  <span className="text-[#72AA83] font-[lato] text-lg font-[700]">17</span>
                  <span className="text-[#959595] text-xs font-[lato] font-normal">
                    December
                  </span>
                </span>
              </div>
              <div className="flex flex-col px-6">
                <span className="text-[#72AA83] font-[lato] text-lg font-[700]">
                  20 Rooms
                </span>
                <span className="text-[#959595] text-xs font-[lato] font-normal">
                  10 Singles, 10 doubles
                </span>
              </div>
            </div>
  )
}

export default DetailsGrid
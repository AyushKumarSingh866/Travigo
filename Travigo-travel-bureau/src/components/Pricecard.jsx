import React from 'react'

const Pricecard = ({plan: {planicon, title, text, plantype, plancontent}}) => {
  // console.log(plan);
  return (
    <>
    <div className='p-5 rounded-lg bg-slate-50/5 ring-1 ring-slate-100 shadow-md shadow-slate-200'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-5'>
          <div className='grid items-center'>
            <img src={planicon} alt="planicon/img" className='w-14 h-14 lg:h-12 lg:w-12 object-cover' />
          </div>
          <div className='grid items-center'>
            <h1 className=''>{title}</h1>
            <p className=''>{text}</p>
          </div>
        </div>
        <div className='grid items-center'><h1 className=''>{plantype}</h1></div>
      </div>
      {/* <div className=''></div> */}
    </div>
    </>
  )
}

export default Pricecard
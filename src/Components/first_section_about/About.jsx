import Man from '../../assets/Man.svg'
import Quote from '../../assets/Quote.svg'
export const About = () => {
  return (
    <>
      <div className='px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap'>
        <div className="w-10/12 sm:w-8/12 mx-auto md:mt-0">
          <h1 className='font-semibold text-[32px] text-white mb-3'> 
            Gabriel is a <span className='text-[#c778dd]'>web designer</span> and <span className='text-[#c778dd]'>front-end developer</span> 
          </h1>
          <p className="text-[#ABB2BF] my-6">He crafts responsive websites where technologies meet creeativity</p>
          <button className='text-white font-medium py-2 px-4 border duration-200 border-[#c778dd] hover:bg-[#c778dd33]'>Contact me!</button>
        </div>
        <div className="mx-auto">
          <div className="">
            <img src={Man} alt="" />
          </div>
          <div className="border flex items-center gap-2 border-[#abb2bf] p-2 text-[#abb2bf]">
            <div className="w-[16px] h-4 bg-[#c778dd]"></div>
            <div className="">Currently working on <span className='text-white'>Porfolio</span></div>
          </div>
        </div>
      </div>
      <div className="px-5 py-10 ">
        <img src={Quote} alt="" className="mx-auto "/>
      </div>
    </>
  )
}

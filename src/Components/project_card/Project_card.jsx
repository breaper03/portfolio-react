/* eslint-disable react/prop-types */
//
export const Project_card = ({img, langs, title, disc, link, code}) => {
  return (
    <>
      <div className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-[#abb2fb]">
        {/* img */}
        <div className="">
          <img className="w-full h-64" src={img} alt="" />
        </div>
        {/* skills */}
        <div className="flex gap-2 flex-wrap p-2 border-y border-[#abb2fb]">
          {langs.map((e) => {
            return <span className="text-[#abb2bf] " key={e + Math.random().toString()}>{e}</span>
          })}
        </div>
        {/* disc */}
        <div className="p-4">
          <h2 className="text-white text-2xl font-medium pb-4">{title}</h2>
          <p className="py-4 text-[#abb2fb]">{disc}</p>
          {/* btns */}
          <div className="">
            <button className="py-2 px-4 mr-2 text-white border border-[#c778dd] hover:bg-[#c778dd33]">
              <a href={link}>{"Live <->"}</a>
            </button>
            <button className="py-2 px-4 text-white border border-[#c778dd] hover:bg-[#c778dd33]">
              <a href={code}>{"Code <->"}</a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

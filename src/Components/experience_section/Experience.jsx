// import Shapes from '../../assets/Shapes.svg'
const Experience = () => {

  const experience = [
    {
      empresa: 'Fintech Wocex',
      puesto: 'FullStack Junior Developer',
      time: 'from March 15, 2022 - to March 15, 2023',
      desc: ' In my time in the position I performed both backend and frontend functions, being in charge of the development of interfaces and database requests for the administrative platform of a high school, while under the Scrum methodology I was given tasks to manage the overall performance of the application.' 
    },
    {
      empresa: 'Fintech Wocex',
      puesto: 'IT Support Analyst',
      time: 'from March 15, 2022 - to June 13, 2023',
      desc: ' In this position I worked long hours at night, while I was in charge of inventorying, repairing and handling customer requests, which could be about reconditioning networks, zones and/or equipment for a new service, as well as the management of the network infrastructure of the other services.' 
    },
    // {
    //   empresa: 'Movao Shop',
    //   puesto: 'IT Support Analyst',
    //   time: 'from March 15, 2022 - to June 13, 2023',
    //   desc: ' In this position I worked long hours at night, while I was in charge of inventorying, repairing and handling customer requests, which could be about reconditioning networks, zones and/or equipment for a new service, as well as the management of the network infrastructure of the other services.' 
    // }
  ]

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div data-aos = "fade-left" className=" mb-10">
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>experience
            </div>
            <div className="line w-1/3 h-px bg-[#C778DD]"></div>
          </div>
        </div>
        {/* bottom */}
        <div className="mx-auto w-full flex items-start justify-around p-5 flex-wrap md:justify-end md:w-full">
          {
            experience.map((e) => {
              return (
                <>
                  <div className="border border-[#ABB2BF] p-5 text-white md:w-[33%] sm:w-[40%] gap-12 mx-auto md:my-auto mb-5">
                    <h2 className="text-[24px] font-semibold">{e.empresa}</h2>
                    <div className="line w-1/4 h-px bg-[#c778dd]"></div>
                    <div className="mt-5 flex flex-wrap border-b-[#abb2bf] border-b mb-5">
                      <span>
                        {e.puesto} - {e.time}
                      </span>
                    </div>
                    <div className="text-[#ABB2BF] mb-5">
                      <p>
                        {e.desc}
                      </p>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Experience
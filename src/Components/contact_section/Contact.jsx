import Discord from '../../assets/Discord.svg'
import Email from '../../assets/Email.svg'
import Linkedin from '../../assets/Linkedin.svg'
import Github from '../../assets/Github.svg'

const Contact = () => {
  return (
    <>
      <div  data-aos = "fade-up" data-aos-delay="1000" className="px-5 max-w-[1560px] mx-auto mt-10 py-10">
        {/* top */}
        <div className="">
          {/* header */}
          <div className=" mb-10">
            <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
              <div className="">
                <span className="text-[#C778DD]">#</span>contacts
              </div>
              <div className="line w-1/3 h-px bg-[#C778DD]"></div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className=" flex items-center flex-wrap gap-10 justify-between">
          {/* left */}
          <div className="left w-full md:w-1/2">
            <p className=" text-[#ABB2BF]">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          {/* right */}
          <div className=" mx-auto">
            {/* box */}
            <div className="border border-[#ABB2BF] p-4">
              <h2 className=" mb-4 text-white font-semibold">
                Message me here
              </h2>
              {/* get in touch */}
              <div className="mx-auto flex flex-col items-start justify-center ">
                {/* links */}
                <div className="flex gap-1 justify-around items-center">
                  <img src={Discord} alt="" />
                  <span className="text-[#ABB2BF]">breaper03#1618</span>
                </div>
                <div className="flex gap-1 justify-around items-center">
                  <img src={Email} alt="" />
                  <span className="text-[#ABB2BF]"> gabrielpaez2019@gmail.com</span>
                </div>
                <div className="flex gap-1 justify-around items-center">
                  <img src={Linkedin} alt="" />
                  <a href='https://www.linkedin.com/in/gabriel-paez-1a38a7233/' className="text-[#ABB2BF] decoration-transparent">www.linkedin.com/in/gabriel-paez-1a38a7233/</a>
                </div>
                <div className="flex gap-1 justify-around items-center">
                  <img src={Github} alt="" />
                  <span className="text-[#ABB2BF]">gabrielpaez2019@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
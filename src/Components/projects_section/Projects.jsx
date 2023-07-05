import { Project_card } from "../project_card/Project_card"
import MoneyManagerApp from '../../assets/MoneyManagerApp.svg'
//
const Projects = () => {

  //date 
  const projects = [
    {
      img: MoneyManagerApp,
      langs: ["HTML", 'CSS', 'Javascript', 'React'],
      title: "MoneyManager",
      disc: "Minecraft Servers Hosting",
      link: 'https://react-money-manager.vercel.app/',
      code: 'https://github.com/breaper03/reactMoneyManager'
    },
  ]

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20  py-10 ">
        {/* TOP */}
        <div className="flex justify-between items-center">
          {/* LEFT */}
          <div className="text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#c778dd]">#</span>projects
            </div>
            <div className="line w-2/3 h-1 bg-[#c778dd]"></div>
          </div>

          {/* RIGHT */}
          <div className="text-white font-medium">
            <a href="">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-wrap justify-between gap-4 my-12" key={Math.random()}>
          {projects.map(({img, langs, title, disc, link, code}) => {
            return (
              <>
                <Project_card img={img} langs={langs} title={title} disc={disc} link={link} code={code}/>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Projects
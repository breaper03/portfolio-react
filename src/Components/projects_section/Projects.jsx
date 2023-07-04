import { Project_card } from "../project_card/Project_card"

//
const Projects = () => {

  //date 
  const projects = [
    {
      img: "https://ece.engin.umich.edu/wp-content/uploads/sites/2/2022/02/JoyofCoding-featured.jpg",
      langs: ["html", 'css', 'javascript'],
      title: "MoneyManager",
      disc: "Minecraft Servers Hosting",
      link: 'https://react-money-manager.vercel.app/'
    },
    {
      img: "https://openaimaster.com/wp-content/uploads/2023/04/Can-Chat-GPT-be-Detected-for-Coding-950x500.jpg?is-pending-load=1",
      langs: ["html", 'css', 'javascript', "Node.js"],
      title: "Protect X",
      disc: "Discord AntiCrash Bot",
      link: 'https://react-money-manager.vercel.app/'
    },
    {
      img: "https://www.searchenginejournal.com/wp-content/uploads/2023/04/google-bard-coding-644282f27c8da-sej-760x400.webp",
      langs: ["html", 'css', 'javascript', 'Node.js', 'Python'],
      title: "Kahoot Answers Viewer",
      disc: "Get answers to your kahoot quiz",
      link: 'https://react-money-manager.vercel.app/'
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
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {projects.map(({img, langs, title, disc, link}) => {
            return (
              <>
                <Project_card img={img} langs={langs} title={title} disc={disc} link={link}/>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Projects
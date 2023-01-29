import team1 from "../images/my p-p.png";
import team2 from "../images/Nitish.jpg";
import team3 from "../images/avaneesh.jpg";
import team4 from "../images/divyansh.jpg";
import team5 from "../images/maanas.jpg";
import team6 from "../images/shashi_raj.webp";
import team7 from "../images/Aditi.jpeg";
import insta from "../images/instagram(1).png";
import linkdin from "../images/linkedin.png";
export default function Team() {
  return (
    <div className="" id="Team">
      <h1 className="text-3xl text-center font-bold tracking-wider py-12 bg-[#4285F4] ">
        {"< "}Our Team{" />"}
      </h1>

      <section className="mt-10  flex flex-wrap justify-around items-center gap-x-20 gap-y-10 text-white">
        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team1}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#0F9D58] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24 pt-10">
                <h1 className="text-3xl font-semibold">Jayant Dubey</h1>
                <p
                  className="my-2"
                  title="i am bored with this coding  i want to go home!!"
                >
                  Core Member
                </p>
                <p>
                  An undergrad student with experience in React, Java, C++ and
                  Bash scripting has a strong foundation in computer science and
                  programming. I have experience working with modern front-end
                  technologies, object-oriented programming languages and Bash
                  scripting which allow me to automate tasks and system
                  administration.
                </p>
                <div className="mt-10 flex gap-10">
                <div>
                    <a href=""><img className="w-7" src={insta} alt="nolt found" /></a>
                  </div>
                  <div>
                    <a href=""><img className="w-7" src={linkdin} alt="nolt found" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team2}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#EA4335] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">Nitish Deshpandey</h1>
                <p className="my-2">Lead</p>
                <p>
                  Just a Beginner in Computer science, curious about
                  technologies that have real-life applications to change the
                  lives of common people. I also love following politics and
                  debating policies and political ideologies. I also have a keen
                  interest in social issues.
                </p>
                <div className="mt-10 flex gap-10">
                <div>
                    <a href=""><img className="w-7" src={insta} alt="nolt found" /></a>
                  </div>
                  <div>
                    <a href="https://linktr.ee/nd07"><img className="w-7" src={linkdin} alt="nolt found" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team3}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#0F9D58] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">Avneesh Pandey</h1>
                <p className="my-2">Core Member</p>
                <p>
                  about member Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Facilis itaque assumenda saepe animi maxime
                  libero non quasi, odit natus veritatis enim culpa nam
                  inventore doloribus quidem temporibus amet velit accusamus.
                </p>
                <div className="mt-10 flex gap-10">
                <div>
                    <a href=""><img className="w-7" src={insta} alt="nolt found" /></a>
                  </div>
                  <div>
                    <a href=""><img className="w-7" src={linkdin} alt="nolt found" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team4}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#F4B400] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">Divyansh Aggarwal</h1>
                <p className="my-2">Core Member</p>
                <p>
                  about member Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Facilis itaque assumenda saepe animi maxime
                  libero non quasi, odit natus veritatis enim culpa nam
                  inventore doloribus quidem temporibus amet velit accusamus.
                </p>
                <div className="mt-10 flex gap-10">
                <div>
                    <a href=""><img className="w-7" src={insta} alt="nolt found" /></a>
                  </div>
                  <div>
                    <a href=""><img className="w-7" src={linkdin} alt="nolt found" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team5}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#F4B400] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">Maanas Talware</h1>
                <p className="my-2">Core Member</p>
                <p>
                  about member Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Facilis itaque assumenda saepe animi maxime
                  libero non quasi, odit natus veritatis enim culpa nam
                  inventore doloribus quidem temporibus amet velit accusamus.
                </p>
                <div className="mt-10 flex gap-10">
                <div>
                    <a href=""><img className="w-7" src={insta} alt="nolt found" /></a>
                  </div>
                  <div>
                    <a href=""><img className="w-7" src={linkdin} alt="nolt found" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team7}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#0F9D58] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">Aditi Kulkarni</h1>
                <p className="my-2">Core Member</p>
                <p>
                  about member Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Facilis itaque assumenda saepe animi maxime
                  libero non quasi, odit natus veritatis enim culpa nam
                  inventore doloribus quidem temporibus amet velit accusamus.
                </p>
                <div className="mt-10 flex gap-10">
                <div>
                    <a href=""><img className="w-7" src={insta} alt="nolt found" /></a>
                  </div>
                  <div>
                    <a href=""><img className="w-7" src={linkdin} alt="nolt found" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team6}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#F4B400] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">Sashi Raj Jha</h1>
                <p className="my-2">Core Member</p>
                <p>
                  I'm a student of Cyber Security at National Forensic Sciences
                  University, where I'm learning to think like a hacker and use
                  my knowledge for good. With every piece of code and every
                  vulnerability I discover, I become one step closer to becoming
                  a modern day Sherlock of the digital world.
                </p>
                <div className="mt-10 flex gap-10">
                  <div>
                    <a href="https://instagram.com/shashirajz?igshid=ZDdkNTZiNTM="><img className="w-7" src={insta} alt="nolt found" /></a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/imperialx"><img className="w-7" src={linkdin} alt="nolt found" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-white">I am a Easter Egg</div>
    </div>
  );
}

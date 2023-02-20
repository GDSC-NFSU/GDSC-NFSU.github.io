import team1 from "../images/my p-p.png";
import team2 from "../images/Nitish.jpg";
import team3 from "../images/avaneesh.jpg";
import team4 from "../images/divyansh.jpg";
import team5 from "../images/maanas.jpg";
import team6 from "../images/shashi_raj.webp";
import team7 from "../images/Aditi.jpeg";
import team8 from "../images/sneh.jpeg";
import insta from "../images/instagram(1).png";
import linkdin from "../images/linkedin.png";
import email from "../images/email.png";

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
                    <a href="mailto: jayant.btmtcs2120@nfsu.ac.in?subject = mail to jayant&body = hey!!">
                      <img className="w-7" src={email} alt="nolt found" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img className="w-7" src={linkdin} alt="nolt found" />
                    </a>
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
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24 pt-10">
                <h1 className="text-3xl font-semibold">Nitish Deshpande</h1>
                <p className="my-2">Lead</p>
                <p>
                  Just a Beginner in Computer science, curious about
                  technologies that have real-life applications to change the
                  lives of common people. I also love following politics and
                  debating policies and political ideologies. I also have a keen
                  interest in social issues.Also Interested in Cyber Security
                  Space.
                </p>
                <div className="mt-10 flex gap-10">
                  <div>
                    <a href="mailto: nitishdeshpande07@gmail.com?subject = mail to aditi&body = hey!!">
                      <img className="w-7" src={email} alt="nolt found" />
                    </a>
                  </div>
                  <div>
                    <a href="https://linktr.ee/nd07">
                      <img className="w-7" src={linkdin} alt="nolt found" />
                    </a>
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
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24 pt-20">
                <h1 className="text-3xl font-semibold">Avaneesh Pandey</h1>
                <p className="my-2">Core Member</p>
                <p>
                  I am a student at NFSU, pursuing B.Tech-M.Tech CSE.I enjoy
                  doing research to acquire knowledge and creating solutions to
                  real-time problems using technology.Interested in fields like
                  coding,robotics,International relations,Military
                  Technology,Technologies in Justice Systems,Quantum & Space
                  Technology and exploring new technologies that impact society
                  at large.
                </p>
                <div className="mt-10 flex gap-10">
                  <div>
                    <a href="https://www.instagram.com/kr.avaneeshpandey/">
                      <img className="w-7" src={insta} alt="nolt found" />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/itzap/">
                      <img className="w-7" src={linkdin} alt="nolt found" />
                    </a>
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
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#0F9D58] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24 pt-10">
                <h1 className="text-3xl font-semibold">Divyansh Agrawal</h1>
                <p className="my-2">Core Member</p>
                <p>
                  As a learner, I'm on a lookout for opportunities to merge
                  together my passion for Cloud and Cyber Security and equip
                  myself with knowledge for both 'Cloud in Cybersecurity' as
                  well as 'Cloud Security'.Always up for a healthy discussion
                  about anything I can help with, just ping me on hadels
                  metioned below
                </p>
                <div className="mt-10 flex gap-10">
                  <div>
                    <a href="mailto: adivyansh360@gmail.com?subject = mail to divyansh&body = hey!!">
                      <img className="w-7" src={email} alt="nolt found" />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/agrawaldivyansh/">
                      <img className="w-7" src={linkdin} alt="nolt found" />
                    </a>
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
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24 pt-16">
                <h1 className="text-3xl font-semibold">Maanas Talware</h1>
                <p className="my-2">Core Member</p>
                <p>
                  I'm currently pursuing my undergraduate C.S.E degree at NFSU.
                  A beginner in the fields of cybersecurity and cloud
                  technology. An eager learner who is always open to grabbing
                  any learning opportunities presented. Curiosity keeps me
                  fueled for exploring new domains and fields. Always ready to
                  discuss or help in any way possible. Im available at
                </p>
                <div className="mt-10 flex gap-10">
                  <div>
                    <a href="https://www.instagram.com/maanas_t_0908/?next=%2F">
                      <img className="w-7" src={insta} alt="nolt found" />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/maanas-talware-58245a24a/">
                      <img className="w-7" src={linkdin} alt="nolt found" />
                    </a>
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
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24 pt-10">
                <h1 className="text-3xl font-semibold">Aditi Kulkarni</h1>
                <p className="my-2">Core Member</p>
                <p>
                  I enjoy learning and doing research for creating solutions for
                  the daily life problems using technology. Have explored fields
                  such as coding, robotics, music, movies and sports. Very
                  active on platforms like codechef and codeforces. Interested
                  in exploring new technologies that help mankind.
                </p>
                <div className="mt-10 flex gap-10">
                  <div>
                    <a href="mailto: ashadikuls@gmail.com?subject = mail to aditi&body = hey!!">
                      <img className="w-7" src={email} alt="nolt found" />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/aditi-kulkarni-46715b215">
                      <img className="w-7" src={linkdin} alt="nolt found" />
                    </a>
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
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24 pt-10">
                <h1 className="text-3xl font-semibold">Shashi Raj Jha</h1>
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
                    <a href="https://instagram.com/shashirajz?igshid=ZDdkNTZiNTM=">
                      <img className="w-7" src={insta} alt="nolt found" />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/imperialx">
                      <img className="w-7" src={linkdin} alt="nolt found" />
                    </a>
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
                src={team8}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#F4B400] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24 pt-20">
                <h1 className="text-3xl font-semibold">Sneh Singh</h1>
                <p className="my-2">core Member</p>
                <p>
                  I find the technical world to be very intriguing and thus
                  haven’t restricted myself and thereby self-explored different
                  technologies. My primary tech interests lie in the field of
                  Cyber Security and development. I like investing and trading
                  shares and have a keen interest in economics. Currently, I am
                  Focusing on Full-stack development and making projects to help
                  the community.
                </p>
                <div className="mt-10 flex gap-10">
                  <div>
                    <a href="https://www.instagram.com/snehsingh_21/">
                      <img className="w-7" src={insta} alt="nolt found" />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/sneh-singh-452bb1237/">
                      <img className="w-7" src={linkdin} alt="nolt found" />
                    </a>
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

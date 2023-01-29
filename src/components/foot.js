import background from "../images/gdsc-black.png";
import logo from "../images/gdsc-long-black.png";
import insta from "../images/instagram(1).png";
import linkdin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import loc from "../images/placeholder.png";
export default function Foot() {
  return (
    <>
    <div
      className=" h-3/5 pt-10 flex flex-wrap justify-around"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img className="w-96" src={logo} alt="not fiuns" />

      <div className="gap-y-5 grid grid-cols-1 pb-10">
    
        <h1 className="text-white font-bold text-lg">follow us on</h1>
        <div className="flex gap-x-10">
        <a href="https://www.instagram.com/@GDSC_NFSU" target={"_blank"}>
          <img
            className="h-10 w-10 border-1 shadow-lg rounded-full"
            src={insta}
            alt="not found"
          />
        </a>
        <a
          href="https://in.linkedin.com/company/google-developer-student-clubs-national-forensic-sciences-university-gandhinagar"
          target={"_blank"}
        >
          <img
            className="h-10 w-10 border-1 shadow-lg rounded-full"
            src={linkdin}
            alt="not found"
          />
        </a>
        <a href="https://twitter.com/GDSC_NFSU" target={"_blank"}>
          <img
            className="h-10 w-10 border-1 shadow-lg rounded-full"
            src={twitter}
            alt="not found"
          />
        </a>
        </div>
      </div>
    </div>
      <h1 className=" text-center underline">
      <a href="https://ryuk-jayant.github.io/Jayant-Dubey/">
        Made by Jayant Dubey
      </a>
    </h1>
    </>
  );
}

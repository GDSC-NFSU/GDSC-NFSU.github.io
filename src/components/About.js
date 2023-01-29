import heads from "../images/gdsc-white.png";
export default function Aboutus() {
  return (
    <div className="mt-20 md:mt-1 bg-gray-200" id="Aboutus">
      <h1 className="tracking-wider bg-[#EA4335] py-12 text-3xl text-center font-bold ">
        {"<"} About Us {"/>"}
      </h1>
      <div className="flex flex-wrap justify-center justify-around gap-10 pt-10">
       <div className="">
          <img
            className="w-72 rounded-full border-2 shadow-xl animate-pulse"
            src={heads}
            alt="not found"
          />
        </div>
          <p className="w-full lg:w-2/5 tracking-wide text-lg p-4 pb-10">
            "DSC National Forensic Sciences University" is a premier community for ambitious
            and tech-savvy students who want to learn and utilize cutting-edge
            technology to solve real-world problems. Members have access to
            Google's latest tools and resources, mentorship opportunities, and
            the chance to work on projects and attend events. They gain hands-on
            experience in areas such as web and mobile development, machine
            learning and more. The club provides a platform for students to
            connect with like-minded individuals and industry experts, and turn
            their passion into a career with the support of Google. Join the
            club and be part of a global community pushing the boundaries of
            what's possible with technology.{" "}
          </p>
      </div>
    </div>
  );
}

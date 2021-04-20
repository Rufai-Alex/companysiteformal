import Footer2 from "../componets/Footer2";
import Navbar from "../componets/navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div
        className=" bg-opacity-80 maginTop
           w-full screen60 bg-center bg-cover flex justify-center items-center flex-col border-transparent font-head text-white text-7xl  "
        style={{
          background:
            " linear-gradient( #00438bd5, #00438bd5), url(/aboutpic.png)",
          backgroundBlendMode: "multiply",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2> About Us</h2>
      </div>
      <div className=" shadow-sm bg-indigo-50 py-6 my-8">
        <h3 className="font-semibold lg:text-6xl text-center font-head mt-12 primaryColorText md:text-4xl text-3xl ">
          Who We Are
        </h3>
        <p className="text-center  lg:px-14 font-normal font-head text mt-16 px-10  text-2xl bg-indigo-50 ">
          System Technologies Limited an indigenous engineering and IT Company
          establised to help actualize technological solutions for Nigerian
          businesses. We offer vast engineering, security and technology
          services and solutions. With our world-class team, we help to
          actualize technological solutions for our clients in various areas of
          specialization.
        </p>
      </div>
      <div className=" shadow-sm bg-indigo-50 py-4 my-8">
        <h2 className="font-semibold lg:text-6xl text-center font-head mt-12 primaryColorText md:text-4xl text-3xl">
          Our Mission
        </h2>
        <p className="text-center  lg:px-14 font-normal font-head text mt-16 px-10  md:text-2xl text-  ">
          To design and implement cost-effective , intuitive and robust
          solutions for engineering and softwerem challange{" "}
        </p>
      </div>
      <h2 className="font-semibold lg:text-6xl text-center font-head mt-12 primaryColorText md:text-4xl text-3xl">
        Our Vission
      </h2>
      <p className="text-center  lg:px-14 font-normal font-head text mt-16 px-10  text-2xl mb-20 ">
        To assist the human race deploy world-class solutions to problems faced
        with businesses , sustainable developement andday to day activities.
      </p>
      <svg
        className="  -mt-24 lg:-mb-12 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fill-opacity="0.78"
          d="M0,224L80,224C160,224,320,224,480,229.3C640,235,800,245,960,208C1120,171,1280,85,1360,42.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <Footer2 />
    </div>
  );
}

export default About;

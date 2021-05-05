import Footer2 from "../componets/Footer2";
import Navbar from "../componets/navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div
        className=" bg-opacity-80 
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
      <div className=" shadow-sm bg-indigo-50 py-14 ">
        <h3 className="font-semibold lg:text-6xl text-center font-head mt-12 primaryColorText md:text-4xl text-3xl ">
          Who We Are
        </h3>
        <p className="text-center  lg:px-14 font-normal font-head text mt-16 px-10  text-xl bg-indigo-50 text-gray-600 ">
          System Technologies Limited an indigenous engineering and IT Company
          establised to help actualize technological solutions for Nigerian
          businesses. We offer vast engineering, security and technology
          services and solutions. With our world-class team, we help to
          actualize technological solutions for our clients in various areas of
          specialization.
        </p>
      </div>
      <div className=" shadow-sm bg-indigo-50 py-12 ">
        <h2 className="font-semibold lg:text-6xl text-center font-head mt-12 primaryColorText md:text-4xl text-3xl">
          Our Mission
        </h2>
        <p className="text-center  lg:px-14 font-normal font-head text mt-16 px-10  md:text-2xl text-xl text-gray-600 ">
          To design and implement cost-effective , intuitive and robust
          solutions for engineering and softwerem challange{" "}
        </p>
      </div>
      <div className="bg-indigo-50 py-12">
        <h2 className="font-semibold lg:text-6xl text-center font-head  primaryColorText md:text-4xl text-3xl ">
          Our Vission
        </h2>
        <p className="text-center  lg:px-14 font-normal font-head text mt-16 px-10   mb-20  text-xl  text-gray-600">
          To assist the human race deploy world-class solutions to problems
          faced with businesses , sustainable developement andday to day
          activities.
        </p>
      </div>
      <section class="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="uppercase mb-4 mt-12">CLIENT’S REVIEWS </h2>
          <h3 className="text-2xl  lg:text-5xl primaryColorText capitalize header-hight font-bold">
            What Our Client’s Say About Us
          </h3>
          <div className="flex flex-wrap pt-12">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                {/* <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"> */}
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, tempore sit vel expedita reiciendis ipsum cumque
                  vitae magni, accusamus nam perferendis recusandae minima id
                  fuga iste animi ipsam minus. Repellat.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p className="text-gray-500">LADDA CEO</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                {/* <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300"> */}
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, est? Quidem illum provident repudiandae eius qui a
                  dolores, nostrum, veniam voluptatibus vitae ea est, dolorum
                  eaque sit itaque ratione quod.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p className="text-gray-500">DATANOW CEO</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                {/* <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305"> */}
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  quasi, error laborum debitis necessitatibus ut? Porro quaerat
                  aspernatur cumque ad cum totam rem, unde perspiciatis. Nulla,
                  perferendis quaerat. Magnam, quam?
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
                <p className="text-gray-500">CLICKPAY CEO </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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

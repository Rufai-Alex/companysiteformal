import Head from "next/head";
import Contact from "../componets/Contact";
import Footer2 from "../componets/Footer2";
import Header from "../componets/Header";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="font-Roboto">
      <Head>
        <title>Systems Technologies</title>
        <link rel="icon" href="/Systems_tech_icon.png" />
        <meta
          name="keywords"
          content="web development, software product design and management, embedded system design "
        />
      </Head>
      <Header />
      <div className="container, mx-auto p-8  ">
        <div className="flex flex-col md:flex-row">
          <div className="lg:w-1/2 w-full">
            <h2 className="uppercase mb-4 mt-12">About us </h2>
            <h3 className="text-2xl  lg:text-5xl primaryColorText capitalize header-hight font-bold">
              Deploy <br />
              best solutions
              <br /> to businesses problems
            </h3>
            <p className="leading-loose mt-12 text-xl">
              System Technologies Limited is an indigenous engineering and IT
              company established to help actualize technological solution for
              Nigerain businesses.
              <button className="primaryColorBg px-3 py-4 rounded block text-white mt-12 hover:bg-blue-500 ">
                <Link href="/about">Read more</Link>
              </button>
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center items-center md:p-6 mt-12 ">
            <img
              className="   p-4 w-full -mt-6 sm:mt-0  max-h-860px"
              src="/about.svg"
              alt="..."
            />
          </div>
        </div>
        <span id="what"></span>
      </div>
      <div className="  mt-24">
        <div className="WHAT WE CAN DO  justify-center text-center flex flex-wrap grayBg ">
          <div className="w-full md:w-6/12  md:px-4 ">
            <h2 className="uppercase mb-4 mt-12 text-5xl text-gray-600  ">
              what we do
            </h2>
            <p className="text-2xl  lg:text-5xl primaryColorText capitalize header-hight font-bold">
              We Are a Global Business Solution Provider
            </p>
          </div>
        </div>
        <div className=" mx-auto px-16 sectionpg rounded-b-lg ">
          <div className="flex flex-col md:flex-row">
            <div className="lg:w-1/2 w-full">
              <h3 className=" primaryColorText capitalize header-hight font-bold mt-10">
                <span className="block text-3xl  lg:text-6xl text-gray-400 uppercase font-light leading-10">
                  Embedded
                </span>

                <span className="  text-3xl lg:text-4xl font-light block ">
                  system design
                </span>
              </h3>
              <p className=" text-xl mt-8 lg:text-2xl leading-10">
                We offer solutions to the demand <br /> for technological
                solution to human <br /> activities
              </p>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center items-center ">
              <img
                className=" w-full mt-6 sm:mt-0  max-h-860px"
                src="/embededPics.png"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className=" mx-auto px-16 weddevesectionbg pt-12 rounded-lg ">
          <div className="flex  flex-col-reverse md:flex-row">
            <div className="lg:w-1/2 w-full flex justify-center items-center ">
              <img
                className=" w-full mt-6 sm:mt-0 max-h-96"
                src="/softwarepics2.png"
                alt="..."
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <h3 className=" primaryColorText capitalize header-hight font-bold">
                <span className="block text-3xl  lg:text-6xl text-gray-400 uppercase font-light leading-10 lg:-ml-20 mt-14">
                  Software
                </span>

                <span className=" text-3xl  lg:text-5xl font-light capitalize lg:-ml-10 block ">
                  Engineering
                </span>
              </h3>
              <p className=" mt-8 text-xl lg:text-2xl leading-10 lg:-ml-5">
                Our services include iteration planning, test-driven development
                and iterative processes for your mobile, web or desktop
                applications.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto softwarebg rounded-lg mt-12 ">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="lg:w-1/2 w-full flex justify-left ml-4 items-center ">
              <img
                className=" w-full mt-6 sm:mt-0 max-h-60 max-w-md"
                src="/softwarepic.png"
                alt="..."
              />
            </div>
            <div className="lg:w-1/2 w-full p-4">
              <h3 className=" primaryColorText capitalize header-hight font-bold mt-12">
                <span className="block text-2xl  lg:text-5xl text-gray-400 uppercase font-light leading-10 lg:-ml-36">
                  software product
                </span>

                <span className="text-3xl  lg:text-4xl font-light  block ">
                  design and management
                </span>
              </h3>
              <p className=" mt-4 text-xl lg:text-2xl leading-10 px-20">
                Our expact are always ready to help clients design their
                proffered technological solution that will stand the test of
                time.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-16 weddevesectionbg rounded-lg mt-12">
          <div className="flex flex-col md:flex-row">
            <div className="lg:w-1/2 w-full">
              <h3 className=" primaryColorText capitalize header-hight font-bold mt-8">
                <span className="block text-3xl  lg:text-5xl text-gray-400 uppercase font-light leading-10">
                  it product research
                </span>

                <span className="text-3xl  lg:text-5xl tracking-wider font-light  block">
                  and consulting
                </span>
              </h3>
              <p className=" mt-8 text-xl lg:text-2xl leading-10">
                Our consulting team provide the best evaluation of IT products
                that have been conceptualized or being developed to make it meet
                the market demands and expectations.
              </p>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center items-center ">
              <img
                className=" w-full mt-6 sm:mt-0  max-h-860px"
                src="/ITpics.png"
                alt="..."
              />
            </div>
          </div>
        </div>

        <section className="block relative z-1 bg-blueGray-600">
          <div className="container mx-auto">
            <h3 className="uppercase mb-4 mt-12 text-5xl text-gray-600 text-center ">
              Our Recent works
            </h3>
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4  mt-24">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4 transition duration-150 ease-in-out hover:translate-y-1 transform">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/textmobilapp.png"
                      />
                      <h5 className="text-xl  pb-4 text-center font-medium"></h5>
                      <div className="text-xl font-medium pb-4  primaryColorText text-left p-8">
                        TaxMobilonline
                        <p className="font-normal text-base text-gray-500">
                          Web Application development
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4 transition duration-150 ease-in-out hover:translate-y-1 transform">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/bellsick.png"
                      />

                      <div className="text-xl font-medium pb-4  primaryColorText text-left p-8">
                        BellSik
                        <p className="font-normal text-base text-gray-500">
                          Web development
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4 transition duration-150 ease-in-out hover:translate-y-1 transform">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="datanow.png"
                      />
                      <div className="text-xl font-medium pb-4  primaryColorText text-left p-8">
                        DataNow
                        <p className="font-normal text-base text-gray-500">
                          Automated Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex mx-auto mt-16 uppercase text-white primaryColorBg border-0 py-2 px-8 focus:outline-none hover:bg-indigo-300 rounded text-lg">
              <Link href="/portfolio">
                <a> view more</a>
              </Link>
            </button>
          </div>
        </section>
      </div>

      <Footer2 />
    </div>
  );
}

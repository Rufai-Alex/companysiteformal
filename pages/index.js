import Head from "next/head";
import Contact from "../componets/Contact";
import Footer from "../componets/Footer2";
import Header from "../componets/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container, mx-auto p-8 font-head bg-indigo-50 ">
        <div className="flex flex-col md:flex-row">
          <div className="lg:w-1/2 w-full">
            <h2 className="uppercase mb-4 mt-12">About us </h2>
            <h3 className="text-2xl  lg:text-5xl primaryColorText capitalize header-hight font-bold">
              Deploy <br />
              best solutions
              <br /> to businesses problems
            </h3>
            <p className="leading-loose mt-12">
              System Technologies Limited is an indigenous engineering and IT
              company established to help actualize technological solution for
              Nigerain businesses.
              <button className="primaryColorBg px-3 py-4 rounded block text-white mt-12 hover:bg-blue-500 ">
                Read more
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
      </div>
      <div>
        <div className="WHAT WE CAN DO  justify-center text-center flex flex-wrap bg-white  -mt-4  mb-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">
              Why does your business need us
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga
              distinctio, ipsum eos quisquam ea deleniti Necessitatibus tenetur
              eum, porro minima accusantium praesentium itaque harum, magnam ea,
              atque recusandae.
            </p>
          </div>
        </div>

        <section className="block relative z-1 bg-blueGray-600">
          <div className="container mx-auto">
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4  -mt-24">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Wed developement
                    </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/service2.jpg"
                      />
                    </div>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus nihi commodi obcaecati nam officia.Recusandae
                      illum, repudiandae odit qui numquam, pariatur officia
                      dolore quam dolorem delectus, iure nemo est aperiam.
                    </p>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Data service
                    </h5>

                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/service6.jpg"
                      />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corporis minima voluptatibus error sunt hic repellat modi
                      iure. Nobis, neque, eaque aliquam aspernatur, repellat
                      modi molestiae pariatur beatae veniam a minima?
                    </p>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Consultancy services
                    </h5>

                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="service7.jpg"
                      />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro, repudiandae ab obcaecati exercitationem alias
                      consequatur similique ullam facere iure officia
                      consequuntur, libero dicta officiis eligendi modi
                      laboriosam! Eveniet, distinctio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="WHO ARE WE container mx-auto overflow-hidden pb-20">
        <div className="flex flex-wrap items-center pt-32">
          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Who are we
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem in
              harum maiores quod recusandae tenetur obcaecati numquam, natus
              quia repudiandae labore praesentium quam, odit cumque quasi
              repellat ipsam sint distinctio.
            </p>
            <div className="flex justify-between">
              <div>
                <h6 className="uppercase">Lorem ipsum dolor </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi?
                </p>
              </div>
              <div>
                <h6>Lorem ipsum dolor </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi?
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-6/12 px-4">
                <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                  <p className="text-lg text-white mt-4 font-semibold">
                    our project
                  </p>
                </div>

                <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8 bg-gray-700">
                  <img />
                  <p className="text-lg text-white mt-4 font-semibold">
                    client working on ir
                  </p>
                </div>
              </div>
              <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                    <img />
                    <p className="text-lg text-white mt-4 font-semibold">
                      cients stisfaction
                    </p>
                  </div>
                </a>

                <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                  <img />
                  <p className="text-lg text-white mt-4 font-semibold">
                    data let see hahah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      another
      {/* <Contact />

      <Footer /> */}
    </div>
  );
}

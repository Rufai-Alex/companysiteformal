import Footer2 from "../componets/Footer2";
import Navbar from "../componets/navbar";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <div
        className=" bg-opacity-80 
           w-full screen60 bg-center bg-cover flex justify-center items-center flex-col border-transparent font-Roboto text-white text-7xl  "
        style={{
          background:
            " linear-gradient( #00438bd5, #00438bd5), url(/aboutpic.png)",
          backgroundBlendMode: "multiply",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2>Portfolio</h2>
      </div>
      <h4 className="text-center lg:text-5xl font-bold  primaryColorText capitalize p-20  md:5xl sm:text-3xl">
        <span className="block">We have done many others works</span>
        <span> let see our works</span>
      </h4>
      <div className="justify-center flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4  mt-24">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 px-4">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <img
                  alt="..."
                  className="align-middle border-none max-w-full h-auto rounded-lg"
                  src="/textmobilapp.png"
                />

                <div className="text-xl font-medium pb-4  primaryColorText text-left p-8">
                  TextMobilOnline
                  <p className="font-normal text-base text-gray-500">
                    Web Application development
                  </p>
                  <p className="text-black font-normal text-base">
                    Taxmobile.online serve as a strategic partner to tex
                    practitioners, taxpayers and tax administrators, helping
                    them advance their tax knowledge, byproviding innovative
                    integrated and subcriber-focusedd tax information. Taxmobile
                    are a strong team of professionals, providing up-to-date tax
                    news in NIgeria.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-4/12 px-4">
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
                  <p className="text-black font-normal text-base">
                    DataNow offer businesses premium services to boost their
                    Data, Airtime,Cable TV and other digital sales through an
                    automated web service. DataNow now is a library that can be
                    used to build a Utility Application on Android, iOS and Web
                    platforms
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <img
                  alt="..."
                  className="align-middle border-none max-w-full h-auto rounded-lg"
                  src="/bellsick.png"
                />

                <div className="text-xl font-medium pb-4  primaryColorText text-left p-8">
                  BellSik subsea
                  <p className="font-normal text-base text-gray-500">
                    Web development
                  </p>
                  <p className="text-black font-normal text-base">
                    BellSik Subsea Limited offers subsea solutions with a ficus
                    on marine riser component and subsea controls.The company's
                    aim is to provide the offshore industry with innovative,
                    user friendly and reliable subsea equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4  mt-24">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 px-4">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <img
                  alt="..."
                  className="align-middle border-none max-w-full h-80 rounded-lg"
                  src="clickpaypic.png"
                />
                <div className="text-xl font-medium pb-4  primaryColorText text-left p-8">
                  Clickpay
                  <p className="font-normal text-base text-gray-500">
                    Utility Software
                  </p>
                  <p className="text-black font-normal text-base">
                    Buy cheap and affordable data, airtime, cable TV ,
                    electricity payment at ClickPay. It is available on the web
                    (https://clickpay.com.ng),Android PlayStore and Apple
                    AppStore
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <img
                  alt="..."
                  className="align-middle border-none max-w-full h-auto rounded-lg"
                  src="/laddapics.png"
                />

                <div className="text-xl font-medium pb-4  primaryColorText text-left p-8">
                  LADDA
                  <p className="font-normal text-base text-gray-500">
                    Payment integration
                  </p>
                  <p className="text-black font-normal text-base">
                    Ladda is an investment platform wheree you can now invest in
                    savings, mutual fund and stocks all on one platform. Ladda
                    makes use of Monnify to receive payments from local banks.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <img
                  alt="..."
                  className="align-middle border-none max-w-full h-auto rounded-lg"
                  src="/aoapics.png"
                />
                <h5 className="text-xl  pb-4 text-center font-medium"></h5>
                <div className="text-xl font-medium pb-4  primaryColorText text-left p-8">
                  AOA profectional services
                  <p className="font-normal text-base text-gray-500">
                    Website design
                  </p>
                  <p className="text-black font-normal text-base">
                    AOA Professional Services is an indegenous tax and Advisory
                    firm driven by the values of being reponsible and helping
                    business achieve same
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" screen50 flex justify-center items-center flex-col
        
        bg-opacity-80 maginTop
           w-full screen60 bg-center bg-cover border-transparent font-Roboto text-white text-5xl  "
        style={{
          background:
            " linear-gradient( #00438bd5, #00438bd5), url(/bg-4-1.jpg )",
          backgroundBlendMode: "multiply",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="capitalize">Ready to work with us </p>
        <div className="mt-12">
          <Link href="/contact">
            <a
              className="get-started text-white font-bold px-8 py-4 rounded 
                    outline-none bg-yellow-600 focus:outline-none mr-1 mb-1 bg-lightBlue-500
                    active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              Contact us
            </a>
          </Link>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Portfolio;

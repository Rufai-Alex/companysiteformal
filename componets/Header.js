import Navbar from "./navbar";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div className="h-screen relative font-Roboto">
      <Navbar />
      <div
        className=" bg-opacity-80  
           w-full h-screen bg-center bg-cover flex  items-center flex-col border-transparent  "
        style={{
          background:
            " linear-gradient( #00438bd5, #00438bd5), url(/headerimage4.png)",
          backgroundBlendMode: "multiply",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <section className="header relative pt-16 items-center flex h-screen max-h-860-px mb-24">
          <div className="container mx-auto items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-12">
              <div className="pt-32 sm:pt-0">
                <h2 className="font-semibold  text-4xl text-white uppercase">
                  <p className=" mt-4 text-lg leading-relaxed text-blueGray-500">
                    We design and implement cost-effective, intituitive and
                    robust solution for engineering and softwere challange
                  </p>{" "}
                </h2>
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
                <div className="mt-10 text-white">
                  <p className="mb-4">Trusted by compoanies like :</p>
                  <div className="flex space-x-4">
                    <div>
                      <Image
                        src="/taxMobillogo .png"
                        alt="LOGO"
                        width={70}
                        height={40}
                      />
                    </div>
                    <div>
                      <Image
                        src="/dodatalogo.png"
                        alt="LOGO"
                        width={70}
                        height={40}
                      />
                    </div>
                    <div>
                      <Image
                        src="/xpresspaylogo.png"
                        alt="LOGO"
                        width={70}
                        height={40}
                      />
                    </div>
                    <div>
                      <Image
                        src="/tigmapaylogo.png"
                        alt="LOGO"
                        width={70}
                        height={40}
                      />
                    </div>
                    <div>
                      <Image
                        src="/dublivtulogo.png"
                        alt="LOGO"
                        width={70}
                        height={40}
                      />
                    </div>
                    <div>
                      <Image
                        src="/dataheadquarterslogo.png"
                        alt="LOGO"
                        width={70}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;

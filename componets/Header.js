import Navbar from "./navbar";

function Header() {
  return (
    <div classNames="h-auto">
      <Navbar />
      <div
        className=" bg-opacity-80  
          absolute top-0 w-full h-full bg-center bg-cover flex  items-center "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
        }}
      >
        <span className="w-full h-full absolute opacity-80  bg-blue-900"></span>

        <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
          <div className="container mx-auto items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-12">
              <div className="pt-32 sm:pt-0">
                <h2 className="font-semibold text-4xl text-white uppercase">
                  System technologies
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore exercitationem, voluptate officiis voluptatibus et
                  amet quia nisi optio accusamus enim officia a possimus, ut
                  nemo sed iure dolore praesentium. Sed!
                </p>
                <div className="mt-12">
                  <a
                    href="#"
                    target="_blank"
                    className="get-started text-white font-bold px-8 py-4 rounded 
                    outline-none bg-yellow-600 focus:outline-none mr-1 mb-1 bg-lightBlue-500
                    active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Contact us
                  </a>
                </div>
                <div className="mt-10">
                  <p>Trusted by compoanies like </p>
                </div>
              </div>
            </div>
          </div>

          <img
            className="absolute top-2 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
            src="/headerImage3.svg"
            alt="..."
          />
        </section>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00438b"
            fill-opacity="1"
            d="M0,256L20,256C40,256,80,256,120,229.3C160,203,200,149,240,128C280,107,320,117,360,138.7C400,160,440,192,480,181.3C520,171,560,117,600,96C640,75,680,85,720,101.3C760,117,800,139,840,165.3C880,192,920,224,960,202.7C1000,181,1040,107,1080,101.3C1120,96,1160,160,1200,165.3C1240,171,1280,117,1320,106.7C1360,96,1400,128,1420,144L1440,160L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Header;

import Navbar from "./navbar";

function Header() {
  return (
    <>
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

        <div className="container relative mx-auto mt-10 items-center">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  <span className="block uppercase ">systems</span>
                  <span className="block uppercase">technologies</span>
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  *PeopleandSolutions*
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

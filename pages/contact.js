import Footer2 from "../componets/Footer2";
import Navbar from "../componets/navbar";

function Contact() {
  return (
    <div className="font-Roboto">
      <Navbar />
      <div
        className=" bg-opacity-80 
           w-full screen60 bg-center bg-cover flex justify-center items-center flex-col border-transparent font-head text-4xl text-white lg:text-7xl  "
        style={{
          background:
            " linear-gradient( #00438bd5, #00438bd5), url(/aboutpic.png)",
          backgroundBlendMode: "multiply",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        Contact Us
      </div>
      <div>
        <div className="p-6 flex flex-col md:flex-row  ">
          <div className="md:w-5/12 w-full p-2">
            <div className="py-12 w-full">
              <div className="capitalize border-l-4 border-red-400  px-4">
                <h4 className="font-medium  uppercase">Address</h4>
                <address>
                  No 20,University permanentsite road Ilorin,
                  <br /> Kwara State, Nigeria.
                </address>
              </div>
            </div>
            <div className="py-12 border-t-2 border-b-2 border-gray-500">
              <div className="capitalize border-l-4 border-red-400  px-4">
                <h4 className="font-medium uppercase">Phone</h4>
                <p>Call Us Now +2348168670476</p>
              </div>
            </div>
            <div className="py-12 w-full">
              <div className="capitalize border-l-4 border-red-400  px-4">
                <h4 className="font-medium  uppercase">Email</h4>
                <address className="lowercase">
                  support@systemstech.com.ng
                </address>
              </div>
            </div>
          </div>

          <div className="md:w-7/12 w-full px-4  space-y-4 ">
            <h4 className="font-medium uppercase">Reach us Quickly</h4>
            <div className="flex flex-col md:flex-row items-stretch lg:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                placeholder="Enter name"
                className="self-stretch px-2 py-2 border flex-grow rounded border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 "
              />
              <input
                type="text"
                placeholder="Enter email"
                className="  px-2 py-2 border rounded flex-grow border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col md:flex-row items-stretch lg:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                placeholder="Your Phone "
                className="self-stretch px-2 py-2 border flex-grow rounded border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 "
              />
              <input
                type="text"
                placeholder="Your Company"
                className="  px-2 py-2 border rounded flex-grow border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <textarea
              placeholder="Message"
              id=""
              cols="30"
              rows="10"
              className=" w-full px-2 py-2 border rounded border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 "
            ></textarea>
            <button className="flex mx-auto mt-16 text-white primaryColorBg border-0 py-2 px-8 focus:outline-none hover:bg-indigo-300 rounded text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Contact;

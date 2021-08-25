import Footer2 from "../componets/Footer2";
import Navbar from "../componets/navbar";
import Link from "next/link";
import { useState } from "react";

function Career() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Navbar />
      <div
        className=" bg-opacity-80 
           w-full screen60 bg-center bg-cover flex justify-center items-center flex-col border-transparent  text-white text-7xl  "
        style={{
          background:
            " linear-gradient( #00438bd5, #00438bd5), url(/aboutpic.png)",
          backgroundBlendMode: "multiply",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="">Career</h2>
      </div>
      <div className="p-12">
        <div className="border-l-4 border-blue-500 p-2">
          <p className=" ml-3 text-sm color1 font-normal ">
            BUILD YOUR CAREER WITH US
          </p>
          <h2 className="ml-3 text-4xl">Careers</h2>
        </div>
        <div className="p-4 color1 text-lg  font-normal ">
          <p className="leading-relaxed">
            As part of our drive to push business boundaries and deliver
            exceptional value, we recruit enthusiastic and purpose oriented
            people, who have been and continue to be, our most valuable assets.
            Beginning or continuing your career with us, gives you the
            opportunity to display innovativeness and drive, in an
            entrepreneurial and professional environment.
          </p>
          <p className="my-4">
            We are committed to attracting people who can deliver required
            targets within the required timelines. We respect our staff and
            place value on ethics as well individual & Corporate Social
            Responsibility.
          </p>
          <p>
            To ensure that members of staff are properly motivated in line with
            their performance, we have put in place an adequate and efficient
            Performance Management System.{" "}
          </p>{" "}
          <p>
            We invite you to join us for a fruitful career. If you can dare to
            think outside the box forward your CV to us.
          </p>
        </div>
        <div className="ml-3 text-4xl mt-10">VACANCIES</div>
      </div>
      <div className="flex items-center justify-center mb-5 ">
        <div className=" flex justify-between  items-center flex-col md:flex-row border-solid border-2 border-blue-400 w-3/5 p-4 lg:p-8 ">
          <div className=" flex flex-col justify-between ">
            <h4 className="sm:text-2xl text-xl font-medium text-gray-900">
              JOB TITLE
            </h4>

            <div className="flex text-xm  md:text-xl  text-blue-600 space-x-2 justify-self-end mt-5">
              <p>DEPERTMENT &#183;</p>
              <p>REMOTE &#183;</p>
              <p>FULLTIME </p>
            </div>
          </div>
          <button
            class=" h-11 bg-blue-600 text-white mt-4 ml-2 hover:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded shadow w-auto hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            APPLY NOW
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center  flex overflow-x-hidden mt-40 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">JOB </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <div>
                      <h2 className="uppercase font-bold primaryColorText ">
                        Position
                      </h2>
                      <p>IT ADMINISTRATOR</p>
                    </div>
                  </div>
                  <div>
                    <h2 className="uppercase font-bold primaryColorText ">
                      Job specifications:
                    </h2>
                    <p className="p-2 color1 text-sm  font-normal ">
                      <ul className="list-disc">
                        <li>Full Time</li>
                        <li>Required Qualification:BA/BSC/HND</li>
                        <li>Location:Ilorin, Kwara State.</li>
                      </ul>
                    </p>
                  </div>
                  <div>
                    <h2 className="uppercase font-bold primaryColorText ">
                      Job Description:
                    </h2>
                    <ol className="p-2 color1 text-sm  font-normal list-disc">
                      <li>Manitoring and maintainig netwirks and server</li>
                      <li>Verifying and resoluting stock purchases</li>
                      <li>
                        Supervising and mentoring IT depertment employees, as
                        well as providing IT support
                      </li>
                      <li>
                        Keeping up to date with advancements and best practices
                        in it administration.
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h2 className="uppercase font-bold primaryColorText ">
                      Qualifications and requirements:
                    </h2>
                    <ol className="p-2 color1 text-sm  font-normal list-disc">
                      {" "}
                      <li>
                        {" "}
                        Bachelor's Degree in Computer Science, Information
                        Technology,Imformation Systems, or similar.
                      </li>
                      <li>
                        IT professional qualifications certification is an added
                        advantage{" "}
                      </li>
                      <li>
                        Expirience with IT systems, networks and related
                        technologies
                      </li>
                      <li>Strong analytical and problem-solving skills</li>
                      <li>Excellent interpersonal and communication skills</li>
                    </ol>
                  </div>
                  <div>
                    <h2 className="uppercase font-bold primaryColorText ">
                      Method of Application
                    </h2>
                    <p className="p-2 color1 text-sm  font-normal">
                      Interested and qualified candidate for the Job at "Systems
                      Technologies" should send CV and cover letter stating why
                      you are interested in the role to:
                      careers@systemstech.com.ng using the Job Title as the
                      subject of the email.{" "}
                    </p>
                  </div>
                  <div>
                    <h2 className="uppercase font-bold primaryColorText ">
                      Deadline:
                    </h2>
                    <p className="p-2 color1 text-sm  font-normal">
                      August 5th, 2021
                    </p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500  color1 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <Footer2 />
    </div>
  );
}

export default Career;

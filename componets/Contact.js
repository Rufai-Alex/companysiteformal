function Contact() {
  return (
    <div className="p-6 flex flex-col md:flex-row   items-center">
      <div className="md: md:w-5/12 w-full p-2">
        <h4 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Contact Us
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          debitis officia sequi, voluptate veritatis iusto assumenda earum
          impedit illum numquam vel aliquid praesentium quidem, fuga quo labore
          quisquam nemo omnis.
        </p>
        <address>
          Head office <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </address>
      </div>

      <div className="md:w-7/12 w-full px-4 space-x-4 space-y-4 ">
        <h4>Reach us Quickly</h4>
        <div className="flex  md:flex-row items-stretch space-x-4">
          <input
            type="text"
            placeholder="Enter name"
            className="self-stretch px-2 py-2 border flex-grow rounded border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400 "
          />
          <input
            type="text"
            placeholder="Enter email"
            className="  px-2 py-2 border rounded flex-grow border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
        <div className="flex ">
          <input
            type="text"
            placeholder="Your Phone "
            className=" w-full md:w-5/12 px-2 py-2 border rounded border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400 "
          />
          <input
            type="text"
            placeholder="Your Company"
            className=" w-full md:w-5/12 px-2 py-2 border rounded border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400 "
          />
        </div>
        <textarea
          placeholder="Message"
          id=""
          cols="30"
          rows="10"
          className=" w-full px-2 py-2 border rounded border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400 "
        ></textarea>
        <button>Contact</button>
      </div>
    </div>
  );
}

export default Contact;

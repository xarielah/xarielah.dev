const ContactForm = () => {
  return (
    <div className="w-full lg:w-5/6 flex flex-col justify-center items-center space-y-2 md:space-y-10">
      <div className="text-center w-full xl:w-1/2 flex flex-col md:space-y-4">
        <div className="flex space-x-4 relative justify-center">
          <h2 className="paragraph-title md:text-4xl lg:text-5xl">Contact ME</h2>
          <img src="/images/chat.svg" className="absolute w-14 h-14 right-10 -z-1" />
        </div>
        <p className="paragraph md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vero. Accusantium ullam est
          laborum asperiores non nobis ipsum sunt placeat, dolor, saepe ab, dicta debitis qui
          doloremque numquam ea adipisci.
        </p>
      </div>
      <form noValidate className="w-full p-5 md:p-0 md:w-3/4 xl:w-1/2 mx-auto">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            How can I help you? {':)'}
          </label>
          <textarea
            rows={7}
            id="description"
            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="w-full flex justify-center">
          <button className="classic-btn">Send Inquiry</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

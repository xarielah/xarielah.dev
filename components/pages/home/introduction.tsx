const Introduction = () => {
  return (
    <div className="flex flex-col space-y-6 justify-center h-full">
      <div className="flex justify-center items-center">
        <h1 className="text-7xl font-bold">
          Its all about <br />
          the <span className="text-purple-600">code</span>!
        </h1>
        <img src="/images/memoji.png" className="w-44 h-44 mx-auto" />
      </div>
      <p className="text-4xl font-light">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero odit magni vitae vel, ipsa
        commodi ut sunt ad. Quos dicta nostrum nam nulla et natus nisi nesciunt fuga minima
        officiis.
      </p>
    </div>
  );
};

export default Introduction;

const Subscribe = () => {
  return (
    <section
      className="bg-lightGray py-28
    "
    >
      <div className="max-w-screen-lg mx-auto px-4 md:px-12">
        <div className="text-center">
          <p className="text-eth text-xl font-bold">
            Get crypto analysis, news and updates
          </p>
          <h4 className="text-darkBlack text-[28px] font-bold mt-1">
            Sign up here so you don't miss a single newsletter
          </h4>
        </div>
        <div className=" mt-5">
          <form className="flex justify-center">
            <input
              type="email"
              name="email"
              placeholder="Place Your Email"
              className="py-2 px-4 rounded-l-full bg-transparent border border-gray-500 border-r-0 outline-none min-w-80"
            />
            <button className="bg-gradient-to-r from-[#FF357D] to-[#FF6F33] px-8 py-2 rounded-r-full text-white border border-red">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

import bg from "../../assets/gradient-bg.png";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="h-[calc(100vh-90px)] w-full bg-no-repeat bg-cover"
    >
      <div className="max-w-screen-lg mx-auto px-4 md:px-12 h-full flex items-center">
        {/* content */}
        <div className="w-2/3  text-white">
          <p className="text-base font-montserrat">
            90% Cryptocurrency Transactions made faster
          </p>
          <h1 className="font-montserrat text-[58px] font-bold leading-[75px]">
            The finest digital currency around
          </h1>
          <p className="text-base leading-[28px]">
            Quisque tincidunt molestie erat quis viverra. Proin accumsan risus
            quis nunc tempor, nec blandit orci gravida. Vivamus convallis nec
            tortor ut sollicitudin. In in ultrices erat. Mauris sollicitudin
            urna sed lacinia tempor
          </p>
          <div className="flex gap-6 mt-6">
            <button className="bg-gradient-to-r from-[#FF357D] to-[#FF6F33] px-8 py-2 rounded-full text-white">
              Read more
            </button>
            <button className=" px-16 py-2 rounded-full text-white border">
              Get Pre-Sale List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

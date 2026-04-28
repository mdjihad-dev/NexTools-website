
const Hero = () => {
    return (
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-10 max-w-7xl mx-auto">
          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src="assets/banner.png"
              className="w-full max-w-md object-cover"
              alt="Banner"
            />
          </div>

          {/* LEFT CONTENT */}
          <div className="flex-1 max-w-2xl">
            <p className="bg-[#E1E7FF] px-4 py-2 rounded-full inline-flex items-center gap-2">
              <img src="/assets/Rectangle.png" className="w-4 h-4" alt="" />
              New: AI-Powered Tools Available
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold mt-4 leading-tight text-[#101727]">
              Supercharge Your Digital Workflow
            </h1>

            <p className="py-6 text-[#627382] leading-7">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>

            <div className="flex gap-4">
              <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
                Explore Products
              </button>

              <button className="btn border rounded-full bg-transparent flex items-center gap-2">
                <img src="/Play.png" className="w-4" alt="" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;
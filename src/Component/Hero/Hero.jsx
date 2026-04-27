
import BannerImage from '../../assets/Image/banner.png'
const Hero = () => {
    return (
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse space-y-3">
          <img
            src={BannerImage}
            className="w-[500px] h-auto object-cover"
            alt="Banner image"
          />
          <div>
            <p className="bg-[#E1E7FF] inline p-3 rounded-3xl">
              New: AI-Powered Tools Available
            </p>
            <h1 className="text-6xl font-bold mt-2">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6 leading-7">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <button className="mr-3 btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">
              Explore Products
            </button>
            <button className="btn outline text-black rounded-3xl">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    );
};

export default Hero;
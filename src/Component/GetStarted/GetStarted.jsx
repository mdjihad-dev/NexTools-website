
import user from '../../assets/Image/user.png'
import PackageImage from '../../assets/Image/package.png'
import Roketimage from '../../assets/Image/rocket.png'

const GetStarted = () => {
    return (
      <div className="max-w-7xl mx-auto bg-[#F9FAFC]">
        <div className="text-center my-14">
          <h2 className="text-4xl font-bold mb-3 text-[#101727]">GetStarted</h2>
          <p className="text-base font-semibold text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="card bg-white w-96 shadow-sm p-6 items-center text-center relative">
            {/* Number badge */}
            <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
              01
            </span>

            {/* Image */}
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={user}
                alt="user"
                className="w-11 h-full object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title">Create Account</h2>
              <p className="text-gray-700">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card bg-white w-96 shadow-sm p-6 items-center text-center">
            <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
              02
            </span>
            {/* Image wrapper */}
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={PackageImage}
                alt="user"
                className="w-11 h-full object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title">Create Account</h2>
              <p className="text-gray-700">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-white w-96 shadow-sm p-6 items-center text-center">
            <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
              03
            </span>
            {/* Image wrapper */}
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={Roketimage}
                alt="user"
                className="w-11 h-full object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title">Create Account</h2>
              <p className="text-gray-700">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default GetStarted;
import React from "react";

const Rating = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-white bg-linear-to-r from-[#9514FA] to-[#4F39F6] py-12 px-6 rounded-2xl items-center">
      {/* Active Users */}
      <div className="text-center md:border-r-2 border-gray-200/30 last:border-r-0">
        <h2 className="font-bold text-2xl md:text-4xl uppercase tracking-wider">
          Active Users
        </h2>
        <p className="font-semibold mt-2 text-lg md:text-3xl text-yellow-300">
          50K+
        </p>
      </div>

      {/* Premium Tools */}
      <div className="text-center lg:border-r-2 border-gray-200/30 last:border-r-0">
        <h2 className="font-bold text-2xl md:text-4xl uppercase tracking-wider">
          Premium Tools
        </h2>
        <p className="font-semibold mt-2 text-lg md:text-3xl text-yellow-300">
          200+
        </p>
      </div>

      {/* Rating */}
      <div className="text-center">
        <h2 className="font-bold text-2xl md:text-4xl uppercase tracking-wider">
          Rating
        </h2>
        <p className="font-semibold mt-2 text-lg md:text-3xl text-yellow-300">
          4.9/5
        </p>
      </div>
    </div>
  );
};

export default Rating;

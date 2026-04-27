import React from 'react';

const Rating = () => {
    return (
      <div className="max-w-7xl mx-auto text-white bg-linear-to-r from-[#9514FA] to-[#4F39F6] py-12 flex justify-around items-center">
        <div className="text-center">
          <h2 className="font-bold text-4xl">Active Users</h2>
          <p className="font-semibold text-2xl">50K+</p>
        </div>
        <div className="text-center">
          <h2 className="font-bold text-4xl">Premium Tools</h2>
          <p className="font-semibold text-2xl">200+</p>
        </div>
        <div className="text-center">
          <h2 className="font-bold text-4xl">Rating</h2>
          <p className="font-semibold text-2xl">4.9</p>
        </div>
      </div>
    );
};

export default Rating;
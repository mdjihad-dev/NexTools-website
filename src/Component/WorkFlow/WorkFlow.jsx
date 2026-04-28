import React from 'react';

const WorkFlow = () => {
    return (
      <div className="min-h-[400px] flex justify-center items-center flex-col w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] max-w-7xl mx-auto">
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-bold mb-3 text-white">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-base font-semibold text-white">
            Join thousands of professionals who are already using Digitools to
            work smarter.Start your free trial today.
          </p>
          <button className="mr-3 btn bg-linear-to-r bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">
            Explore Products
          </button>
          <button className="btn outline text-black rounded-3xl border-whi">
            Watch Demo
          </button>
          <p className="text-base font-semibold text-white">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    );
};

export default WorkFlow;
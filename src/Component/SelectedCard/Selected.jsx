import React, { useState } from 'react';
import { FaFile } from 'react-icons/fa';


const Selected = ({choose, setChoose}) => {

    const totalPrice = choose.reduce((sum, item) => sum + item.price, 0)

    const handleDelet = (card) => {
        const fiterCard = choose.filter(CardItem => (
            CardItem.id !== card.id
        ))
        setChoose(fiterCard);
    }

    const handleCheckout = () => {
        setChoose([])
    }
    return (
      <div>
        {choose.length === 0 ? (
          <div className="w-full min-h-60 flex flex-col items-center justify-center">
            <FaFile className="w-13 h-auto" />
            <h1 className="text-xl font-semibold text-gray-900">No Data</h1>
            <p className="text-md font-semibold">
              Please add players to see them here
            </p>
          </div>
        ) : (
          choose.map((card) => (
            <div
              key={card.id}
              className="border my-8 py-7 px-5 bg-gray-200 flex items-center justify-between"
            >
              <div className="flex items-center">
                <img
                  className="w-10 h-auto rounded-lg"
                  src={card.img}
                  alt="Writing Image"
                />
                <div className="ml-4">
                  <h1 className="text-md font-semibold">{card.price}</h1>
                  <p>{card.badge}</p>
                </div>
              </div>
              <div className="">
                <p
                  onClick={() => handleDelet(card)}
                  className="text-red-600 font-bold"
                >
                  Remove
                </p>
              </div>
            </div>
          ))
        )}
        <div className="flex items-center justify-between my-5 mx-3">
          <h3 className="text-lg font-bold text-gray-600">Total</h3>
          <p className='text-xl font-bold'>${totalPrice}</p>
        </div>
        <div
          onClick={handleCheckout}
          className="text-white flex items-center justify-center font-semibold w-full h-12 rounded-2xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
        >
          <h3>Process to checkout</h3>
        </div>
      </div>
    );
};

export default Selected;
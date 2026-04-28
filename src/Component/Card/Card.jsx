import React, { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ data, choose, setChoose, itemNumber, setItemNumber }) => {
  const {
    productName,
    badge,
    description,
    period,
    priceText,
    features,
    img,
    price,
    id,
    buttonText,
  } = data;

  const [selected, setSelected] = useState(false);

  const handlerClick = () => {
    if (choose?.some((item) => item.id === id)) {
      toast.error(`${productName} is already in your cart!`);
      return;
    }

    setItemNumber((prev) => prev + 1);

    setSelected(true);
    setChoose((prev) => [...prev, data]);

    toast.success(`${productName} has been added to your cart successfully!`);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-lg">
      <span className="text-right absolute top-3 right-3 mb-2 badge badge-xs badge-warning">
        {badge}
      </span>
      <div className="card-body">
        <div className="space-y-3">
          <img src={img} alt="" />
          <h2 className="text-3xl font-bold">{productName}</h2>
          <p className="text-[#627382] leading-6">{description}</p>
          <div className="flex items-center">
            <span className="text-lg font-bold">{priceText}</span>
            <span>/{period}</span>
          </div>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {features.map((feature, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            onClick={handlerClick}
            className={`btn ${
              selected
                ? "w-full bg-green-600 text-white rounded-3xl"
                : "w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl"
            }`}
          >
            {selected ? "✓ Added to Cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;


import { use, useState } from 'react';
import Card from '../Card/Card';
import Selected from '../SelectedCard/Selected';


const Products = ({ cardData, itemNumber, setItemNumber, choose, setChoose }) => {
  const [tab, setTab] = useState("Products");

  const useData = use(cardData);

  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl text-[#101727] font-bold">
          Premium Digital Tools
        </h2>
        <p className="text-[#627382] text-basef font-semibold">
          Choose from our curated collection of premium digital products
          designedto boost your productivity and creativity.
        </p>
        <div className="space-x-6">
          <button
            onClick={() => setTab("Products")}
            className={`${tab === "Products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn text-white rounded-3xl" : ""}`}
          >
            Products
          </button>

          <button
            onClick={() => setTab("Card")}
            className={`${tab === "Card" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn text-white rounded-3xl" : ""}`}
          >
            Cart({choose.length})
          </button>
        </div>
      </div>

      {tab === "Products" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 my-10">
          {useData.map((data) => (
            <Card
              data={data}
              itemNumber={itemNumber}
              setItemNumber={setItemNumber}
              choose={choose}
              setChoose={setChoose}
            ></Card>
          ))}
        </div>
      ) : (
        <Selected choose={choose} setChoose={setChoose}></Selected>
      )}
    </div>
  );
};

export default Products;
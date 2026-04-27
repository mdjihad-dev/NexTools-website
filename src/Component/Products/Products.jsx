
import Card from '../Card/Card';

const Products = ({cardData}) => {

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
          <div role="tablist" className="">
            <a
              role="tab"
              className="tab tab-active bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn text-white rounded-3xl"
            >
              Products
            </a>
            <a role="tab" className="tab">
              Cart(0)
            </a>

            {
                cardData.map(data => <Card data={data}></Card>)
            }

          </div>
        </div>
      </div>
    );
};

export default Products;
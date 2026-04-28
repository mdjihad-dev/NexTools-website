import { Suspense, useState } from "react";
import Footer from "./Component/Footer/Footer";
import GetStarted from "./Component/GetStarted/GetStarted";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import PricingCard from "./Component/PricingCard/PricingCard";
import Rating from "./Component/Rating/Rating";
import WorkFlow from "./Component/WorkFlow/WorkFlow";
import Products from "./Component/Products/Products";
import { ToastContainer } from "react-toastify";

const fetchData = async () => {
  const res = await fetch("card.json").then((res) => res.json());
  return res;
};

function App() {
  const [itemNumber, setItemNumber] = useState(0);
  const cardData = fetchData();

  return (
    <>
      <Navbar itemNumber={itemNumber} />
      <main>
        {/* <Hero /> */}
        {/* <Rating /> */}
        {
          <Suspense fallback="Lodding...">
            <Products
              cardData={cardData}
              itemNumber={itemNumber}
              setItemNumber={setItemNumber}
            ></Products>
          </Suspense>
        }
        <GetStarted />
        <PricingCard />
        <WorkFlow />
      </main>
      <Footer />

      <ToastContainer
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 4000 },
        }}
      />
    </>
  );
}

export default App;

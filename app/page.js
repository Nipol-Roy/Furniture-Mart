

import NewArrivals from "./components/newArrivals";
import TopSellers from "./components/topSellers";

import CardPage from "./components/CardPage";
import Catagories from "./components/catagories";


const Home = () => {
 

  return (
    <>
      <div>
        <CardPage/>
     </div>
      <div className="py-10 ">
        <Catagories />
      </div>
      <TopSellers />
      <NewArrivals/>
      <div>
        

      </div>
    </>
  );
};

export default Home;



import NewArrivals from "./components/newArrivals";
import TopSellers from "./components/topSellers";

import CardPage from "./components/CardPage";
import Catagories from "./components/catagories";
import OurNewsLetter from "./homeComponents/OurNewsLetter";
import Testmonial from "./homeComponents/testmonial";


const Home = () => {
 

  return (
    <>
      
     <CardPage/>
   
      <div className="py-10 ">
        <Catagories />
      </div>
      <TopSellers />
      <NewArrivals/>
      <Testmonial/>
      <OurNewsLetter />
      
    </>
  );
};

export default Home;







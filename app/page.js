

import NewArrivals from "./components/newArrivals";
import TopSellers from "./components/topSellers";

import CardPage from "./components/CardPage";
import Catagories from "./components/catagories";
import OurNewsLetter from "./homeComponents/OurNewsLetter";
import Testimonial from "./homeComponents/Testimonial";


const Home = () => {
 

  return (
    <>
      
     <CardPage/>
   
      <div className="py-10 ">
        <Catagories />
      </div>
      <TopSellers />
      <NewArrivals/>
      <Testimonial/>
      <OurNewsLetter />
      
    </>
  );
};

export default Home;







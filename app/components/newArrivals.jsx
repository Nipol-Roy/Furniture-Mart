/** @format */

// Move your data file from public/data/data.js to src/data/data.js (or app/data/data.js)
import data from "../../public/data/data";
import CardCrasoule from "./cardCrasoule";

const NewArrivals = () => {
  const products = data.Products || [];
  const cards = products.slice(7, 19).map((item, index) => ({
    id: index, // key for React
    image: item.image,
    text: item.text,
    price: `$${item.price}`,
  }));

  return <CardCrasoule title="New Arrivals" cards={cards} />;
};

export default NewArrivals;

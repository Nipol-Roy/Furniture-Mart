/** @format */

import data from "../../public/data/data";
import CardCrasoule from "./crasoule/cardCrasoule";

const NewArrivals = () => {
  const products = data.Products || [];
  const cards = products.slice(7, 19).map((item, index) => ({
    id: index,
    image: item.image,
    text: item.text,
    price: `$${item.price}`,
  }));

  return <CardCrasoule title="New Arrivals" cards={cards} />;
};

export default NewArrivals;

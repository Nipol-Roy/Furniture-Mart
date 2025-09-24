/** @format */

import data from "../../public/data/data";
import CardCrasoule from "./crasoule/cardCrasoule";

const TopSellers = () => {
  const products = data.Products || [];
  const cards = products.slice(18, 29).map((item, index) => ({
    id: index,
    image: item.image,
    text: item.text,
    price: `$${item.price}`,
  }));

  return <CardCrasoule title="Top Sellers" cards={cards} />;
};

export default TopSellers;

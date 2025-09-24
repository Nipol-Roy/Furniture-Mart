/** @format */

import data from "../../public/data/data";
import CardCrasoule from "./cardCrasoule";

const TopSellers = () => {
  const cards = data.Products.slice(18, 29).map((item) => ({
    image: item.image,
    text: item.text,
    price: `$${item.price}`,
  }));

  return (
    <div>
      <CardCrasoule title="Top Sellers" cards={cards} />
    </div>
  );
};

export default TopSellers;

/** @format */

import data from "../../public/data/data";
import CardCrasoule from "./cardCrasoule";

const newArrivals = () => {
  const cards = data.Products.slice(7, 19).map((item) => ({
    image: item.image,
    text: item.text,
    price: `$${item.price}`,
  }));

  return (
    <div>
      <CardCrasoule title="New Arrivals" cards={cards} />
    </div>
  );
};

export default newArrivals;

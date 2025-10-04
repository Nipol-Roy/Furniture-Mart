// app/data/testmonialData.js
import { v4 as uuidv4 } from "uuid";
import image1 from "../../public/testmonialImage/image1.png";
import image5 from "../../public/testmonialImage/image2.png";
import image3 from "../../public/testmonialImage/image3.jpg";
import image4 from "../../public/testmonialImage/image5.png";
import image7 from "../../public/testmonialImage/image7.png";
import image2 from "../../public/testmonialImage/image8.png";

 const feedback = [
  {
    id: uuidv4(),
    name: "Sarah Johnson",
    designation: "Software Engineer",
    image: image1,
    message: "This platform has completely transformed the way I work."
   },
 {
    id: uuidv4(),
    name: "Sarah Johnson",
    designation: "Software Engineer",
    image: image3,
    message: "This platform has completely transformed the way I work."
  },
  {
    id: uuidv4(),
    name: "David Lee",
    designation: "Product Manager",
    image: image5,
    message: "The team behind this project really understands user needs."
  },
  {
    id: uuidv4(),
    name: "Emily Carter",
    designation: "UI/UX Designer",
    image: image2,
    message: "I love how simple yet powerful the features are. It saves me so much time."
  },
  {
    id: uuidv4(),
    name: "James Brown",
    designation: "Marketing Specialist",
    image: image4,
    message: "This tool has become an essential part of my workflow."
   },
   
  {
    id: uuidv4(),
    name: "David Lee",
    designation: "Product Manager",
    image: image3,
    message: "The team behind this project really understands user needs."
   },
   {
    id: uuidv4(),
    name: "Sarah Johnson",
    designation: "Software Engineer",
    image: image3,
    message: "This platform has completely transformed the way I work."
   },
   {
    id: uuidv4(),
    name: "Sarah Johnson",
    designation: "Software Engineer",
    image: image2,
    message: "This platform has completely transformed the way I work."
  },
  
  {
    id: uuidv4(),
    name: "James Brown",
    designation: "Marketing Specialist",
    image: image7,
    message: "This tool has become an essential part of my workflow."
  }
];

export default feedback

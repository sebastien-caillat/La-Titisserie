// import React from "react";
// import { cardDetails } from "./carousel-config";
// import CarouselItem from "./CarouselItem";

// export default function CarouselItem({ imgUrl, imgTitle }) {
//     return (
//       <div className="carousel-card">
//         <img src={imgUrl} alt={imgTitle}></img>
//       </div>
//     );
// }

// export default function AutoplayCarousel() {
//     return (
//       <div className="carousel-container">
//         <div className="carousel-track">
//           {Object.keys(cardDetails).map((detailKey) => {
//             return (
//               <CarouselItem
//                 imgUrl={cardDetails[detailKey].imgUrl}
//                 imgTitle={cardDetails[detailKey].title}
//               ></CarouselItem>
//             );
//           })}
//           {Object.keys(cardDetails).map((detailKey) => {
//             return (
//               <CarouselItem
//                 imgUrl={cardDetails[detailKey].imgUrl}
//                 imgTitle={cardDetails[detailKey].title}
//               ></CarouselItem>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
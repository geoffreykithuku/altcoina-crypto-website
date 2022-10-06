import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import avatar from "../assets/avatar.jpg";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import Card from "./Card";
import axios from "axios";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const options = {
    method: "GET",
    url: "https://testimonial.p.rapidapi.com/api",
    headers: {
      "X-RapidAPI-Key": "e2ee978627msh525c8a4688a74c7p1c296cjsnbdb7678e8e31",
      "X-RapidAPI-Host": "testimonial.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setReviews(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  const rev = reviews.map((review) => {
    return (
      <Card
        key={review.id}
        avatar={review.avatar}
        designation={review.designation}
        message={review.message}
        name={review.name}
      />
    );
  });
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={4100}
    >
      {rev}
    </Carousel>
  );
}

//  <div>
//           <img
//             style={{
//               width: "300px",
//               borderRadius: "50%",
//             }}
//             src={avatar}
//           />
//           <div className="myCarousel">
//             <h3>Shirley Fultz</h3>
//             <h4>Designer</h4>
//             <p>
//               It's freeing to be able to catch up on customized news and not be
//               distracted by a social media element on the same site
//             </p>
//           </div>
//         </div>

//         <div>
//           <img style={{ width: "300px", borderRadius: "50%" }} src={avatar1} />
//           <div className="myCarousel">
//             <h3>Daniel Keystone</h3>
//             <h4>Designer</h4>
//             <p>
//               The simple and intuitive design makes it easy for me use. I highly
//               recommend Fetch to my peers.
//             </p>
//           </div>
//         </div>

//         <div>
//           <img style={{ width: "300px", borderRadius: "50%" }} src={avatar2} />
//           <div className="myCarousel">
//             <h3>Theo Sorel</h3>
//             <h4>Designer</h4>
//             <p>
//               I enjoy catching up with Fetch on my laptop, or on my phone when
//               I'm on the go!
//             </p>
//           </div>
//         </div>

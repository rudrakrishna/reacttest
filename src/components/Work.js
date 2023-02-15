import React from 'react';
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "choose from: smoked cheddar mac & cheese, seasoned french fries, crispy brussels sprouts, chipotle garlic green beans, red bliss potato salad, classic coleslaw, or bbq beans.",
        },

        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "smoked ham, pulled pork, melted swiss, pickles, mojo mustard, crispy skins, hoagie roll.",
        },

        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "smoked and shredded jackfruit tikka masala, paneer cheese, roasted green chilies, smoked tomato, crispy onions, cilantro sauce, texas toast.",
        },
    ]
  return (
  <>
   <div className="work-section-wrapper">
    <div className="work-section-top">
        <p className="primary-subheading">
            Work
        </p>

        <h1 className="primary-heading">
             How It Works
        </h1>
        <p className="primary-text">
        Roman’s serves spirited, Italian-influenced food that reflects a longstanding commitment to local agriculture and sustainability. Our menu celebrates our relationships with area farmers, tradition-based artisans, agricultural-based Italian importers, and winemakers.
        </p>
    </div>
    <div className="work-section-bottom">
        {
            workInfoData.map((data) => (
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={ data.image } alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p> {data.text} </p>
                </div>
            ))
        }
    </div>
   </div>
  </>
  );
};

export default Work;

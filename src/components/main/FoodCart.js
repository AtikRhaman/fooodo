import React from "react";
import './foodCart.css'
const foodNearBy = [
     {
          id:'id01',
          img: 'https://www.tablefortwoblog.com/wp-content/uploads/2019/02/asian-pork-meatballs-recipe-photos-tablefortwoblog-4-optimized-400x400.jpg',
          name:'Ham Sandwitch',
          price:'150',
          shop:'Dhaka Kitchen',
          rating:'4.5',
          location: 'Mirpur',
          distance:'5km',
          transport:'bike'
     },
     {
          id:'id02',
          img:'https://tastesbetterfromscratch.com/wp-content/uploads/2019/08/Instant-Pot-Cajun-Pasta-8-400x400.jpg',
          name:'Ham Sandwitch',
          price:'150',
          shop:'Dhaka Kitchen',
          rating:'4.5',
          location: 'Mirpur',
          distance:'5km',
          transport:'bike'
     },
     {
          id:'id03',
          img:'https://tastesbetterfromscratch.com/wp-content/uploads/2019/08/Instant-Pot-Cajun-Pasta-8-400x400.jpg',
          name:'Ham Sandwitch',
          price:'150',
          shop:'Dhaka Kitchen',
          rating:'4.5',
          location: 'Mirpur',
          distance:'5km',
          transport:'bike'
     },
     {
          id:'id04',
          img:'https://tastesbetterfromscratch.com/wp-content/uploads/2019/08/Instant-Pot-Cajun-Pasta-8-400x400.jpg',
          name:'Ham Sandwitch',
          price:'150',
          shop:'Dhaka Kitchen',
          rating:'4.5',
          location: 'Mirpur',
          distance:'5km',
          transport:'bike'
     }
    //  ,
    //  {
    //       id:'id05',
    //       img:'https://tastesbetterfromscratch.com/wp-content/uploads/2019/08/Instant-Pot-Cajun-Pasta-8-400x400.jpg',
    //       name:'Ham Sandwitch',
    //       price:'150',
    //       shop:'Dhaka Kitchen',
    //       rating:'4.5',
    //       location: 'Mirpur',
    //       distance:'5km',
    //       transport:'bike'
    //  }
]

 const FoodCart = () =>{
    const FoodList = () => foodNearBy.map(food =>(
        <div className = 'food-cart'>
            <div className = 'food-cart__img'>
                <img src = {food.img} alt=" " />             
            </div>
            <h2>{food.name}</h2>
            <div className = 'food-cart__shop'>
                <p>{food.shop}</p>
                <p>{food.rating}</p>
            </div>
            <div className = 'food-cart__location'>
                <p>{food.distance}</p>
                <p>{food.transport}</p>
            </div>
            <button className = 'food-cart__add-button'> Add to Cart</button>
        </div>
        ) )
    return <div className = 'food-cart_container'>
        <FoodList/>
    </div>    
    }

 export default FoodCart
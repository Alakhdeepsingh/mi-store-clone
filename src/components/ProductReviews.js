import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../style/ProductReviews.css"
const ProductReviews = ({productReviews}) => {
    return (
        <div className="ProductReviews">
            {productReviews.map((item,index)=>(
<ProductReviewCard price={item.price} image={item.image} review={item.reviews} index={index} key={item.image} />
            ))}            
        </div>
    )
}



export default ProductReviews

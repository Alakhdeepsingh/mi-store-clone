import React from 'react'
import "../style/HotItemCard.css"

const HotItemCard = ({image,index,name,price}) => {
    return (
        <div className="HotItemCard">
            <img src={image} alt={`${index} product`} />
            <p>{name}</p>
            <span>{price}</span>
            
        </div>
    )
}

export default HotItemCard;



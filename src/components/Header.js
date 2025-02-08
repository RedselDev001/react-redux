import React from 'react'

const Header = (props) => {
    const headerPropsData = props;

    console.log("headerPropsData", headerPropsData);

    //============ main return  function 
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{headerPropsData.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    )
}

export default Header
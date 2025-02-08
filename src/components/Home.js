import React from 'react'

const Home = (props) => {
    const homePropsData = props
    console.log("HomeComponent", homePropsData)

    //============ main return function  =========//
    return (
        <div>

            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258&width=823" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={() => homePropsData.addToCartHander({ price: 1000, name: "i phone 11" })}
                    >
                        Add To Cart
                    </button>
                    <button
                        onClick={() => homePropsData.removeToCartHander()}
                    >
                        remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
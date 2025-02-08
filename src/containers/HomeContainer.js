import { connect } from "react-redux";
import { addToCart, removeToCart } from "../service/Actions/action";
import Home from "../components/Home";

const mapStateToProps = state => ({
    data: state.cartItems


})
const mapDispatchToProps = dispatchEvent => ({
    addToCartHander: data => dispatchEvent(addToCart(data)),
    removeToCartHander: data => dispatchEvent(removeToCart(data)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

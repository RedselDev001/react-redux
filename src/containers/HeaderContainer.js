import Header from "../components/Header";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    data: state.cartItems


})
const mapDispatchToProps = dispatchEvent => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
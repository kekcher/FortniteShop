function Cart(props){
    const{count = 0, handleBascketShow = Function.prototype} = props;
    return <div className="cart red darken-1 white-text" onClick={handleBascketShow}>
        <i className="material-icons">add_shopping_cart</i>
        {count ? <span className="cart_count">{count}</span> : null}
    </div>
}

export default Cart
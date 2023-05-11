import BascketItem from "./BascketItem";

function BascketList(props) {
    const { order = [], handleBascketShow = Function.prototype, removeFromBascket = Function.prototype, incCount = Function.prototype, decCount = Function.prototype} = props;

    const totalPrice = order.reduce((sum, e) => {
        return sum + e.price.finalPrice * e.count;
    }, 0)

    return <ul className="collection bascket-list">
        <li className="collection-item active">Корзина</li>
        {
            order.length ? order.map((item) =>{
                return <BascketItem key={item.mainId} {...item} removeFromBascket={removeFromBascket} incCount={incCount} decCount={decCount}/>
            }) : <li className="collection-item">Корзина пуста</li>
        }
        <li className="collection-item active">Общая стоимость: {totalPrice} V</li>
        <li className="collection-item"><button className="secondary-content btn btn-small">Оформить</button></li>
        <i className="material-icons bascket-close" onClick={handleBascketShow}>cancel</i>
    </ul>
}

export default BascketList;
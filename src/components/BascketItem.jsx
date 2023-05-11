function BascketItem(props){
    const {
        mainId,
        displayName,
        price,
        count,
        removeFromBascket = Function.prototype,
        incCount = Function.prototype, 
        decCount = Function.prototype
    } = props
    return (
        <li className="collection-item">
            {displayName} <i className="material-icons bascket-count" onClick={()=>decCount(mainId)}>remove</i> x{count} <i className="material-icons bascket-count" onClick={()=>incCount(mainId)}>add</i> = {price.finalPrice * count} V
            <span className="secondary-content" onClick={()=>removeFromBascket(mainId)}>
                <i className="material-icons bascket-delete">cancel</i>
            </span>
        </li>
    );
}

export default BascketItem;
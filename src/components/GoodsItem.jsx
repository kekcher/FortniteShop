function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
        addToBascket = Function.prototype
    } = props;

    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={displayAssets[0].full_background} alt={displayName}/>
                    </div>
                    <div className="card-content">
                        <p>{displayDescription}</p>
                    </div>
                    <div className="card-action">
                        <button className="btn" onClick={() => addToBascket({
                            mainId,
                            displayName,
                            price
                        })}>Купить</button>
                        <span className="right">{price.finalPrice} V</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoodsItem;

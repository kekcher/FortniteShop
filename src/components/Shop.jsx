import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BascketList from "./BascketList";
import Alert from "./Alert";

function Shop() {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBascketShow, setBascketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const API_KEY = 'ab19aa6b-2623b391-618da19e-858da6eb';

    const API_URL = 'https://fortniteapi.io/v2/shop?lang=ru';

    const addToBascket = (item) =>{

        console.log(item);
       
        const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId)

        if(itemIndex < 0){
            const newItem = {
                ...item,
                count: 1,
            }
            setOrder([...order, newItem])
        }else{
            const newOrder = order.map((item, index)=>{
                if(index === itemIndex){
                    return{
                        ...item,
                        count: item.count + 1,
                    }
                }
                else{
                    return item;
                }
            })

            setOrder(newOrder);
        }

        setAlertName(item.displayName);
    }

    const removeFromBascket = (itemId) =>{
        const newOrder = order.filter(item => item.mainId !== itemId);
        setOrder(newOrder)
    }

    const handleBascketShow = () =>{
        setBascketShow(!isBascketShow);
    }

    const incCount = (itemId) =>{
        const newOrder = order.map(el =>{
            if(el.mainId === itemId){
                const newCount = el.count + 1;
                return{
                    ...el,
                    count: newCount
                }
            }
            else{
                return el
            }
        })
        setOrder(newOrder);
    }

    const decCount = (itemId) =>{
        const newOrder = order.map(el =>{
            if(el.mainId === itemId){
                const newCount = el.count - 1;
                return{
                    ...el,
                    count: newCount >=0 ? newCount : 0
                }
            }
            else{
                return el
            }
        })
        setOrder(newOrder);
    }

    const closeAlert = () =>{
        setAlertName('');
    }

    useEffect(function getGoods() {
        fetch(API_URL,{
            headers: {
                'Authorization': API_KEY,
            },
        }).then(response => response.json()).then(data => {
            setGoods(data.shop);
            setLoading(false);
        })
    }, []);

    return <main className="container content">
        <Cart count={order.length} handleBascketShow={handleBascketShow}/>
        {
            loading ? <Preloader /> : <GoodsList goods={goods} addToBascket ={addToBascket}/>
        }
        {
            isBascketShow && <BascketList order={order} handleBascketShow={handleBascketShow} removeFromBascket={removeFromBascket } incCount={incCount} decCount={decCount}/>
        }
        {
            alertName && <Alert name={alertName} closeAlert={closeAlert}/>
        }
    </main>
}

export default Shop;
import styled from "./css/shoppingcart.module.css";
const CartItem=({item,removeItem})=>{
    const deleteItem = () =>{
        fetch("http://localhost:8081/cart/"+ item.id,{
            method: "DELETE",
            headers:{
                "Content-type":"application/json:charset=UTF-8"
            },
        }).then(()=>{
          removeItem(item)
        });
    };
    return(
        <>
        <div class={styled.CItems}>
                    <div className={styled.Cimg}>
                        <img className={styled.slipper} src={item.image} />
                    </div>
                    <div className={styled.Cabout}>
                        <h1 className={styled.Ctitle}>{item.name}</h1>
                        {/* <h3 className={styled.Csubtitle}>250ml</h3> */}
                        {/* <img src=”images/veg.png” style={{ height=”30px” }}/> */}
                    </div>
                    <div className={styled.Ccounter}>
                    <div className={styled.Cpbtn}>Quantity</div>
                        <input className={styled.Ccount} type="number" id="quantity" value={item.quantity} name="quantity"/>
                        {/* <div className={styled.Cpbtn}>-</div> */}
                    </div>
                    <div className={styled.Cprice}>
                        <div className={styled.Camount}>Price: Rs. {item.price}</div>
                        <div className={styled.Camount}>Total Price: Rs. {item.totalprice}</div>
                      
                        <div className={styled.Cremove} onClick={deleteItem}>Remove</div>
                    </div>
                  
                </div>
                  
                  </>
    );
}
export default CartItem;
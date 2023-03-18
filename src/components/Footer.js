import React from 'react'
function Footer(props)
{
    console.log('footer props',props)
    return(
        <div>
             <div className="add-to-cart">
             <h2>Footer compo</h2>
             {/* { props.data.length && <p>{props.data.length}</p>}
             { props.length >0 &&  <p>{props.data[0].data.price}</p>}
            <p>{props.data[0].data.price * props.data.length}</p> */}
    {/* { props.data.length >0 && <span className="cart-count">{Number(props.data[0].price)* props.data.length}</span>} */}
            </div>
        </div>
    )
}

export default Footer
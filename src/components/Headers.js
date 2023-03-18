import React from 'react'
function Header(props)
{
    console.log('Headers props',props.data)
    return(
        <div>
             <div >
        <h2>Headers compo</h2>
    { props.data && <span className="cart-count">{props.data.length}</span>}
            </div>
        </div>
    )
}

export default Header
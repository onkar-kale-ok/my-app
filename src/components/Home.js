import React from 'react'

function Home(props) {
    console.log('home container',props)
    return (
        <div>

            <h1>Home Component</h1>
                <div className="btn-wrapper item">
                    <img src='https://fastly.picsum.photos/id/288/200/300.jpg?hmac=45WLionXnoogi0-njKuSNnVY5hnswMhf-CrxwzKTcrc'/>
                    <button
                        onClick={
                            () => { props.sendData({ price: 100000, name: 'flat' }) }
                        }>
                        Buy Flat</button>
                </div>
        </div>
    )
}
export default Home
import React from 'react'
import "./Home.css"
const Home = () => {
    return (
       
         <div className='home '>
            <div className="home-left">
                <h2>New ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-icon">
                        <p>New</p>
                        <img src='https://images.emojiterra.com/microsoft/fluent-emoji/15.1/1024px/1f44b_color.png' height='70px' width='80px'></img>
                    </div>
                    <p>Collection</p>
                    <p>For Everyone</p>
                    <div className="home-latest-btn">
                        <div>Latest Collection</div>
                        <span className='bi bi-arrow-right'></span>
                    </div>
                </div>
            </div>
            <div className="home-right">
                <img src='https://th.bing.com/th/id/R.3553dd5e7c41379e17e1fd63d5fc2950?rik=xskAYTmIVxZhQg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f5%2fGirl-Smile-Transparent-Background.png&ehk=who7gGyc1l5wrFcI85E93ux4XWVBp2WJUqYizQpZ9S0%3d&risl=&pid=ImgRaw&r=0' height='600'></img>
            </div>
        </div>
    
    )
}

export default Home

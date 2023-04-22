import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://i0.wp.com/www.visitilocandia.com/wp-content/uploads/2016/01/Baguio-Camp-John-Hay.jpg" alt="Featured Item" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Baguio City</h1>
                <h2>121 Camp John Hay</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://www.hotelfalli.com/wp-content/uploads/2022/04/dep-1900x1000.jpeg" alt="Featured Item" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Maryland</h1>
                <h2>Loie Palace Hotel</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://www.hotelfalli.com/wp-content/uploads/2022/10/notte-1-scaled-1900x1000.jpg" alt="Featured Item" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>Hotel Faillie</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
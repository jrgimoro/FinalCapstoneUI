import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
        <img src="https://photos.zillowstatic.com/fp/d7b03b0e8e3eb8ab19bc8141083c5616-p_e.jpg" alt="" className="fpImg" />
        <span className="fpName">Rachel Hotel</span>
        <span className="fpCity">Manila</span>
        <span className="fpPrice">Starting from P 11,299</span>
        <div className="fpRating">
            <button>9.2</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://thumbs.cityrealty.com/assets/smart/736x/webp/1/16/1655f4e3904fb79cb987ab7755d2b3f4b8f37f88/1-city-point.jpg" alt="" className="fpImg" />
        <span className="fpName">Emmanuel's Hub</span>
        <span className="fpCity">Manila</span>
        <span className="fpPrice">Starting from P 10,500</span>
        <div className="fpRating">
            <button>7.8</button>
            <span>Great</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://res.cloudinary.com/g5-assets-cld/image/upload/x_0,y_0,h_1920,w_3840,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1000,w_2000/g5/g5-c-i7yxybw5-mission-rock-single/g5-cl-1ll79oxpd8-mission-rock-single-longmont-co/uploads/2021.03.17_-_Longmont_Renderings_Updated_Roof_1_of_2_uwxrd7.jpg" alt="" className="fpImg" />
        <span className="fpName">John Apartelles</span>
        <span className="fpCity">Baguio</span>
        <span className="fpPrice">Starting from P 5,200</span>
        <div className="fpRating">
            <button>9.1</button>
            <span>Excellent</span>
        </div>
        </div>
        
    </div>
  )
}

export default FeaturedProperties
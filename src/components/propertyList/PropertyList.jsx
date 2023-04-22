import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_332,q_75,w_640/v1/clients/sugarland/ExteriorPool_32a60102-2ff3-4382-8bbb-aaabbdb2a338.jpg" alt="Hotels" className="pListImg" />
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>130 Properties</h2>
        </div>
        </div>
        <div className="pListItem">
            <img src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/Tv7e261C-VEUsW8U2H13Qh07yr4=/1660x934/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/OEVDQ6BFLMY3IMBHDCQSUPKB3E.jpg" alt="Apartments" className="pListImg" />
        <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>68 Properties</h2>
        </div>
        </div>
        <div className="pListItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/e6/46/da/atmosphere-resort.jpg?w=700&h=-1&s=1" alt="Resorts" className="pListImg" />
        <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>109 Properties</h2>
        </div>
        </div>
        <div className="pListItem">
            <img src="https://www.build-review.com/wp-content/uploads/2021/10/Cabin.jpg" alt="Cabins" className="pListImg" />
        <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>12 Properties</h2>
        </div>
        </div>
    </div>
  )
}

export default PropertyList
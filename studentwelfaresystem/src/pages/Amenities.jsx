import furniture from '../images/furniture.png'
import washingmachine from '../images/washingmachine.png'
import waterfilter from '../images/waterfilter.png'
import wifi from '../images/wifi.jpg'


const Amenities = () => {
    return (
            <div className="amenities-container">
                <div className="amenity-box"> 
                    <div className="amenity-logo"></div>
                    <div className="amenity-info">
                        <div className="amenity-name">
                            <img src={furniture} alt ="furniture image"/>
                        </div>
                        <div className="amenity-details"></div>
                    </div>
                </div>
            </div>

    )
}
export default Amenities
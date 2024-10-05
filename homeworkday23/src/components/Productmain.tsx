import { Link } from 'react-router-dom';
import "./Productmain.css";

function Productmain() {
  return (
<>
    <div className="container">
    <div className="leftbar">
        <div className="product-img">
            <div>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409982_sd.jpg;maxHeight=640;maxWidth=550"
                    alt="Camera" />
            </div>
        </div>
        <div className="stock">
            <div>
                <h3>Stock (50/100)</h3>
                <div className="stock-barfull">
                    <div className="stock-bar">
                        <p>50%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="rightbar">
        <div className="productname">
            <div>
                <h2>Product Name</h2>
                <p>
                    A camera is an instrument used to capture and store images and
                    videos, either digitally via an electronic image sensor, <br />or
                    chemically via a light-sensitive material such as photographic
                    film.
                </p>
                <h4>Price $99</h4>
                <p>Quantity :</p>
                <input type="number" min={0} />
                <Link to={"/payment"}><button type="submit">Add to Cart</button></Link>
            </div>
        </div>
        <div className="spec">
            <div>
                <h2>specification</h2>
                <h4>Type : 36 x 24 mm CMOS</h4>
                <h4>Effective Pixels : Approx. 30.3 megapixels</h4>
                <h4>Total Pixels : Approx. 31.7 megapixels</h4>
                <h4>Aspect Ratio : 3:2</h4>
                <h4>Low-Pass Filter : Built-in/Fixed</h4>
                <h4>Sensor Cleaning : EOS integrated cleaning system</h4>
                <h4>
                    Colour Filter Type : Primary Colour with increased Hα light
                    Transmission rate
                </h4>
            </div>
        </div>
    </div>

    <div className="footer">
        <div className="footer__head">
            <h3>Rate this Product</h3>
        </div>
        <div className="main__radio">
            <input type="radio" id="numVote" name="vote" />1
            <input type="radio" id="numVote" name="vote" />2
            <input type="radio" id="numVote" name="vote" />3
            <input type="radio" id="numVote" name="vote" />4
            <input type="radio" id="numVote" name="vote" />5
            <button type="submit" id="submit">Submit Rating</button>
        </div>
        <div className="review">
            <div className="footer__head">
                <h3>Reviews</h3>
            </div>
            <div className="main__userReviews">
                <h4>Johnny Depp</h4>
                <p>
                    Having read only a few of these comments mostly positive by those
                    who work with and own the RP I'm sorely tempted to buy this camera
                    at this late stage.
                </p>
                <h4>Amber Heard</h4>
                <p>
                    I too have to agree with those that say this review and others
                    here says more about editors and testers, than the camera's
                    reviewed.
                </p>
            </div>
        </div>
    </div>
</div>
</>
  );
}

export default Productmain;

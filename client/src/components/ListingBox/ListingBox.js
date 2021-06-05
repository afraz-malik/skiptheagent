import React from 'react';
import './ListingBox.css'
const ListingBox = () =>{
	return (
    <section>
        <div className="leftsection">
          <div className="leftsectioncard first" >
            <p>SHOW RESULTS BY:</p>
            <img alt='' className="firstarrow" src="images\downarrow.png" />
          </div>
          <div className="outside_leftsectioncard ">
            <div className="leftsectioncard" >
              <p>SHOW BY KEYWORDS:</p>
              <img alt='' className="arrow" src="images\downarrow.png" />
            </div>
            <div className="leftsectioncard insidesecond">
              <form>
                <input type="text" name="search" placeholder="Keywords... e.g Honda"  />
                <button type="submit">GO</button>
              </form>
            </div>
            <div className="leftsectioncard" >
              <p>YEAR</p>
              <img alt='' className="arrow" src="images\downarrow.png" />
            </div>
            <div className="leftsectioncard insidesecond">
              <form>
                <input type="text" name="search" placeholder="Keywords... e.g Honda"  />
                <button type="submit">GO</button>
              </form>
            </div>
            <div className="leftsectioncard" >
              <p>MAKE</p>
              <img alt='' className="arrow" src="images\downarrow.png" />
            </div>
            <div className="leftsectioncard insidesecond">
              <form>
                <input type="text" name="search" placeholder="Keywords... e.g Honda"  />
                <button type="submit">GO</button>
              </form>
            </div>
            <div className="leftsectioncard" >
              <p>MODEL</p>
              <img alt='' className="arrow" src="images\downarrow.png" />
            </div>
            <div className="leftsectioncard insidesecond">
              <form>
                <input type="text" name="search" placeholder="Keywords... e.g Honda"  />
                <button type="submit">GO</button>
              </form>
            </div>
            <div className="leftsectioncard">
              <p>ZIP CODE</p>
              <img alt='' className="arrow" src="images\downarrow.png" />
            </div>
            <div className="leftsectioncard">
              <p>PRICE</p>
              <img alt='' className="arrow" src="images\downarrow.png" />
            </div>
            <div className="leftsectioncard">
              <p>BODY TYPE</p>
              <img alt='' className="arrow" src="images\downarrow.png" />
            </div>
            <div className="leftsectioncard">
              <p>MILEAGE</p>
              <img alt='' className="arrow" src="images\downarrow.png" />
            </div>
            <div className="leftsectioncard">
              <p>FUEL TYPE</p>
              <img alt='' className="arrow" src="images\downarrow.png" />
            </div>
            <div className="leftsectioncard">
              <p>ENGINE TYPE</p>
              <img alt='' className="arrow" src="images\downarrow.png" />
            </div>
            <div className="leftsectioncard">
              <p>EXTERIOR COLOR</p>
              <img alt='' className="arrow" src="images\downarrow.png" />
            </div>
            <div className="leftsectioncard">
              <p>TRANSMISSION TYPE</p>
              <img alt='' className="arrow" src="images\downarrow.png" />
            </div>
            <div className="leftsectioncard">
              <p>CAPACITY</p>
              <img alt='' className="arrow" src="images\downarrow.png" />
            </div>
          </div>
        </div>
        <div className="boxmodel listingmodel rightsection">
          <div className="boxmodel_topbar listingmodel_topbar">
            <div className="boxmodel_title listingboxmodel_title">
              <p>USED CARS FOR SALE [48631]</p>
            </div>
            <div className="extra" />
            <div className="extra" />
            <div className="sortby">
              <div className="sortby_text">
                <p>SORT BY:</p>
              </div>
              <div className="sortby_box">
                {/* <div class="boxtext">
							<p><span>Updated Date:</span> Recent first</p>
						</div>
						<div class="boximg">
							<img alt='' src="images\downarrow.png">
						</div> */}
                <select name="cars" id="city">
                  <option value="volvo">Updated Date: Recent first</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
          </div>
          <div className="listingcards">
            <div className="leftcard">
              <a href="#dummy"><img alt='' src="images\listingcar.jpg" /></a>
            </div>
            <div className="rightcard">
              <div className="cardtop">
                <div className="cardname">
                <a href="#dummy"><p>2019 Fiat 124 Spider</p></a>
                </div>
                <div className="cardprice">
                  <p>$22,547</p>
                </div>			
              </div>
              <div className="carddetails">
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum.Proin gravida nibh vel velit auctor aliqut.</p>
              </div>
              <div className="cardpoints">
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\placeholder.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Paris</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\calendar.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2019</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\meter.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>3,200 KM</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\fuel.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Hybrid</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\lightning.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2000CC</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\transmission.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Automatic</p>
                  </div>
                </div>
              </div>
              <div className="cardbottom">
                <div className="lastupdate">
                  <p>Last updated: 24 min ago</p>
                </div>
                <div className="likenumber">
                  <div className="likeimage">
                    <img alt='' className="likeimg" src="images\like.png" />
                  </div>
                  <div className="showbutton">
                    <button>Show Phone Number</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listingcards">
            <div className="leftcard">
              <a href="#dummy"><img alt='' src="images\listingcar.jpg" /></a>
            </div>
            <div className="rightcard">
              <div className="cardtop">
                <div className="cardname">
                  <a href="#dummy"><p>2019 Fiat 124 Spider</p></a>
                </div>
                <div className="cardprice">
                  <p>$22,547</p>
                </div>			
              </div>
              <div className="carddetails">
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum.Proin gravida nibh vel velit auctor aliqut.</p>
              </div>
              <div className="cardpoints">
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\placeholder.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Paris</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\calendar.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2019</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\meter.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>3,200 KM</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\fuel.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Hybrid</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\lightning.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2000CC</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\transmission.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Automatic</p>
                  </div>
                </div>
              </div>
              <div className="cardbottom">
                <div className="lastupdate">
                  <p>Last updated: 24 min ago</p>
                </div>
                <div className="likenumber">
                  <div className="likeimage">
                    <img alt='' src="images\like.png" />
                  </div>
                  <div className="showbutton">
                    <button>Show Phone Number</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listingcards">
            <div className="leftcard">
              <a href="#dummy"><img alt='' src="images\listingcar.jpg" /></a>
            </div>
            <div className="rightcard">
              <div className="cardtop">
                <div className="cardname">
                  <a href="#dummy"><p>2019 Fiat 124 Spider</p></a>
                </div>
                <div className="cardprice">
                  <p>$22,547</p>
                </div>			
              </div>
              <div className="carddetails">
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum.Proin gravida nibh vel velit auctor aliqut.</p>
              </div>
              <div className="cardpoints">
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\placeholder.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Paris</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\calendar.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2019</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\meter.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>3,200 KM</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\fuel.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Hybrid</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\lightning.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2000CC</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\transmission.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Automatic</p>
                  </div>
                </div>
              </div>
              <div className="cardbottom">
                <div className="lastupdate">
                  <p>Last updated: 24 min ago</p>
                </div>
                <div className="likenumber">
                  <div className="likeimage">
                    <img alt='' src="images\like.png" />
                  </div>
                  <div className="showbutton">
                    <button>Show Phone Number</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listingcards">
            <div className="leftcard">
              <a href="#dummy"><img alt='' src="images\listingcar.jpg" /></a>
            </div>
            <div className="rightcard">
              <div className="cardtop">
                <div className="cardname">
                  <a href="#dummy"><p>2019 Fiat 124 Spider</p></a>
                </div>
                <div className="cardprice">
                  <p>$22,547</p>
                </div>			
              </div>
              <div className="carddetails">
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum.Proin gravida nibh vel velit auctor aliqut.</p>
              </div>
              <div className="cardpoints">
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\placeholder.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Paris</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\calendar.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2019</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\meter.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>3,200 KM</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\fuel.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Hybrid</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\lightning.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2000CC</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\transmission.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Automatic</p>
                  </div>
                </div>
              </div>
              <div className="cardbottom">
                <div className="lastupdate">
                  <p>Last updated: 24 min ago</p>
                </div>
                <div className="likenumber">
                  <div className="likeimage">
                    <img alt='' src="images\like.png" />
                  </div>
                  <div className="showbutton">
                    <button>Show Phone Number</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listingcards">
            <div className="leftcard">
              <a href="#dummy"><img alt='' src="images\listingcar.jpg" /></a>
            </div>
            <div className="rightcard">
              <div className="cardtop">
                <div className="cardname">
                  <a href="#dummy"><p>2019 Fiat 124 Spider</p></a>
                </div>
                <div className="cardprice">
                  <p>$22,547</p>
                </div>			
              </div>
              <div className="carddetails">
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum.Proin gravida nibh vel velit auctor aliqut.</p>
              </div>
              <div className="cardpoints">
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\placeholder.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Paris</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\calendar.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2019</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\meter.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>3,200 KM</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\fuel.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Hybrid</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\lightning.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2000CC</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\transmission.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Automatic</p>
                  </div>
                </div>
              </div>
              <div className="cardbottom">
                <div className="lastupdate">
                  <p>Last updated: 24 min ago</p>
                </div>
                <div className="likenumber">
                  <div className="likeimage">
                    <img alt='' src="images\like.png" />
                  </div>
                  <div className="showbutton">
                    <button>Show Phone Number</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listingcards">
            <div className="leftcard">
              <a href="#dummy"><img alt='' src="images\listingcar.jpg" /></a>
            </div>
            <div className="rightcard">
              <div className="cardtop">
                <div className="cardname">
                  <a href="#dummy"><p>2019 Fiat 124 Spider</p></a>
                </div>
                <div className="cardprice">
                  <p>$22,547</p>
                </div>			
              </div>
              <div className="carddetails">
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum.Proin gravida nibh vel velit auctor aliqut.</p>
              </div>
              <div className="cardpoints">
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\placeholder.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Paris</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\calendar.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2019</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\meter.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>3,200 KM</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\fuel.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Hybrid</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\lightning.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2000CC</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\transmission.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Automatic</p>
                  </div>
                </div>
              </div>
              <div className="cardbottom">
                <div className="lastupdate">
                  <p>Last updated: 24 min ago</p>
                </div>
                <div className="likenumber">
                  <div className="likeimage">
                    <img alt='' src="images\like.png" />
                  </div>
                  <div className="showbutton">
                    <button>Show Phone Number</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listingcards">
            <div className="leftcard">
              <a href="#dummy"><img alt='' src="images\listingcar.jpg" /></a>
            </div>
            <div className="rightcard">
              <div className="cardtop">
                <div className="cardname">
                  <a href="#dummy"><p>2019 Fiat 124 Spider</p></a>
                </div>
                <div className="cardprice">
                  <p>$22,547</p>
                </div>			
              </div>
              <div className="carddetails">
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum.Proin gravida nibh vel velit auctor aliqut.</p>
              </div>
              <div className="cardpoints">
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\placeholder.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Paris</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\calendar.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2019</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\meter.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>3,200 KM</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\fuel.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Hybrid</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\lightning.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2000CC</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\transmission.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Automatic</p>
                  </div>
                </div>
              </div>
              <div className="cardbottom">
                <div className="lastupdate">
                  <p>Last updated: 24 min ago</p>
                </div>
                <div className="likenumber">
                  <div className="likeimage">
                    <img alt='' src="images\like.png" />
                  </div>
                  <div className="showbutton">
                    <button>Show Phone Number</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listingcards">
            <div className="leftcard">
              <a href="#dummy"><img alt='' src="images\listingcar.jpg" /></a>
            </div>
            <div className="rightcard">
              <div className="cardtop">
                <div className="cardname">
                  <a href="#dummy"><p>2019 Fiat 124 Spider</p></a>
                </div>
                <div className="cardprice">
                  <p>$22,547</p>
                </div>			
              </div>
              <div className="carddetails">
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum.Proin gravida nibh vel velit auctor aliqut.</p>
              </div>
              <div className="cardpoints">
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\placeholder.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Paris</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\calendar.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2019</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\meter.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>3,200 KM</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\fuel.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Hybrid</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\lightning.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2000CC</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\transmission.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Automatic</p>
                  </div>
                </div>
              </div>
              <div className="cardbottom">
                <div className="lastupdate">
                  <p>Last updated: 24 min ago</p>
                </div>
                <div className="likenumber">
                  <div className="likeimage">
                    <img alt='' src="images\like.png" />
                  </div>
                  <div className="showbutton">
                    <button>Show Phone Number</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listingcards">
            <div className="leftcard">
              <a href="#dummy"><img alt='' src="images\listingcar.jpg" /></a>
            </div>
            <div className="rightcard">
              <div className="cardtop">
                <div className="cardname">
                  <a href="#dummy"><p>2019 Fiat 124 Spider</p></a>
                </div>
                <div className="cardprice">
                  <p>$22,547</p>
                </div>			
              </div>
              <div className="carddetails">
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum.Proin gravida nibh vel velit auctor aliqut.</p>
              </div>
              <div className="cardpoints">
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\placeholder.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Paris</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\calendar.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2019</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\meter.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>3,200 KM</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\fuel.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Hybrid</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\lightning.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>2000CC</p>
                  </div>
                </div>
                <div className="cardpickups">
                  <div className="cardpickup1">
                    <img alt='' src="images\transmission.png" />
                  </div>
                  <div className="cardpickup2">
                    <p>Automatic</p>
                  </div>
                </div>
              </div>
              <div className="cardbottom">
                <div className="lastupdate">
                  <p>Last updated: 24 min ago</p>
                </div>
                <div className="likenumber">
                  <div className="likeimage">
                    <img alt='' src="images\like.png" />
                  </div>
                  <div className="showbutton">
                    <button>Show Phone Number</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boxmodel_topbar listingmodel_topbar">
            <div className="boxmodel_title listingboxmodel_bottomtitle">
              <ul>
                <li>&lt;</li>
                <li><a href='#dummy'>1</a></li>
                <li><a href='#dummy'>2</a></li>
                <li><a href='#dummy'>3</a></li>
                <li><a href='#dummy'>4</a></li>
                <li><a href='#dummy'>5</a></li>
                <li>...</li>
                <li><a href='#dummy'>45</a></li>
                <li>&gt;</li>
              </ul>
            </div>
          </div>
        </div>
    </section>
	)
}
export default ListingBox;
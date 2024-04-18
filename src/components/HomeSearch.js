import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Properties from '../database/Properties.json';
import HomeImg from '../Images/homeImage.jpg';
import '../styles/homeSearch.css';
import formatPrice from '../utils/formatPrice';


const HomeSearch = () => {
  const [search, setSearch] = useState('');
  let [hotProperties, setHotProperties] = useState([]);

    function setSubstring() {
        setSearch(document.getElementById("propSearchField").value);
    }
    let properties = Properties.properties;
    hotProperties = properties.slice(0, 3);

  let renderedProps = hotProperties.map((property) => (
    <Link class="hotPropLink" to={`/view/${property.property_id}`}>
    <div className="carousel-item" key={property.id}>
      <div className="carousel-container">
        <img className="propImg" src={property.img.thumbnail} alt={property.address.firstLine} />
        <h2 class="hotPropInfo">{property.address.firstLine}, {property.address.city}</h2>
          <p class="hotPropInfo">{'£' + formatPrice(property.price)}</p>
      </div>
    </div>
    </Link>
  ));

  function setSubstring() {
    setSearch(document.getElementById('propSearchField').value);
    console.log(search);
  }

  return (
    <>
      <div className="imageContainer">
        <img id="banner" src={HomeImg} alt="homeImg"></img>
        <fieldset className="homeSearch">
          <div className="searchNav">
            <h2 className="searchText">Find Your Dream Home</h2>
            <h4 className="searchText">Search properties for sale in the UK</h4>
            <div className="inputs">
              <input
                id="propSearchField"
                type="text"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              ></input>
              <Link to={`/properties/${search}`}>
                <button className="searchBtn" onClick={setSubstring}>
                  Search
                </button>
              </Link>
            </div>
          </div>
        </fieldset>
      </div>
      <h2 class="popularHeading">Popular right now: </h2>
      <AliceCarousel mouseTracking items={renderedProps}></AliceCarousel>
    </>
  );
};

export default HomeSearch;

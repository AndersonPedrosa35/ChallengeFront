import React, { useEffect, useState, useRef } from 'react';
import mapboxGl from 'mapbox-gl';
import IconPlane from '../assets/icons/IconPlane.svg';;

export default function PopularDestinations({zoom, accessToken}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [position, setPosition] = useState([0, 30]);
  
  useEffect(() => {
    handleMap(position, zoom, accessToken);
    handlePosition();
  }, []);

  function handleMap(posit, zoom, key) {
    mapboxGl.accessToken = key;
    if (map.current) return;
    map.current = new mapboxGl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/andersonpedrosa35/cl1qsnh74000216tk5j0k3msy',
      center: posit,
      zoom
    });
  }

  function handlePosition() {
    const option = {
      enableHighAccuracy: true
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      const center = [pos.coords.longitude, pos.coords.latitude]
      setPosition(center);
    }, (err) => {
      console.error(err)
    }, option)
  }

  return (
    <section className="section-map">
      <div className="map-title">
        <img src={ IconPlane } alt="Popular destinations" width={'40px'}/>
        <h4>Popular destinations & packages</h4>
      </div>
      <hr></hr>
      <div className="container-map">
        <div className="info-map">
          <div className="info-map-item">
            <h5>Lorem ipsum dolor sit</h5>
            <p>-----------</p>
          </div>
          <div className="info-map-item">
            <h5>Lorem ipsum dolor sit</h5>
            <p>------------</p>
          </div>
          <div className="info-map-item">
            <h5>Lorem ipsum dolor sit</h5>
            <p>------------</p>
          </div>
          <div className="info-map-item">
            <h5>Lorem ipsum dolor sit</h5>
            <p>------------</p>
          </div>
          <div className="info-map-item">
            <h5>Lorem ipsum dolor sit</h5>
            <p>------------</p>
          </div>
          <div className="info-map-item">
            <h5>Lorem ipsum dolor sit</h5>
            <p>------------</p>
          </div>
        </div>
        <div ref={mapContainer} className='buttonMapTrackMe'>
          {/* <button
            type='button'
            onClickFunction={handleFlyToPosition}
          >
            Me encontre
          </button> */}
        </div>
      </div>
    </section>
  )
}

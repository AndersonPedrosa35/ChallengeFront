import mapboxGl from 'mapbox-gl';
import React, { useEffect, useState, useRef } from 'react';

export default function PopularDestinations({zoom, accessToken}) {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState([-74.50, 40]);
  
  useEffect(() => {
    handleMap(position, zoom, accessToken);
    handlePosition();
  }, []);

  function handleMap(posit, zoom, key) {
    mapboxGl.accessToken = key;
    const getMap = new mapboxGl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: posit,
      zoom
    });
    setMap(getMap)
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

  function handleFlyToPosition() {
    map.flyTo({
      center: position
    })
  }

  return (
    <section>
      <div></div>
      <div ref={mapContainer} className='buttonMapTrackMe'>
        <button
          type='button'
          onClickFunction={handleFlyToPosition}
        >
          Me encontre
        </button>
      </div>
    </section>
  )
}

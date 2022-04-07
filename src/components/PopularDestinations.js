import React, { useEffect, useRef, useState } from 'react';

export default function PopularDestinations() {
  const ref = useRef(null);
  const [map, setMap] = useState('');

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return (
    <section>
      <div>
        <h3>Popular destinations & packages</h3>
      </div>
      <div ref={ref} />
    </section>
  )
}

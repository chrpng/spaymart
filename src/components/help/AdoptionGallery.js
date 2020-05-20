import React, { useState } from 'react';
import { cats as catsJson } from './catdata.json';
import Cat from './Cat';
import './AdoptionGallery.scss';

const AdoptionGallery = () => {
  const [catsList, ] = useState(catsJson);
  return (
    <div>
      <h1 className="section-title">Meet the Bffs</h1>
      <div className="grid">
        {catsList.map((cat) => 
          <Cat cat={cat} key={cat.name}/>
        )}
      </div>
    </div>
  );
}
 
export default AdoptionGallery;
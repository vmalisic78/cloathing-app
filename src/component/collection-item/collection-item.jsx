import React from 'react'
import './colection-item.scss';

const CollectionItem =  ({id, name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="name">{price}</span>
            </div>
     </div>

)

export default CollectionItem;
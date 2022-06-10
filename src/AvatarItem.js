import React from "react";
import './AvatarItem.css';

function AvatarItem(props) {
    
    return (
        <li>
            <spam className={`Icon Icon-check ${props.selected && 'Icon-check--active'}`}
            onClick={props.onSelect}
            >A</spam>
            <img className={`Imagen ${props.complete && 'AvatarItem-p--complete'}`} src={props.path} alt="img"/>
            <spam className="Icon Icon-delete"
            onClick={props.onDelete}
            >D</spam>
        </li>
    );
}

export {AvatarItem};
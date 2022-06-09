import React from "react";

function AvatarItem(props) {
    return (
        <li>
            <spam></spam>
            <img className="imagen" src={props.path} alt="img" style={{width:"10%"}}/>
            <spam></spam>
        </li>
    );
}

export {AvatarItem};
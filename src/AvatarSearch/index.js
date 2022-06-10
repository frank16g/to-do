import React from "react";

function AvatarSearch({ seacrchValue, setSearchValue}) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };
    return [
        <input 
        className="AvatarSearch"
        placeholder="avatar" 
        onChange={(onSearchValueChange)}
        />,
        <p>{seacrchValue}</p>
    ];
}

export {AvatarSearch};
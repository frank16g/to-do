import React from "react";

function AvatarCounter({total, selected}) {
    return (
        <h2 className="AvatarCounter">Ha seleccionado {selected} de {total} Avatars</h2>
    );
}

export {AvatarCounter};
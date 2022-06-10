import React from "react";

function CreateAvatarButton() {
    const onClickButton = ()=> {
        alert('hi');
    };
    return (
        <button
        className="CreateAvatarButton"
        onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateAvatarButton};
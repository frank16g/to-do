import React from "react";

function AvatarList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {AvatarList};
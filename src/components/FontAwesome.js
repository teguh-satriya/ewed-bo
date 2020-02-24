import React from 'react';

export default (icon) => {
    let faIcon = "fas fa-" + icon;

    return(
        <i class={faIcon}></i>
    );
}
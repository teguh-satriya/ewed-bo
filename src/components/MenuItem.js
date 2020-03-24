import React from 'react';
import FontAwesome from './FontAwesome';

export default ({icon, name, status, level, route}) => {
    let classActive;
    
    if(status == "active") classActive = "nav-item active";
    else classActive = "nav-item";
    
    return(
        (level === "head" &&
            <li class="menu-header">{name}</li>
        )
        (level === "item" && 
            <li class={classActive} >
                <a href={route} class="nav-link"><FontAwesome icon={icon} /><span>{name}</span></a>
            </li>
        )
    );
};
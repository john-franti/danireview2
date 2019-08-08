import React from 'react';

const ListItem = props => {
    const handleClick = () => {
        props.onClickBoom();
    }

    return <li onClick={handleClick}>I am a {props.data}</li>
}

export default ListItem
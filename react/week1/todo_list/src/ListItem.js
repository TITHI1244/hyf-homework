import React from "react";

function ListItem(props) {
    return (
        <li>
            {props.title}, {props.deadline}
        </li>
    )
}

export default ListItem;
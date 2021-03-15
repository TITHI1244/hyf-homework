import React from "react";

function ListItem({title, deadline}) {
    return (
        <li>
            {title}, {deadline}
        </li>
    )
}

export default ListItem;

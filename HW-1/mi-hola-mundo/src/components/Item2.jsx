import { useState, memo } from "react";

function item2({ nombre }) {
    const [likes, setLikes] = useState(0);

    console.log("Render:", nombre);

    return (
        <li>
        {nombre} ❤️ {likes}
        <button onClick={() => setLikes(likes + 1)}>
            Like
        </button>
        </li>
    );
}

export default memo(item2);

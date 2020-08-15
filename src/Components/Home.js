import React from "react";
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();

    return (
        <div>
            <img 
            src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" 
            alt="pizza on cutting board"
            />
        </div>
    )
};

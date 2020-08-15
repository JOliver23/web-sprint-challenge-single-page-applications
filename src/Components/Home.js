import React from "react";
import { useHistory } from 'react-router-dom';
import { HomeBanner, OrderBtn } from "../Styled/StyledComps";

export default function Home() {
    const history = useHistory();

    return (
        <div>
            <HomeBanner 
            src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" 
            alt="pizza on cutting board"
            />
            <OrderBtn className="menu-button " onClick={() => history.push("/pizza")}>Build Your Pizza Here!</OrderBtn>
        </div>
    )
};

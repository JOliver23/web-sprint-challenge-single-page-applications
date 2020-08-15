import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
    const [order, setOrder] =useState([]);

    const [formState, setFormState] = useState({
        name: "",
        address: "",
        size: "",
        special: "",
        toppings: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        address: "",
        size: "",
        special: "",
        toppings: ""
    });

    const formSchema = yup.object().shape({
        name: yup.string().required("Name is required"),
        address: yup.string(),
        size: yup.string().required("Please select a size"),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        olive: yup.boolean(),
        pineapple: yup.boolean(),
        mushroom: yup.boolean(),
        bacon: yup.boolean(),
        special: yup.string()
    });

    return(
    <div>
        
    <form>
        <h2>Build Your Own Pizza</h2>
        <div>
            <label htmlFor="name">
                Name
                <input
                    type="text"
                    id="name"
                    name="name"    
                    value={formState.name}
                    />
                    
            </label>
            
            <br />
            
            <label htmlFor="address">
                    Delivery Address
                    <input 
                        type="text"
                        id="address"
                        name="address"
                        value={formState.address}
                    />
            </label>

            <br />

            <label htmlFor="size">
                Select Size
                <select id="size" name="size">
                    <option value="small">Small 7" </option>
                    <option value="medium">Medium 10"</option>
                    <option value="large">Large 14"</option>
                    <option value="x-large">X-Large 18"</option>
                </select>
            </label>

            <br />

            <label htmlFor="toppings" className="toppings">
                Select Toppings
                <br />

                <input 
                type="checkbox" 
                name="pepperoni"  
                value="pepperoni"/>
                <span>Pepperoni</span>

                <br />

                <input 
                type="checkbox" 
                name="sausage"  
                value="sausage"/>
                <span>Sausage</span>
                
                <br />

                <input 
                type="checkbox" 
                name="olive" 
                value="Olive"/>
                <span>Olive</span>

                <br />
                
                <input 
                type="checkbox" 
                name="bacon" 
                value="bacon"/>
                <span>Bacon</span>

                <br />
                
                <input 
                type="checkbox" 
                name="pineapple"  
                value="pineapple"/>
                <span>Pineapple</span>

                <br />

                <input 
                type="checkbox" 
                name="mushroom"
                value="mushroom"/>
                <span>Mushroom</span>
            </label>
            <br />
            <label htmlFor="special">
                Special Instructions
                <br />

                <textarea 
                    name="special"
                    value={formState.special}
                />
            </label>
            <br />

            <button type="submit">Submit Order</button> 
        </div>
    </form>
</div>
    )
}
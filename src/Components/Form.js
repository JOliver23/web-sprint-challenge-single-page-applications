import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { SForm, MenuDiv} from "../Styled/StyledComps";

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
        name: yup.string().min(2).required("Name is required"),
        address: yup.string().required("add address please"),
        size: yup.string().required("Please select a size"),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        olive: yup.boolean(),
        pineapple: yup.boolean(),
        mushroom: yup.boolean(),
        bacon: yup.boolean(),
        special: yup.string()
    });

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            console.log("valid?", valid)
        })
    }, [formState]);

    const formSubmit = e => {
        e.preventDefault();
        axios
        .post("https://reqres.in/api/users", formState)
        .then(response => {
            setOrder(formState);
            alert(`Order submitted successfully! Thanks, ${formState.name}, your pizza is being prepared!!`);
            setFormState({
                name: "",
                address: "",
                size: "",
                toppings: "",
                special: ""
            });   
        })
    }
        const inputChange = e => {
            e.persist();
            const newOrderData = {
                ...formState,
                [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
            };
            validateChange(e)
            setFormState(newOrderData)
        }

    const validateChange = e => {
        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrors({ ...errors, [e.target.name]: ""})
        })
        .catch(err => {
            console.log("error", err);
            setErrors({ ...errors, [e.target.name]: err.errors[0]})
        });
    };

    return(
    <div>
        
    <SForm onSubmit={formSubmit}>
        <h2>Build Your Own Pizza</h2>
        <MenuDiv>
            <label htmlFor="name">
                Name
                <input
                    type="text"
                    id="name"
                    name="name"    
                    data-cy="name"
                    value={formState.name}
                    onChange={inputChange}
                />
                {errors.name.length > 2 ? <p className="error">{errors.name}</p> : null}    
            </label>
            
            <br />
            
            <label htmlFor="address">
                    Delivery Address
                    <input 
                        type="text"
                        id="address"
                        name="address"
                        value={formState.address}
                        onChange={inputChange}
                    />
            </label>

            <br />

            <label htmlFor="size">
                Select Size
                <select id="size" name="size" value={formState.size} onChange={inputChange}>
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
                value="pepperoni"
                onChange={inputChange}/>
                
                <span>Pepperoni</span>

                <br />

                <input 
                type="checkbox" 
                name="sausage" 
                data-cy="sausage"
                value="sausage"
                onChange={inputChange}/>
                
                <span>Sausage</span>
                
                <br />

                <input 
                type="checkbox" 
                name="olive" 
                value="Olive"
                onChange={inputChange}/>
                
                <span>Olive</span>

                <br />
                
                <input 
                type="checkbox" 
                name="bacon" 
                value="bacon"
                onChange={inputChange}/>
                
                <span>Bacon</span>

                <br />
                
                <input 
                type="checkbox" 
                name="pineapple"  
                value="pineapple"
                onChange={inputChange}/>
                <span>Pineapple</span>

                <br />

                <input 
                type="checkbox" 
                name="mushroom"
                value="mushroom"
                onChange={inputChange}/>
                <span>Mushroom</span>
            </label>
            <br />
            <label htmlFor="special">
                Special Instructions
                <br />

                <textarea 
                    name="special"
                    value={formState.special}
                    onChange={inputChange}
                />
            </label>
            <br />

            <button type="submit">Submit Order</button> 
        </MenuDiv>

    </SForm>

    <p>
        <pre>{JSON.stringify(order, 2, null)}</pre>
    </p>
</div>
    )
}
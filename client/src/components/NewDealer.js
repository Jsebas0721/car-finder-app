import React, { useState, useContext } from "react";
import { DealersContext } from "../context/dealers";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NewDealer() {

    const [errors, setErrors]= useState([]);
    const [dealerData, setDealerData] = useState({
        name: "",
        logo: "",
        location: ""
    })

    const {handleAddDealer} = useContext(DealersContext);

    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        fetch("/dealers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dealerData)
        }).then((resp) => {
            if(resp.ok) {
                resp.json().then((newDealer) => {
                handleAddDealer(newDealer)
                setDealerData({
                    name: "",
                    logo: "",
                    location: ""
                });
                history.push(`/dealers`)
                });
            }else{
               resp.json().then((errorData) => setErrors(errorData.errors)); 
            }

        });
    }

    function handleChange(e){
        setDealerData({
            ...dealerData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="new-dealer-form" onSubmit={handleSubmit}>
            <h2>NEW DEALER FORM: </h2>
            <label>Dealer Name:</label>
            <input
            type="text"
            name="name"
            placeholder="Enter Dealer Name.."
            value={dealerData.name}
            onChange={handleChange}
            /><br/>
            <label>Logo:</label>
            <input
            type="text"
            name="logo"
            placeholder="Enter img URL.."
            value={dealerData.logo}
            onChange={handleChange}
            /><br/>
            <label>Location: </label>
            <input
            type="text"
            name="location"
            placeholder="Enter Dealer Address.."
            value={dealerData.location}
            onChange={handleChange}
            /><br/>
            {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}
            
            <button type="Submit">Add Dealer</button>
        </form>
    )
}

export default NewDealer;
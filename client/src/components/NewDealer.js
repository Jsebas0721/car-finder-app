import React, { useState } from "react";

function NewDealer({onAddDealer}) {

    const [errors, setErrors]= useState({});

    const [dealerData, setDealerData] = useState({
        name: "",
        logo: "",
        location: ""
    })

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
                onAddDealer(newDealer)
                setDealerData({
                    name: "",
                    logo: "",
                    location: ""
                });
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
            <span>Add New Dealer: </span>
            <input
            type="text"
            name="name"
            placeholder="Enter Dealer Name.."
            value={dealerData.name}
            onChange={handleChange}
            />
            <input
            type="text"
            name="logo"
            placeholder="Enter img URL.."
            value={dealerData.logo}
            onChange={handleChange}
            />
            <input
            type="text"
            name="location"
            placeholder="Enter Dealer Address.."
            value={dealerData.location}
            onChange={handleChange}
            />
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
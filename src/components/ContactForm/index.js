import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {validateEmail} from "../../utils/helpers";
import {Snackbar, Alert} from "@mui/material/";

function ContactForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const inputType = e.target.name;
        const inputValue = e.target.value;

        if(inputType === "name") {
            setName(inputValue);
        }else if(inputType === "email") {
            setEmail(inputValue);
        }else if(inputType === "message") {
            setMessage(inputValue);
        }
    }

    const handleBlurShittyInput = (e) => {
        // console.log("Blur event");
        // console.log(e.target);
        e.preventDefault();
        const inputType = e.target.name;
        // console.log(inputType);
        setTimeout(() => {
            if(name === "" && inputType ==="name") {
                setError(true);
                setErrorMessage("Name field is required!");
                return;
            }else if(!validateEmail(email) && inputType === "email") {
                setError(true);
                setErrorMessage("Invalid email!");
                return;
            }else if(message === "" && inputType === "message") {
                setError(true);
                setErrorMessage("Message field is required!");
                return;
            }
        }, 1000)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
        setSubmitted(true);
    }

    const handleErrorClose = (e) => {
        // e.preventDefault();
        setErrorMessage("");
        setError(false);
    }

    const handleSubmitClose = () => {
        setSubmitted(false);
    }
    // console.log("errormessage", errorMessage,"name",  name, "email", email,"message", message);
    return(
        <div className="container">
            <form>
                <h2 style={{marginBottom: 20, fontSize: 40}}>Contact Me</h2>
                <div className="form-group">
                    <label style={{fontSize: 20}} htmlFor="name">Name:</label>
                    <input className="inputStyling form-control" id="name" name="name" type="text" placeholder="Name" value={name} onChange={handleInputChange} onBlur={handleBlurShittyInput}></input>
                </div>
                <div className="form-group">
                    <label style={{fontSize: 20}} htmlFor="email" value={email}>Email:</label>
                    <input className="inputStyling form-control" id="email" name="email" type="text" placeholder="Email" onChange={handleInputChange} onBlur={handleBlurShittyInput}></input>
                </div>
                <div className="form-group">
                    <label style={{fontSize: 20}} htmlFor="message">Message:</label>
                    <textarea className="inputStyling form-control" id="message" name="message" placeholder="Message" value={message} style={{height:300}} onChange={handleInputChange} onBlur={handleBlurShittyInput}></textarea>
                </div>
                    <button className="button btn btn-primary m-3" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <Snackbar open={error} autoHideDuration={6000} onClose={handleErrorClose}>
                <Alert severity="error" onClose={handleErrorClose} sx={{ width: '100%' }}>{errorMessage}</Alert>
            </Snackbar>

            <Snackbar open={submitted} autoHideDuration={6000} onClose={handleSubmitClose}>
                <Alert severity="success" onClose={handleSubmitClose} sx={{width: '100%'}}>Message submitted!</Alert>
            </Snackbar>
        </div>
    )
}

export default ContactForm;
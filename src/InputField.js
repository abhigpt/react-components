import React, {useState} from 'react';

const InputField = () => {
    // react variables
    const [name, setName] = useState('Abi');
    const [email, setEmail] = useState('ab@c.com');
    const [errorMessage, setErrorMessage] = useState('');
    
    
    // prop functions
    const handleNameChange = (event)=>{
        setName(event.target.value);
        console.log("Handle name change called");
    }
    
    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
        console.log("handle email validation called");
    }
    
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      
        if(!regex.test(email)){
            setErrorMessage("Email is invalid");
        }else{
            setErrorMessage("");
        }
    }
    
    const handleEmailValidation = (event)=>{
        handleEmailChange(event);
        validateEmail(email);
    }
    
    const handleSubmit = () => {
        console.log('the name is: ', name);
        console.log('the email is: ', email);
    }
    
    //style
    
    return (
        <div>
            <label>Name:
                <input type="text" value={name}  onChange={handleNameChange} />
            </label>
            <label>Email:
                <input type="text" value={email} onChange={handleEmailValidation}/>
            </label>
                  {errorMessage}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
    
    
}

export default InputField;
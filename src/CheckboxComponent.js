import React, {useState} from "react";

const CheckboxComponent = ()=> {
  // react variables
  const availableOptions = ["Option1", "Option2", "Option3"];
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const handleCheckboxChange = (option)=>{
    if(selectedOptions.includes(option)){
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    }else{
      setSelectedOptions([...selectedOptions, option])
    }
  }
  
  
  
  
  
  
  
  // functions
  
  return (
    <div>
      {availableOptions.map((option)=>{
        return <label key={option}>
          <input type="checkbox" checked={selectedOptions.includes(option)} onChange={()=> handleCheckboxChange(option)}/>
          {option}
        </label>
      })}
      
       <div>
        <h3>Selected Options:</h3>
        {selectedOptions.map((option) => {
          return <p key={option}>{option}</p>;
        })}
      </div>
    </div>
  )  
}

export default CheckboxComponent;
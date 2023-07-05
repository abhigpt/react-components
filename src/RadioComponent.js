import React, {useState} from "react";


const RadioComponent = () => {
  const paymentOptions = ["Credit Card", "PayPal", "Bitcoin"];
  const options = ["Yes", "No"];
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handlePaymentChange = (option) => {
    setSelectedPayment(option);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleFormSubmit = () => {
    console.log("Selected payment:", selectedPayment);
  };

  return (
    <div>
      <h3>Payment Method:</h3>
      {paymentOptions.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="payment"
            checked={selectedPayment === option}
            onChange={() => handlePaymentChange(option)}
          />
          {option}
        </label>
      ))}
      <br />
      <h3>Options:</h3>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="options"
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
          />
          {option}
        </label>
      ))}
      <br />
      <button onClick={handleFormSubmit}>Submit</button>
      <div>
        <h3>Summary Message:</h3>
        <p>You selected: {selectedOption}</p>
      </div>
    </div>
  );
};

export default RadioComponent
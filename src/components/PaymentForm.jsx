// PaymentForm.jsx

import React, { useState } from 'react';

const PaymentForm = ({ selectedPlan, onSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submit the payment information
    onSubmit({
      cardNumber,
      expiryDate,
      cvv,
      selectedPlan,
    });
  };

  return (
    <>
    
    
    
    
    <div className='hero_image'>


  
    <div className="payment-form-container">
      <h2 className='plancardhead'>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            placeholder="123"
          />
        </label>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default PaymentForm;

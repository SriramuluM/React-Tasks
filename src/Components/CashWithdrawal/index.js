import React, { useState } from 'react';
import './index.css'

function CashWithdrawal({ denominationsList }) {
  const [balance, setBalance] = useState(2000);

  
  const handleDenominationClick = (value) => {
    if (balance >= value) {
      const updatedBalance = balance - value;
      setBalance(updatedBalance);
    } else {
      alert("Insufficient balance!");
    }
  };

  return (
    <div className="bg-conatiner">
    <div className="content-container">
      <div className="name-container">
        <p className="profile">s</p>
        <p className="name">Sriram M</p>
      </div>
      <div className="balance-conatiner">
        <p className="para">Your Balance</p>
        <div className="remaining-balance">
          <p className="balance">{balance}</p>
          <p className="in-rupees">In Rupees</p>
        </div>
      </div>
      <p className="heading">Withdraw</p>
      <p className="para">CHOOSE SUM (IN RUPEES)</p>
      <ul className="denominations-list">
        {denominationsList.map((denomination) => (
          <li key={denomination.id} className="denomination-item">
            <button
              type="button"
              className="denomination-button"
              onClick={() => handleDenominationClick(denomination.value)}
            >
              {denomination.value} Rupees
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );





}

export default CashWithdrawal;

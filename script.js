// script.js

let saldo = 40; // Initial laundry package balance in kg
let transactionId = 1; // Transaction counter

document.getElementById('pickupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const pickupWeight = parseInt(document.getElementById('pickupWeight').value);

  if (pickupWeight > saldo) {
    alert('Pickup weight exceeds available balance!');
    return;
  }

  // Update saldo
  saldo -= pickupWeight;

  // Add transaction to history
  const transactionTable = document.getElementById('transactionTable');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${transactionId}</td>
    <td>${new Date().toLocaleDateString()}</td>
    <td>${pickupWeight} kg</td>
    <td>${saldo} kg</td>
  `;

  transactionTable.appendChild(row);

  // Update saldo display
  document.getElementById('saldo').textContent = saldo;

  // Increment transaction ID
  transactionId++;

  // Check if saldo is zero
  if (saldo === 0) {
    alert('Your laundry package balance is now 0 kg. Please refill.');
  }
});

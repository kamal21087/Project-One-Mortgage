window.addEventListener('load', function() {
  const monthlyPayment = localStorage.getItem('monthlyPayment');
  const totalPrincipal = localStorage.getItem('totalPrincipal');
  const totalInterest = localStorage.getItem('totalInterest');
  const totalAmount = localStorage.getItem('totalAmount');

  if (monthlyPayment) document.getElementById('monthlyPayment').innerText = `$${monthlyPayment}`;
  if (totalPrincipal) document.getElementById('totalPrincipalValue').innerText = `$${totalPrincipal}`;
  if (totalInterest) document.getElementById('totalInterestValue').innerText = `$${totalInterest}`;
  if (totalAmount) document.getElementById('totalAmountValue').innerText = `$${totalAmount}`;
});

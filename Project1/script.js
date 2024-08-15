const button = document.getElementById(`Calculate`);
button.addEventListener(`click`, calculate());
function calculate() {

    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const downPayment = parseFloat(document.getElementById('downPayment').value);
    const mortgageTerm = parseFloat(document.getElementById('mortgageTerm').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
     // Calculate monthly payment
     const principal = loanAmount - downPayment;
     const monthlyInterestRate = (interestRate / 100) / 12;
     const numberOfPayments = mortgageTerm;

     const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
     const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

     const monthlyPayment = numerator / denominator;
     
       // Display results
       document.getElementById('monthlyPayment').innerText = `$${monthlyPayment.toFixed(2)}`;

       const totalPrincipal = principal.toFixed(2);
       const totalInterest = (monthlyPayment * numberOfPayments - principal).toFixed(2);
       const totalAmount = (parseFloat(totalPrincipal) + parseFloat(totalInterest)).toFixed(2);

       document.getElementById('totalPrincipal').innerText = `$${totalPrincipal}`;
       document.getElementById('totalInterest').innerText = `$${totalInterest}`;
       document.getElementById('totalAmount').innerText = `$${totalAmount}`;
     

     

    if (isNaN(loanAmount) || isNaN(downPayment) || isNaN(mortgageTerm) || isNaN(interestRate)) {

        alert('Fill out all input fields!')
        console.log(`Your Principal`)

    } else {
        console.log("You did not specify the right loan terms")

    }


disResults(totalPrincipal, totalInterest, totalAmount);

} 

function disResults() {
    document.getElementById(`Results`);
}

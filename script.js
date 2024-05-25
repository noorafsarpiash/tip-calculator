// Select People
const peopleSum = document.querySelector('#peopleSum');

// Increment By One
const pluSum = document.querySelector('#pluSum');
let count = 1;
pluSum.addEventListener("click", () => {
    
    count++;
    peopleSum.innerHTML = count;
});

// Decrement By One
const minusSum = document.querySelector('#minusSum');
minusSum.addEventListener("click", () => {
    if(count > 1 ){
    count--;
    }
    peopleSum.innerHTML = count;
});

// Calculate
const calculator = document.querySelector('#calculator');

calculator.addEventListener("click", () => {
   document.querySelector('.people_per_person').style.display = 'block';

   const totalBill = Number(document.querySelector("#totalBill").value);
   
   const tipMain = Number(document.querySelector("#tipMain").value);

   let total = totalBill * (tipMain / 100);
   let finalPeople = peopleSum.innerHTML;

   document.querySelector("#finalBill").innerHTML = totalBill;
   document.querySelector("#tipAmount").innerHTML = total;
   const taxAmount = document.querySelector("#taxAmount").innerHTML = totalBill * (5 / 100);

   document.querySelector("#totalperperson").innerHTML = 
   ((totalBill + total + taxAmount) / finalPeople
).toFixed(2)
   
});

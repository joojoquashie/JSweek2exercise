//  THE E-COMMERCE CURRENCY & TAX UTILITY
function calculateFinalPrice(basePrice, taxRate) {
    let sum = basePrice + taxRate;
    return sum;
}
let result = calculateFinalPrice(5,7)
console.log(result);

function generateReceiptText (customerName, productName, finalPrice) {
    console.log(`
        Client Name: ${customerName}
        Purchased Item: ${productName}
        Total Payable Amount: ${finalPrice} GHC`);
}
generateReceiptText ("Jojo", "Coke", 13)


// THE STUDENT LEDGER DIRECTORY
const studentDirectory = [
    { id: "001", name: "Theo", hall: "Kwapong", 
        scores: {
            Javascript: 30,
            CSS: 25,
        }, 
        evaluatePerformance: function () {
            const average = (this.scores.Javascript + this.scores.CSS) / 2;
            return `${this.name} has an average grade of ${average}`
        }
    },
    { id: "002", name: "Jojo", hall: "Limann",
         scores: {
            Javascript: 35,
            CSS: 27,
        },
        evaluatePerformance: function () {
            const average = (this.scores.Javascript + this.scores.CSS) / 2;
            return `${this.name} has an average grade of ${average}`
        }    
     },
    { id: "003", name: "Mercy", hall: "Volta",
         scores: {
            Javascript: 50,
            CSS: 15,
        },
        evaluatePerformance: function () {
            const average = (this.scores.Javascript + this.scores.CSS) / 2;
            return `${this.name} has an average grade of ${average}`
        }
     }
];

for (const student of studentDirectory) {
    console.log(student.evaluatePerformance());
}


// THE INSTANT DARK-MODE TOGGLE SWITCH
let mainTitle = document.getElementById("mainTitle");
let button = document.getElementById("themeBtn");

button.addEventListener ("click", function (){
    body.style.backgroundColor = "#222";
    mainTitle.style.color = "white";
    button.textContent = "Dark Mode Engaged"
})

// INTERACTIVE DYNAMIC SIGNUP FORM VALIDATOR
let input = document.getElementById("usernameField");
let livefeed = document.getElementById("liveFeedback");

input.addEventListener ("input", function (event){
    let currentValue = event.target.value;
    livefeed.textContent = `Typing username: ${currentValue}`;
})

usernameField.addEventListener ("mouseover", function(){
    usernameField.style.backgroundColor = "gray"
})

usernameField.addEventListener ("mouseout", function(){
    usernameField.style.backgroundColor = "white"
})

signupForm.addEventListener ("submit", function(event){
    event.preventDefault();

    livefeed.classList.remove("warning");
    usernameField.classList.remove("remove");

    if (usernameField.value.length === 0){
        livefeed.textContent = "Warning: username cannot be blank!";
        // livefeed.classList.add("warning");
        usernameField.classList.add("invalid");
        return;
    }
})
/*A bank evaluates loan applicants based on the following criteria:
1. Credit Score:
o If the credit score is above 750, the loan is automatically approved.
o If the credit score is between 650 and 750, additional checks are performed.
o If the credit score is below 650, the loan is denied.*/

//let creditScore: number = 720

// if (creditScore > 750) {
//     console.log("Loan Approved")

// } else if (creditScore  >=650 &&  creditScore <=750) {
//     console.log("Need Additional checks")

// } else {
//     console.log("Loan Denied")
// } 


/*2. Income:
o For credit scores between 650 and 750, the customer’s income must be at least $50,000
for the loan to be considered.*/


//let income: number = 50000
// if (creditScore  >=650 &&  creditScore <=750) {
   
//    if (income>=50000){
//     console.log("Loan considered")
//    }else{
//     console.log("Loan not considered")
//    }

// } 

/*3. Employment Status:
o If the customer’s income is at least 50,000, the system checks whether the customer is
employed.
o If the customer is unemployed, the loan is denied.*/

// let isEmployed: boolean=true

// if (income>=50000 && isEmployed){

// console.log("Loan accepted status verified")
// }else{
//     console.log("Loan denied customer is unemployed")
// }



/*4. Debt-to-Income Ratio:
o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
o If the DTI ratio is less than 40%, the loan is approved.
o If the DTI ratio is 40% or greater, the loan is denied.*/


//let debtToIncomeRatio: number= 40
// if (isEmployed && debtToIncomeRatio<40){
// console.log("Loan Approved")

// }else{
//   console.log("Loan Denied")  
// }


/* Create common function and then based on below details, print whether user is eligible to get the loan
or not
customerName = "John Doe";
creditScore = 720;
income = 55000.0;
isEmployed = true;
debtToIncomeRatio = 35.0; */

//let customerName: string = "John Doe"
// let isEligible: boolean=true
// if (isEligible){
//     console.log('${customerName} is eligible for loan')
// }else{
//    console.log('${customerName} is not eligible for loan') 
// }

function checkLoanEligibility(
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number,
): boolean {
    if (creditScore > 750) {
        return true
    }
    else if (creditScore >= 650 && creditScore <= 750) {
        if (income >= 50000) {
            if (isEmployed) {
                if (debtToIncomeRatio < 40) {
                    return true
                } else {
                    return false
                }

            } else {
                return false
            }


        } else {
            return false
        }

    } else {
        return false
    }

}
const customerName = "John Doe";
const creditScore = 720;
const income = 55000;
const isEmployed = true;
const debtToIncomeRatio = 35;

const isEligible = checkLoanEligibility(
    creditScore,
    income,
    isEmployed,
    debtToIncomeRatio,

);

if (isEligible) {
    console.log(customerName + " is eligible for the loan.");
} else {
    console.log(customerName + " is not eligible for the loan.");
}

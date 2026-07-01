/*Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions*/

const transaction: number[]=[50000, -2000, 3000, -15000, -200, -300, 4000, -3000] 

let totalCredits: number=0;
let totalDebits: number=0;
let totalAmountCredited: number=0;
let totalAmountDebited: number=0;
//let remainingAmount: number=0;
let suspiciousTransaction: number=0;

for (let i=0; i<transaction.length; i++){
    if (transaction[i]!>0){
        totalCredits++;
        totalAmountCredited += transaction[i]!;
        //remainingAmount += transaction[i]!;
        if (transaction[i]!>10000){
            console.log(`Suspicious credit: ${transaction[i]}`);
            suspiciousTransaction++;
    }
} else 
    {
    totalDebits++;
    totalAmountDebited -= transaction[i]!;
    //remainingAmount += transaction[i]!;
        if (transaction[i]!< -10000){
            console.log(`Suspicious debit: ${transaction[i]}`);
            suspiciousTransaction++;

}
}
}

let remainingAmount = totalAmountCredited -totalAmountDebited


console.log(" Total number of credit transactions:",totalCredits)
console.log(" Total number of debit transactions:",totalDebits)
console.log(" Total Amount Credited:",totalAmountCredited)
console.log(" Total Amount debited:",totalAmountDebited)
console.log(" Total Remaining Amount:",remainingAmount)  
console.log(" Total Suspicious Transactions:",suspiciousTransaction)         
        
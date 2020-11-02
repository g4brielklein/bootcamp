const user = {
    name: 'Gabriel',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type == 'credit') {
        user.balance = user.balance + transaction.value
    }
    
    if (transaction.type == 'debit') {
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction = { type: type, value: 0 }

    for (let transaction of user.transactions) {
        if ((transaction.type == type) && (transaction.value > higherTransaction.value)) {
            higherTransaction = transaction
        }
    }

    console.log(higherTransaction)
}

function getAverageTransactionValue() {
    let sum = 0

    for (let transaction of user.transactions) {
        sum = sum + transaction.value
    }

    const average = (sum / user.transactions.length)

    console.log(average.toFixed(2))
}

function getTransactionsCount() {
    let counter = { credit: 0, debit: 0 }

    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            counter.credit++
        }
        if (transaction.type == 'debit') {
            counter.debit++
        } 
    }

    console.log(counter)
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }
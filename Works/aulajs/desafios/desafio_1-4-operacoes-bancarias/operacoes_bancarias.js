// Crie um programa para realizar operações bancárias na conta de um usuário.

// Comece criando um objeto com o nome do usuário, suas transações e saldo.
// As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).

const user = {
    name: 'Gabriel',
    transactions: [],
    balance: 0
}

// Crie uma função createTransaction para adicionar uma nova transação no array de transações de 
// um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:

function createTransaction(transaction) {
    if (transaction.type == 'credit') {
        user.transactions.push(transaction.value)
        user.balance = user.balance + transaction.value
    }
    if (transaction.type == 'debit') {
        user.transactions.push(transaction.value)
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type) {
    for (let i = 0; i < user.transactions.length; i++) {
        let higherTransaction = user.transactions[i]

        if ((user.transactions[i] > higherTransaction)) {
            higherTransaction = user.transactions[i]
        }
        return user.transaction
    }
}

function getAverageTransactionValue() {
    let sum = 0
    for (let transaction of user.transactions) {
        sum = sum + transaction
    }
    average = (sum / user.transactions.length)
    
    return console.log(average.toFixed(2))
}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

getTransactionsCount() // { credit: 2, debit: 2 }

console.log(user.transactions)

function getTransactionsCount() {
    let counter = {
        credit: 0, 
        debit: 0
    }

    for (let transaction of user.transactions) {
        if (transaction > 1) {
            counter.credit++
        }
        if (transaction.type > 1) {
            counter.debit++
        }
    }
    return console.log(counter)
}


console.log(user.balance) // 60

getHigherTransactionByType('credit') // { type: 'credit', value: 120 }
getHigherTransactionByType('debit') // { type: 'debit', value: 80 }

getAverageTransactionValue() // 70

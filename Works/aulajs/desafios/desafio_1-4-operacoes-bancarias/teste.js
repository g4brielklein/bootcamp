// Crie um programa para realizar operações bancárias na conta de um usuário.

// Comece criando um objeto com o nome do usuário, suas transações e saldo.
const user = {
    name: 'Sabrina',
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

console.log(user)
createTransaction( { type: 'credit', value: 50.5 } )
createTransaction( { type: 'credit', value: 200 } )
createTransaction( { type: 'debit', value: 67.2 } )

function getHigherTransactionByType(type) {
    higherTransaction = { type: type, value: 0 }

    // for (transaction of user.transactions) {
    //     if (transaction.value > higherTransaction.value) {
    //         higherTransaction = transaction
    //     }
    // }

    return higherTransaction
}

console.log(getHigherTransactionByType('credit'))

console.log(user)

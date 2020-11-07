// Desafio 1-4: Aplicação: Operações bancária

// Crie um programa para realizar operações bancárias na conta de um usuário.
// Comece criando um objeto com o nome do usuário, suas transações e saldo.
// As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).
const user = {
    nome: 'Michael',
    transactions: [],
    balance: 0
}

// Crie uma função createTransaction para adicionar uma nova transação no array de transações de um usuário,
// essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:
// {
//     type: 'credit',
//     value: 50.5
// }

function createTransaction(transaction) {
    if (transaction.type == 'credit') {
        user.transactions.push(transaction)
        user.balance = user.balance + transaction.value
    }

    if (transaction.type == 'debit') {
        user.transactions.push(transaction)
        user.balance = user.balance - transaction.value
    }
}

// Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação 
// credit/debit, percorre as transações do usuário e retorna o objeto da transação de maior 
// valor com aquele tipo:

function getHigherTransactionByType(type) {
    let higherTransaction = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherTransaction) {
            higherTransaction = transaction.value
        }
    }

    console.log(higherTransaction)
}

// Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações 
// // de um usuário independente do seu tipo:
function getAverageTransactionValue() {
    let totalTransactions = 0

    for (let transaction of user.transactions) {
        totalTransactions = totalTransactions + transaction.value
    }

    const averageTransaction = totalTransactions / user.transactions.length

    console.log(averageTransaction.toFixed(2))
}

// Crie uma função chamada getTransactionsCount que retorna o número de transações de cada 
// tipo credit/debit, o retorno da função deve ser um objeto e seguir 
// exatamente como o modelo apresentado abaixo:
function getTransactionsCount() {
    let transactionsCount = { credit: 0, debit: 0 }

    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            transactionsCount.credit++
        }

        if (transaction.type == 'debit') {
            transactionsCount.debit++
        }
    }

    console.log(transactionsCount)
}

console.log(user)
createTransaction({ type: 'credit', value: 12.99 })
createTransaction({ type: 'credit', value: 6020.00 })
createTransaction({ type: 'debit', value: 1595.00 })
createTransaction({ type: 'credit', value: 2100.00 })
createTransaction({ type: 'credit', value: 55.12 })
createTransaction({ type: 'debit', value: 50.5 })
createTransaction({ type: 'debit', value: 41.72 })
createTransaction({ type: 'credit', value: 550.00 })
console.log(user)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

getAverageTransactionValue()

getTransactionsCount()
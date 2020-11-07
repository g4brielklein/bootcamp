// Desafio 1-4: Aplicação: Operações bancárias

// Crie um programa para realizar operações bancárias na conta de um usuário.
// Comece criando um objeto com o nome do usuário, suas transações e saldo.
// As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).
const user = {
    name: 'Michael',
    transactions: [],
    balance: 0 
}

// Crie uma função createTransaction para adicionar uma nova transação no array de transações 
// de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:
function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type == 'credit') {
        user.balance = user.balance + transaction.value
    }

    if (transaction.type == 'debit') {
        user.balance = user.balance - transaction.value 
    }
}

// O type pode ser credit para créditos e debit para débitos da conta do usuário.
// Quanto uma transação for do tipo credit ela deve também somar o valor do crédito no saldo (balance) do usuário.
// Se for uma transação do tipo debit ela deve subtrair o valor do débito no saldo (balance) do usuário.

// Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de 
// transação credit/debit, percorre as transações do usuário e retorna o objeto da transação 
// de maior valor com aquele tipo:
function getHigherTransactionByType(type) {
    let higherTransaction = { type: type, value: 0 }

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherTransaction.value) {
            higherTransaction.value = transaction.value
        }
    }

    console.log(higherTransaction)
}

// Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações 
// de um usuário independente do seu tipo:
function getAverageTransactionValue() {
    let sum = 0

    for (let transaction of user.transactions) {
        sum = sum + transaction.value
    }

    const average = sum / user.transactions.length
    
    console.log(average.toFixed(2))
}

// Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit, 
// o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:
function getTransactionsCount() {
    let transactionsCounter = { credit: 0, debit: 0 }

    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            transactionsCounter.credit++
        }

        if (transaction.type == 'debit') {
            transactionsCounter.debit++
        }
    }

    console.log(transactionsCounter) 
}

createTransaction({ type: 'credit', value: 50.5 })
createTransaction({ type: 'debit', value: 9 })
createTransaction({ type: 'credit', value: 15.5 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'credit', value: 51.6 })
createTransaction({ type: 'debit', value: 20 })
createTransaction({ type: 'credit', value: 2400 })
createTransaction({ type: 'credit', value: 50.5 })
createTransaction({ type: 'debit', value: 9 })
createTransaction({ type: 'credit', value: 15.5 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'credit', value: 51.6 })
createTransaction({ type: 'debit', value: 20 })

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')
getAverageTransactionValue()
getTransactionsCount()
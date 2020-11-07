const classA = [
    {
        nome: 'Michael',
        grade: 4.7
    },
    {
        nome: 'Dwight',
        grade: 3
    },
    {
        name: 'Ryan',
        grade: 6.8
    }
]

const classB = [
    {
        nome: 'Jim',
        grade: 9
    },
    {
        nome: 'Pam',
        grade: 10
    },
    {
        nome: 'Oscar',
        grade: 9
    },
    {
        nome: 'Kelly',
        grade: 10
    }
]

function calculateAverage(students) {
    let sumGrades = 0

    for (let i = 0; i < students.length; i++) {
        sumGrades = sumGrades + students[i].grade
    }

    return sumGrades / students.length
}

function sendMessage(average, nameClass) {
    if (average > 5) {
        console.log(`${nameClass} average: ${average.toFixed(2)}. Congrats!`)
    } else {
        console.log(`${nameClass} average: ${average.toFixed(2)}. Not so good :(`)
    }
}

function tagAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendMessageFlunked(student) {
    if (student.flunked) {
        console.log(`${student.nome} flunked!`)
    }
}

function studentsFlunked(students) {
    for (let student of students) {
        tagAsFlunked(student)
        sendMessageFlunked(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'A')
sendMessage(average2, 'B')

studentsFlunked(classA)
studentsFlunked(classB)
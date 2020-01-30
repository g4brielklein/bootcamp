const classA = [
    {
        name: 'Gabriel',
        grade: 9.8
    },
    {
        name: 'Diego',
        grade: 10
    },
    {
        name: 'Mayk',
        grade: 9.6
    },
    {
        name: 'Mais um student',
        grade: 10
    }
]

const classB = [
    {
        name: 'Cleiton',
        grade: 10
    },
    {
        name: 'Robson',
        grade: 10
    },
    {
        name: 'Siclano',
        grade: 0
    },
    {
        name: 'Novo student',
        grade: 5
    }
]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats!`)
    } else {
        console.log(`${turma} average: ${average}. Is not good :(`)
    }
}

function markAsFlunked(student) {
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`${student.name} was flunked!`)
    }
}

function studentsflunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'ClassA')
sendMessage(average2, 'ClassB')

studentsflunkeds(classA)
studentsflunkeds(classB)
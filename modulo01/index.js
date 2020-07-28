const classA = [
    {
        name: 'Gabriel',
        grade: 9.8
    },
    {
        name: 'Maykão',
        grade: 10
    },
    {
        name: 'Diego',
        grade: 10
    },
    {
        name: 'Joe',
        grade: 2
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
        name: 'Matt',
        grade: 2
    },
    {
        name: 'Nathaniel',
        grade: 4
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = (sum / students.length)

    return average
}

function sendMessage(average, classx) {
    if (average > 5) {
        console.log(`${classx} average: ${average}. Congrats!`)
    } else {
        console.log(`${classx} average: ${average}. Not so good.`)
    }
}

function markAsFlunked(student) {
    if (student.grade < 5) {
        student.flunked = true
    } else {
        student.flunked = false
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked`)
    }
}

function FlunkedStudents(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

FlunkedStudents(classA)
FlunkedStudents(classB)
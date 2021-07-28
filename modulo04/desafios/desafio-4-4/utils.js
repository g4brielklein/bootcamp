module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)
    
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
    
        if (month <= 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1
        }

        return age
    },
    date: function(timestamp) {
        const birthDate = new Date(timestamp)
        const year = birthDate.getFullYear() // 1999
        const month = birthDate.getMonth() // 05
        const day = birthDate.getDate()

        return `${year}-${month}-${day}`
    }
}
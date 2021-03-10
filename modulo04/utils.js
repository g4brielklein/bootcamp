module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)
    
        let age = (today.getFullYear() - birthDate.getFullYear())
        const month = today.getMonth() - birthDate.getMonth()
    
        if (month < 0 || month == 0 && today.getDate() < (birthDate.getDate() + 1)) {
            age = age - 1
        }
    
        return age
    },
    date: function(timestamp) {
        let birthDate = new Date(timestamp)

        const year = birthDate.getFullYear()

        let month = `0${birthDate.getMonth() + 1}`.slice(-2)

        let day = `0${birthDate.getDate() + 1}`.slice(-2)

        birthDate =  year + '-' + month + '-' + day

        return birthDate
    }
}
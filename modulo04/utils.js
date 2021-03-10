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
        let month = birthDate.getMonth() + 1
        let day = birthDate.getDate() + 1

        

        birthDate =  year + '-' + month + '-' + day

        return birthDate
    }
}
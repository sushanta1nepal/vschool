function validateIp(attempt){
    const isFourLong = attempt.split(".").length === 4
    const inls
    Range = attempt.split(".").every(segment => {
        return segment >= 0 && segment <= 255
    })
    return isFourLong && inRange
}

console.log(validateIp("172.16.234.333"))
console.log(validateIp("1.1.1.1"))
console.log(validateIp("01.1.1.1"))
console.log(validateIp("123.123.123.123.123"))
console.log(validateIp("1234.23.4.3"))


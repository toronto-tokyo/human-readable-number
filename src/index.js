let one = 'one'
let two = 'two'
let three = 'three'
let four = 'four'
let five = 'five'
let six = 'six'
let seven = 'seven'
let eight = 'eight'
let nine = 'nine'
let ten = 'ten'
let eleven = 'eleven'
let twelve = 'twelve'
let twenty = 'twenty'
let thirty = 'thirty'
let forty = 'forty'
let fifty = 'fifty'
let sixty = 'sixty'
let seventy = 'seventy'
let eighty = 'eighty'
let ninety = 'ninety'
let hundred = 'hundred'

function getNumberLessThirteen (number){
    number = String(number)
    switch(number){
        case '0':
            return ''
        case '1':
            return one
        case '2':
            return two
        case '3':
            return three
        case '4':
            return four
        case '5':
            return five
        case '6':
            return six
        case '7':
            return seven
        case '8':
            return eight
        case '9':
            return nine
        case '10':
            return ten
        case '11':
            return eleven
        case '12':
            return twelve
    }
}
function getNumberLessTwenty(number){
    number = String(number)
    function getTeenStr (str){
        let teenPart = 'teen'
        return (str.slice(0, -2) + teenPart)
    }

    switch (number){
        case '13':
            return getTeenStr(thirty)
        case '14': 
            return `${four}teen`
        case '15': 
            return getTeenStr(fifty)
        case '16': 
            return getTeenStr(sixty)
        case '17':
            return getTeenStr(seventy)
        case '18':
            return getTeenStr(eighty)
        case '19':
            return getTeenStr(ninety)
    }
}
function getNumberLessHundred(number){
    number = String(number)
    let decimal = getNumberLessThirteen
    switch (true) {
        case +number >= 20 && +number < 30:
            return `${twenty} ${decimal(number[1])}`
        case +number >= 30 && +number < 40:
            return `${thirty} ${decimal(number[1])}`
        case +number >= 40 && +number < 50:
            return `${forty} ${decimal(number[1])}`
        case +number >= 50 && +number < 60:
            return `${fifty} ${decimal(number[1])}`
        case +number >= 60 && +number < 70:
            return `${six} ${decimal(number[1])}`
        case +number >= 70 && +number < 80:
            return `${seventy} ${decimal(number[1])}`
        case +number >= 80 && +number < 90:
            return `${eighty} ${decimal(number[1])}`
        case +number >= 90 && +number < 100:
            return `${ninety} ${decimal(number[1])}`
        
    }
}
function getNumberLessThousand(number){
    number = String(number)
    let hundredthPart = number.slice(1)
    function getHundredthPart(hundredthPart){
        if(+hundredthPart < 10) return getNumberLessThirteen(hundredthPart[1])
        if(+hundredthPart >=10 && +hundredthPart < 13) return getNumberLessThirteen(hundredthPart)
        if(+hundredthPart >= 13 && +hundredthPart < 20) return getNumberLessTwenty(hundredthPart)
        return getNumberLessHundred(hundredthPart)
    }
    return `${getNumberLessThirteen(number[0])} ${hundred} ${getHundredthPart(hundredthPart)}`.trim()
}



module.exports = function toReadable (number) {
    if(number === 0) return 'zero'
    if(number <= 12) return getNumberLessThirteen(number)
    if(number > 12 && number < 20) return getNumberLessTwenty(number)
    if(number >= 20 && number < 100) return getNumberLessHundred(number).trim()
    if(number >= 100 && number < 1000) return getNumberLessThousand(number)
}   

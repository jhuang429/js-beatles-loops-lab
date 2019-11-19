// add solution here

function theBeatlesPlay(band,instruments) {
    let output = []
    for (let i=0; i <band.length; i++) {
        output.push(`${band[i]} plays ${instruments[i]}`)
    }
    return output
}

function johnLennonFacts (arr) {
    let output = []
    let counter = 0
    while (counter < arr.length) {
        output.push(`${arr[counter]}!!!`)
        counter ++
    }
    return output
}

function iLoveTheBeatles(num) {
    let output = []
    let counter = num 
    do {
        output.push("I love the Beatles!")
        counter ++  
    } while (counter < 15)
    return output
}
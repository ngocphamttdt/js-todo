function PositionNumber(allNum, num) {
    const allNumStr = allNum.toString()
    const numStr = num.toString()
    let resPosition = -1

    if (allNumStr.includes(numStr) && num > 0) {
        for (let i = 0; i < allNumStr.length; i++) {
            if (allNumStr.substr(i, 2) === numStr) resPosition = i
        }
        return resPosition
    }
    else return resPosition
}

console.log(PositionNumber(1953786, 53));
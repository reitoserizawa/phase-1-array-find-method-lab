// code your solution here

// function superbowlWin (record) {
//     let winYear = record.find(record => record.result === 'W')
//     return winYear.year
// }


function superbowlWin(record) {
    const foundRecord = record.find(records => records.result === "W")
    return foundRecord && foundRecord.year
}

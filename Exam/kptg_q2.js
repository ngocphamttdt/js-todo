const exampleMatrix = [
    [2, 7, 5],
    [3, 1, 1],
    [2, 1, -7],
    [0, 2, 1],
    [1, 6, 8]
];

// returns sum of rows and columns
function getTotals(N) {
    const rowTotals = [];
    const columnTotals = [];

    for (let k = 0; k < N[0].length; k++) {

        columnTotals[k] = 0;
    }

    for (let i = 0; i < N.length; i++) {
        rowTotals[i] = 0;
        for (let j = 0; j < N[0].length; j++) {
            let element = N[i][j];
            rowTotals[i] += element;
            columnTotals[j] += element;
        }
    }

    return {
        rowTotals: rowTotals,
        columnTotals: columnTotals
    };
}

Array.prototype.isBalancedAt = function (index) {
    var self = this;
    var left = self.slice(0, index);
    var right = self.slice(index + 1);

    left = left.reduce(function (prev, curr) {
        return prev + curr
    }, 0);
    right = right.reduce(function (prev, curr) {
        return prev + curr
    }, 0);

    return (left === right);
};

function solution(N) {
    let rowTotals = getTotals(N).rowTotals;
    let columnTotals = getTotals(N).columnTotals;

    let rowsWithBalance = [];
    for (let i = 0; i < rowTotals.length; i++) {
        if (rowTotals.isBalancedAt(i)) {
            rowsWithBalance.push(i);
        }
    }

    let columnsWithBalance = [];
    for (let j = 0; j < columnTotals.length; j++) {
        if (columnTotals.isBalancedAt(j)) {
            columnsWithBalance.push(j);
        }
    }


    if (columnsWithBalance.length > rowsWithBalance.length) {
        return columnsWithBalance.length;
    } else if (columnsWithBalance.length < rowsWithBalance.length) {
        return rowsWithBalance.length;
    } else {

        return 0;
    }
}


var a = solution(exampleMatrix); // (1,1) and (3,1)
console.log(a);
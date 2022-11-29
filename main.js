let arr = [
    {
        id: 1,
        name: 'AZIZs_KABLUK',
        budget: 500000,
        tax: 12,
        prc: 0,
        expensesPerYear: [
            {
                for: 'design',
                total: 60000
            },
            {
                for: 'material',
                total: 70000
            },
            {
                for: 'place',
                total: 120000
            },
        ]
    },
    {
        id: 2,
        name: 'KAMERON_CINEMA',
        budget: 600000,
        tax: 12,
        prc: 0,
        expensesPerYear: [
            {
                for: 'camera',
                total: 90000
            },
            {
                for: 'actors',
                total: 140000
            },
            {
                for: 'electricity',
                total: 50000
            },
        ]
    },
    {
        id: 3,
        name: 'ISKANDARs_ZOO',
        budget: 450000,
        tax: 12,
        prc: 0,
        expensesPerYear: [
            {
                for: 'animals',
                total: 100000
            },
            {
                for: 'cloune',
                total: 15000
            },
            {
                for: 'food',
                total: 70000
            },
        ]
    },
    {
        id: 4,
        name: 'AMINs_SOOOO',
        budget: 800000,
        tax: 12,
        prc: 0,
        expensesPerYear: [
            {
                for: 'house',
                total: 200000
            },
            {
                for: 'cars',
                total: 150000
            },
            {
                for: 'family',
                total: 300000
            },
        ]
    },
    {
        id: 5,
        name: 'AMINs_SOOOO',
        budget: 400000,
        tax: 12,
        prc: 0,
        expensesPerYear: [
            {
                for: 'house',
                total: 200000
            },
            {
                for: 'cars',
                total: 150000
            },
            {
                for: 'family',
                total: 300000
            },
        ]
    },
    {
        id: 6,
        name: 'AMINs_SOOOO',
        budget: 420000,
        tax: 12,
        prc: 0,
        expensesPerYear: [

            {
                for: 'house',
                total: 200000
            },
            {
                for: 'cars',
                total: 150000
            },
            {
                for: 'family',
                total: 300000,
            },
        ]
    },
]

let success = []
let unsuccess = []
let totalYear = 0;


for (let item of arr) {
    item.expensesPerMonth = 0;
    let budgetForMonth = item.budget / 12

    for (let month of item.expensesPerYear) {
        item.expensesPerMonth += month.total / 12
    }
    let taxForMonth = item.tax * budgetForMonth / 100
    item.expensesPerMonth += taxForMonth

    item.prc = Math.round(item.expensesPerMonth * 100 / budgetForMonth)
    let maxTax = 0;
    let minTax = 0;

    maxTax = Math.max(taxForMonth);
    minTax = Math.min(taxForMonth);


    console.log(maxTax, minTax);
    if (item.prc > 70) {
        unsuccess.push(item)
    } else {
        success.push(item)
    }
}











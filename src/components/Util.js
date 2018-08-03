import moment from "moment";

export const eachExpense = expenses => {


    return Object.keys(expenses)
        .map(function(key) {
            return { key: key, value: expenses[key] };
        })
        .sort(function(a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.value.date) - new Date(a.value.date);
        });
};

export const currentUsersExpenses = (eachExpense, currentUser) => {
    return eachExpense.filter(elem => elem.value.uid === currentUser.uid);
};

// expenses in selected month and year
export const expensesinMonthAndYear = (eachExpense, currentUser, selectedMonth, selectedYear) => {
    return eachExpense
        .filter(elem => elem.value.uid === currentUser.uid)
        .filter(elem => new Date(elem.value.date).getFullYear().toString() === new Date().getFullYear().toString())
        .filter(elem => new Date(elem.value.date).getMonth().toString() === selectedMonth);
};

// expenses in a selected date
export const expensesInDate = (eachExpense, currentUser, date) => {
    return eachExpense.filter(elem => elem.value.uid === currentUser.uid && elem.value.date === date);
};

// expenses in current month
export const currentMonthExpenses = (eachExpense, currentUser) => {
    return eachExpense.filter(
        elem => elem.value.uid === currentUser.uid && new Date(elem.value.date).getMonth() === new Date().getMonth()
    );
};

// expenses in a particular month of this year
export const expensesinMonth = (eachExpense, currentUser, MonthNumber) => {
    return eachExpense
        .filter(elem => elem.value.uid === currentUser.uid)
        .filter(elem => new Date(elem.value.date).getFullYear().toString() === new Date().getFullYear().toString())
        .filter(elem => new Date(elem.value.date).getMonth().toString() === MonthNumber);
};

// expense today
export const expensesToday = (eachExpense, currentUser) => {
    return eachExpense
        .filter(
            elem => elem.value.uid === currentUser.uid && new Date(elem.value.date).getMonth() === new Date().getMonth()
        )
        .filter(elem => new Date(elem.value.date).getDate() === new Date().getDate());
};

// expense this week
export const expensesThisWeek = (eachExpense, currentUser) => {
    return eachExpense.filter(
        elem =>
            elem.value.uid === currentUser.uid &&
            moment(elem.value.date, "MM/DD/YYYY").week() === moment(moment(new Date()), "MM/DD/YYYY").week()
    );
};

// expenses Total
export const totalExpense = expenses => {
    if (expenses.length) {
        return expenses.map(elem => Number(elem.value.expense)).reduce((prev, cur) => prev + cur);
    } else {
        return 0;
    }
};

// Total expenses in Each month
export const totalExpensesInEachMonthOfThisYear = (expenses, eachExpense, currentUser) => {
    let expensesOfAllMonthsInThisYear = [];

    for (var i = 0; i <= 11; i++) {
        expensesOfAllMonthsInThisYear.push(totalExpense(expensesinMonth(eachExpense, currentUser, String(i))));
    }
    return expensesOfAllMonthsInThisYear;
};

// Total for each category
export const calculateTotalForAllCategories = expenses => {
    const categories = [
        "Food",
        "Automobile",
        "Entertainment",
        "Clothing",
        "Healthcare",
        "Travel",
        "Shopping",
        "Personal Care",
        "Investment",
        "Gifts & Donations",
        "Bills & Utilities",
        "Others"
    ];

    let categoryTotal = {
        Food: 0,
        Automobile: 0,
        Entertainment: 0,
        Clothing: 0,
        Healthcare: 0,
        Travel: 0,
        Shopping: 0,
        "Personal Care": 0,
        Investment: 0,
        "Gifts & Donations": 0,
        "Bills & Utilities": 0,
        Others: 0
    };

    const totalForACategory = function(expenses, category) {
        let temp = expenses.filter(elem => elem.value.category === category).map(el => Number(el.value.expense));

        var category = category;
        if (temp.length) {
            return (categoryTotal[category] = temp.reduce((prev, cur) => prev + cur));
        } else {
            return (categoryTotal[category] = 0);
        }
    };

    categories.map(category => totalForACategory(expenses, category));

    return categoryTotal;
};

// all categories
export const categories = [
    "Food",
    "Automobile",
    "Entertainment",
    "Clothing",
    "Healthcare",
    "Travel",
    "Shopping",
    "Personal Care",
    "Investment",
    "Gifts & Donations",
    "Bills & Utilities",
    "Others"
];

// colors for each category
export const categoryColors = [
    "#d6a52b",
    "#676666",
    "#f15ccb",
    "#1fab1a",
    "#fb0000",
    "#0d18ff",
    "#252525",
    "#2fd8ff",
    "#e3ff3e",
    "#a620ff",
    "#f97474",
    "#f0d4bb"
];

// retrun border color for each category - daily and monthly view
export const categoryName = cat => {
    switch (cat) {
        case "Food":
            return { borderBottom: "5px solid #d6a52b" };
        case "Automobile":
            return { borderBottom: "5px solid #676666" };
        case "Entertainment":
            return { borderBottom: "5px solid #f15ccb" };
        case "Clothing":
            return { borderBottom: "5px solid #1fab1a" };
        case "Healthcare":
            return { borderBottom: "5px solid #fb0000" };
        case "Travel":
            return { borderBottom: "5px solid #0d18ff" };
        case "Shopping":
            return { borderBottom: "5px solid #252525" };
        case "Personal Care":
            return { borderBottom: "5px solid #2fd8ff" };
        case "Investment":
            return { borderBottom: "5px solid #e3ff3e" };
        case "Gifts & Donations":
            return { borderBottom: "5px solid #a620ff" };
        case "Bills & Utilities":
            return { borderBottom: "5px solid #f97474" };
        case "Others":
            return { borderBottom: "5px solid #f0d4bb" };
        default:
            return { borderBottom: "5px solid orange" };
    }
};

export const categoryIcon = category => {
    switch (category) {
        case "Food":
            return "cutlery";
        case "Automobile":
            return "motorcycle";
        case "Entertainment":
            return "film";
        case "Clothing":
            return "shopping-bag";
        case "Healthcare":
            return "medkit";
        case "Travel":
            return "plane";
        case "Shopping":
            return "shopping-cart";
        case "Personal Care":
            return "user-md";
        case "Investment":
            return "get-pocket";
        case "Gifts & Donations":
            return "gift";
        case "Bills & Utilities":
            return "columns";
        case "Others":
            return "circle-o";
        default:
            return "bars";
    }
};

export const filterExpensesByCriteria = (startDate, endDate, category, expenseFrom, expenseTo, thisUsersExpenses) => {
    var start = new Date(startDate);
    var end = new Date(endDate);
    var currentDate = new Date(start);
    var between = [];
    var filteredExpenses = [];

    while (currentDate <= end) {
        between.push(moment(new Date(currentDate)).format("MM/DD/YYYY"));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    between.forEach(function(elem) {
        return thisUsersExpenses.filter(function(el) {
            return elem === el.value.date ? filteredExpenses.push(el) : "";
        });
    });

    filteredExpenses = filteredExpenses
        .filter(elem => {
            return elem.value.category === category;
        })
        .filter(elem => {
            return Number(elem.value.expense) >= Number(expenseFrom) && Number(elem.value.expense) <= Number(expenseTo);
        });

    return filteredExpenses;
};

// Total loan amount that you need to pay or get paid
export const loanTakenOrGivenAmt = (thisUsersLoans, takenOrGiven) => {
    if (thisUsersLoans.length && takenOrGiven) {
        let loans = thisUsersLoans.filter(
            elem => elem.value.loanType === takenOrGiven && elem.value.status === "Pending"
        );

        return loans.length ? loans.map(elem => Number(elem.value.amount)).reduce((prev, cur) => prev + cur) : 0;
    } else {
        return 0;
    }
};

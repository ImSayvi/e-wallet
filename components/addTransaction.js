let addTransactionButton = document.getElementById('addT')
let newTransactionSection = document.getElementById('newTransaction')
let saveButton = document.getElementById('save')
let cancelButton = document.getElementById('cancel')
const category = document.getElementById('categoryInput')

let greenIndex = 0;
const availableFunds = document.getElementById('availableFunds')
let avFunds = Number(availableFunds.innerText)

saveButton.addEventListener('click', () => {
	const nameTransaction = document.getElementById('nameInput').value
	const amount = document.getElementById('amountInput').value;
	const incomeList = document.createElement('li')
	
	if (category.value == 'income') {
		const greenList = document.getElementById('greenList');
		const nameSpan = document.createElement('span');
        nameSpan.className = 'name';
        nameSpan.innerHTML = `<i class="fa-solid fa-money-bill-1-wave"></i>${nameTransaction}`;

        const incomeAmountSpan = document.createElement('span');
		
        incomeAmountSpan.className = 'incomeAmount ' + greenIndex;
        incomeAmountSpan.innerHTML = `${amount} zł<i class="fa-solid fa-xmark x"></i>`;
		greenIndex++;

		console.log(greenIndex)

        
        incomeList.appendChild(nameSpan);
        incomeList.appendChild(incomeAmountSpan);

        
        greenList.appendChild(incomeList); 

		avFunds+= Number(amount);
		availableFunds.innerText = avFunds;
	}
	
	console.log(avFunds)
	})


function addNewExpense() {
	let nameTransaction = document.getElementById('nameInput').value
	let amountTransaction = document.getElementById('amountInput').value
	let category = document.getElementById('categoryInput')
	let expense = document.createElement('li')
	let spanNameCreate = document.createElement('span')
	let spanExpenseCreate = document.createElement('span')
	let nameExpense = document.createElement('span')
	let costExpense = document.createElement('span')
	let cancelExpenseIcon = document.createElement('i')
	let icon = document.createElement('i')
	let redList = document.getElementById('redList')

	spanNameCreate.classList.add('name')
	spanExpenseCreate.classList.add('expensesAmount')
	cancelExpenseIcon.classList.add('fa-solid', 'fa-xmark', 'x')

	if (category.value == 'shopping') {
		icon.classList.add('fa-solid', 'fa-cart-shopping')
		nameExpense.innerText = nameTransaction
		costExpense.innerText = amountTransaction
		spanNameCreate.append(icon, nameExpense)
		expense.appendChild(spanNameCreate)
		spanExpenseCreate.append(costExpense, cancelExpenseIcon)
		expense.appendChild(spanExpenseCreate)
		redList.appendChild(expense)
	}
	if (category.value == 'fuel') {
		icon.classList.add('fa-solid', 'fa-gas-pump')
		nameExpense.innerText = nameTransaction
		costExpense.innerText = amountTransaction
		spanNameCreate.append(icon, nameExpense)
		expense.appendChild(spanNameCreate)
		spanExpenseCreate.append(costExpense, cancelExpenseIcon)
		expense.appendChild(spanExpenseCreate)
		redList.appendChild(expense)
	}
	if (category.value == 'other') {
		icon.classList.add('fa-solid', 'fa-note-sticky')
		nameExpense.innerText = nameTransaction
		costExpense.innerText = amountTransaction
		spanNameCreate.append(icon, nameExpense)
		expense.appendChild(spanNameCreate)
		spanExpenseCreate.append(costExpense, cancelExpenseIcon)
		expense.appendChild(spanExpenseCreate)
		redList.appendChild(expense)
	}

	if ((newTransactionSection.style.display = 'block')) {
		newTransactionSection.style.display = 'none'
	} else {
		newTransactionSection.style.display = 'block'
	}
}

cancelButton.addEventListener('click', () => {
	if ((newTransactionSection.style.display = 'block')) {
		newTransactionSection.style.display = 'none'
	} else {
		newTransactionSection.style.display = 'block'
	}
})
addTransactionButton.addEventListener('click', () => {
	if ((newTransactionSection.style.display = 'none')) {
		newTransactionSection.style.display = 'block'
	} else {
		newTransactionSection.style.display = 'none'
	}
})


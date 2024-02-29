const addTransactionButton = document.getElementById('addT')
const newTransactionSection = document.getElementById('newTransaction')
const saveButton = document.getElementById('save')
const cancelButton = document.getElementById('cancel')

const category = document.getElementById('categoryInput')



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
        incomeAmountSpan.className = 'incomeAmount';
        incomeAmountSpan.innerHTML = `${amount} zł<i class="fa-solid fa-xmark x"></i>`;

        
        incomeList.appendChild(nameSpan);
        incomeList.appendChild(incomeAmountSpan);

        
        greenList.appendChild(incomeList);

        console.log(greenList);
		console.log(incomeList);
	}
})

addTransactionButton.addEventListener('click', () => {
	if ((newTransactionSection.style.display = 'none')) {
		newTransactionSection.style.display = 'block'
	} else {
		newTransactionSection.style.display = 'none'
	}
})

saveButton.addEventListener('click', () => {
	if (category.value !== 'none') {
	}

	if ((newTransactionSection.style.display = 'block')) {
		newTransactionSection.style.display = 'none'
	} else {
		newTransactionSection.style.display = 'block'
	}
})

cancelButton.addEventListener('click', () => {
	if ((newTransactionSection.style.display = 'block')) {
		newTransactionSection.style.display = 'none'
	} else {
		newTransactionSection.style.display = 'block'
	}
})

let addTransactionButton = document.getElementById('addT')
let newTransactionSection = document.getElementById('newTransaction')
let saveButton = document.getElementById('save')
let cancelButton = document.getElementById('cancel')
const category = document.getElementById('categoryInput')
const redList = document.getElementById('redList')

 let index = 0;
 

const fundsArray = [];
const availableFunds = document.getElementById('availableFunds')
//let avFunds = Number(availableFunds.innerText)

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
        incomeAmountSpan.className = 'incomeAmount ' + index;
        incomeAmountSpan.innerHTML = `${amount} zł<i class="fa-solid fa-xmark x"></i>`;
		index++;
        incomeList.appendChild(nameSpan);
        incomeList.appendChild(incomeAmountSpan);
        greenList.appendChild(incomeList); 

		fundsArray.push(Number(amount))
		// avFunds+= Number(amount);
		// availableFunds.innerText = avFunds;
	}else if (category.value!='none'){
		const nameSpan = document.createElement('span');
        nameSpan.className = 'name';

		if (category.value == 'shopping'){nameSpan.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>${nameTransaction}`;}
		if (category.value == 'fuel'){nameSpan.innerHTML = `<i class="fa-solid fa-gas-pump"></i>${nameTransaction}`;}
		if (category.value == 'other'){nameSpan.innerHTML = `<i class="fa-solid fa-note-sticky"></i>${nameTransaction}`;}
		
		const outcomeAmountSpan = document.createElement('span');
		outcomeAmountSpan.className = 'expensesAmount ' + index;
		outcomeAmountSpan.innerHTML = `${amount} zł<i class="fa-solid fa-xmark x"></i>`;
		index++;
		incomeList.appendChild(nameSpan);
        incomeList.appendChild(outcomeAmountSpan);
        redList.appendChild(incomeList); 

		fundsArray.push(Number(-amount))
		console.log(fundsArray)
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
addTransactionButton.addEventListener('click', () => {
	if ((newTransactionSection.style.display = 'none')) {
		newTransactionSection.style.display = 'block'
	} else {
		newTransactionSection.style.display = 'none'
	}
})

//tablica z funduszem ma kwote indeksowana wedle zmiennej index w liscie [wystarczy usunac odpowiadajacy index]
//podsumowanie kwot za pomoca metody czyzaka [dodawanie wszystkich elementow tablicy]
//usuwanie tresci z formularzy

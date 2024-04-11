let addTransactionButton = document.getElementById('addT')
let newTransactionSection = document.getElementById('newTransaction')
let saveButton = document.getElementById('save')
let cancelButton = document.getElementById('cancel')
const category = document.getElementById('categoryInput')
const redList = document.getElementById('redList')


 let index = 0;
 

const fundsArray = [];
let availableFunds = document.getElementById('availableFunds')
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
        incomeAmountSpan.className = 'incomeAmount ' + index;
        incomeAmountSpan.innerHTML = `${amount} zł<i class="fa-solid fa-xmark x"></i>`;
		index++;
        incomeList.appendChild(nameSpan);
        incomeList.appendChild(incomeAmountSpan);
        greenList.appendChild(incomeList); 

		fundsArray.push(Number(amount))
		
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

	let sum=0;
	for (let i = 0; i < fundsArray.length; i++) {
        sum += fundsArray[i];
		availableFunds.innerText = sum;
    }
	console.log(sum)

	
const xButton = document.querySelector('.fa-solid.fa-xmark.x')
xButton.addEventListener('click', () => {
	console.log("ok")
	xButton.parentNode.parentNode.remove();
})
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


//tablica z funduszem ma kwote indeksowana wedle zmiennej index w liscie [wystarczy podmienic odpowiadajacy index na 0 (żeby nie zminily sie pozostale numery indeksow)]
//do usuniecia wszystkiego uzyc querySelectorAll
//usuwanie tresci z formularzy

const addTransactionButton = document.getElementById('addT')
const newTransactionSection = document.getElementById('newTransaction')
const saveButton = document.getElementById('save')
const cancelButton = document.getElementById('cancel')
const nameTransaction = document.getElementById('nameInput')
const amountTransaction = document.getElementById('amountInput')
const category = document.getElementById('categoryInput')

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

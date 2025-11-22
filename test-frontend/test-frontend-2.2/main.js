var button = document.getElementById('reg-submit-button')

//Поиск элементов для чтения содержимого
var emailInputValue = document.getElementById('email')
var phoneInputValue = document.getElementById('phone')
var textInputValue = document.getElementById('text')
var formSuccessMessage = document.getElementById('form-success')
var emailErrorMessage = document.getElementById('email-error')
var phoneErrorMessage = document.getElementById('phone-error')
var textErrorMessage = document.getElementById('text-error')

//Регулярные выражения
var emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
var phoneRegex = /^[\d\s\-()]{10,40}$/

button.addEventListener('click', function (event) {
	event.preventDefault()
	emailErrorMessage.classList.add('hidden')
	phoneErrorMessage.classList.add('hidden')
	textErrorMessage.classList.add('hidden')
	formSuccessMessage.classList.add('hidden')

	if (emailRegex.test(emailInputValue.value)) {
		if (phoneRegex.test(phoneInputValue.value)) {
			if (textInputValue.value.trim().length > 1) {
				textErrorMessage.classList.add('hidden')
				formSuccessMessage.classList.remove('hidden')
				formSuccessMessage.textContent =
					'Форма заполнена корректно и отправлена ✓'
				emailInputValue.value = ''
				phoneInputValue.value = ''
				textInputValue.value = ''
			} else {
				phoneErrorMessage.classList.add('hidden')
				textErrorMessage.classList.remove('hidden')
				textErrorMessage.textContent = 'Поле для текста не может быть пустым'
			}
		} else {
			emailErrorMessage.classList.add('hidden')
			phoneErrorMessage.classList.remove('hidden')
			phoneErrorMessage.textContent =
				'Введите номер телефона, используя только цифры, пробелы, дефисы и скобки. Общая длина номера должна быть от 10 до 40 символов.'
		}
	} else {
		emailErrorMessage.classList.remove('hidden')
		emailErrorMessage.textContent =
			'Введите корректный email в формате example@domain.com.'
	}
})

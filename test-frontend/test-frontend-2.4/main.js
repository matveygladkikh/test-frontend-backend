var nameElement = document.getElementById('nameInput')
var emailElement = document.getElementById('emailInput')
var passwordElement = document.getElementById('passwordInput')
var undoButtonElement = document.getElementById('buttonUndo')

var formHistory = []
console.log(formHistory)

var formDefault = {name: '', email: '', password: ''}
formHistory.push(formDefault)

// Можно добавить проверку записей, чтобы не сохранялся один и тот же state
function saveHistory(){
  var current ={
    name: nameElement.value,
    email: emailElement.value,
    password: passwordElement.value}

  formHistory.push(current)
  console.log(formHistory)
}

/* Если нужно чтобы отменялась каждая введенная буква, то можно поменять
* событие change на input */

nameElement.addEventListener('change', saveHistory)
emailElement.addEventListener('change', saveHistory)
passwordElement.addEventListener('change', saveHistory)

undoButtonElement.addEventListener('click', (event)=> {
  event.preventDefault()

  if(formHistory.length <= 1) return

  formHistory.pop()

  var data = formHistory[formHistory.length - 1]

  console.log(data.name, data.email,data.password)

  nameElement.value = data.name
  emailElement.value = data.email
  passwordElement.value = data.password
})


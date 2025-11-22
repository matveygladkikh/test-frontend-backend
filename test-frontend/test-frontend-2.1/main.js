var button = document.getElementById('button')
var buttonAdd = document.getElementById('button--add')
var catalog = document.getElementById('catalog')

button.addEventListener('click', function () {
	if (catalog.classList.contains('grid-catalog')) {
		catalog.classList.remove('grid-catalog')
		catalog.classList.add('list')
	} else {
		catalog.classList.remove('list')
		catalog.classList.add('grid-catalog')
	}
})

buttonAdd.addEventListener('click', function () {
	var xhr = new XMLHttpRequest()
	xhr.open('GET', 'urladdress', true)

	xhr.onload = function () {
		if (xhr.status === 200 && xhr.status === 300) {
			var data = JSON.parse(xhr.responseText)
			data.foreach(function (item) {
				var div = document.createElement('div')
				div.className = 'item'
				div.textContent = item.name
				catalog.appendChild(div)
			})
		} else {
			console.log('Ошибка запроса', xhr.responseText)
		}
	}

	xhr.onerror = function () {
		console.error('Ошибка сети')
	}

	xhr.send()

	/* 
	 Проверка на добавление элемента в дом дерево
	 var div = document.createElement('div')
	 div.className = 'item'
	 div.textContent = 'Товар'
	 catalog.appendChild(div) */
})

function setPlusIcon() {
	var liElements = document.getElementsByTagName('li')

	for (var i = 0; i < liElements.length; i++) {
		var liElement = liElements[i]

		var listItem = liElement.getElementsByTagName('ul')[0]

		if (listItem) {
			liElement.insertBefore(
				document.createTextNode('[+] '),
				liElement.firstChild
			)
		}

		var links = liElement.getElementsByTagName('a')
		for (var j = 0; j < links.length; j++) {
			links[j].onclick = aClick
		}
	}
}

function aClick(event) {
	var target = event.target
	var parentOfTarget = target.parentElement
	var list =
		parentOfTarget.parentElement.tagName.toLowerCase() !== 'ul'
			? 'Ссылка не имеет вложенного списка'
			: parentOfTarget.parentElement

	console.log(
		'Клик сделан по - ',
		target,
		'родителский <li> элемент - ',
		parentOfTarget,
		'вложенный список - ',
		list
	)

	if (list === 'Ссылка не имеет вложенного списка') {
		return true
	}

	event.preventDefault()
}

setPlusIcon()

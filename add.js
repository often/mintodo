export let add = (
  key,
  toDo,
  removalMode,
  toDos,
  isNew = false
) => {
  let date = new Date(Number(key)).toLocaleString()
  let text
  
  if (isNew) text = toDo.value
  else text = localStorage.getItem(key)
  
  let div = document.createElement('div')
  let h2 = document.createElement('h2')
  h2.setAttribute('contenteditable', true)
  h2.textContent = text

  h2.addEventListener('input', () => {
    localStorage.setItem(key, h2.textContent)
  })

  h2.addEventListener('paste', event => {
    event.preventDefault()

    let data = event.clipboardData.getData('text/plain')
    document.execCommand('insertText', false, data)
  })

  div.addEventListener('click', () => {
    if (removalMode.checked) {
      if (confirm('proceed with removal?')) {
        localStorage.removeItem(key)
        div.remove()
      }
    }
  })

  let p = document.createElement('p')
  p.textContent = date

  localStorage.setItem(key, text)
  div.append(h2)
  div.append(p)
  toDos.prepend(div)
  
  if (isNew) toDo.value = ''
}

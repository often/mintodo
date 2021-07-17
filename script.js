import {add} from './add.js'

let form = document.querySelector('form')
let [toDo, removalMode] = document.querySelectorAll('input')
let toDos = document.querySelector('div')
let keys = Object.keys(localStorage).sort()

for (let key of keys) add(
  key,
  toDo,
  removalMode,
  toDos
)

form.addEventListener('submit', event => {
  event.preventDefault()
  
  add(
    Date.now(),
    toDo,
    removalMode,
    toDos,
    true
  )
})

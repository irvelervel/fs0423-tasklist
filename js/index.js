const form = document.getElementById('tasklist')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  // ora abbiamo fermato i comportamenti di default
  // recupero il valore dell'input
  const mainInput = document.getElementById('main-input')
  const newTaskText = mainInput.value

  // ora creo dinamicamente il "pezzo" di HTML che aggiungerò alla pagina
  const newTaskCard = document.createElement('div') // <div></div>
  newTaskCard.classList.add('task-element')
  newTaskCard.innerHTML = `
    <span onclick="markAsDone(event)">${newTaskText}</span>
    <button onclick="deleteTask(event)">ELIMINA</button>
  `
  // newTaskCard ora esiste, ma non è ancora nella pagina
  // lo appendiamo alla sezione "tasks"
  const tasks = document.getElementById('tasks')
  tasks.appendChild(newTaskCard)

  // ALTERNATIVE SENZA USARE ONCLICK NELL'INNERHTML
  //   newTaskCard.querySelector('span').addEventListener('click', function (e) {
  //     markAsDone(e)
  //   })

  //   newTaskCard.querySelector('button').addEventListener('click', function (e) {
  //     deleteTask(e)
  //   })
})

const markAsDone = function (e) {
  console.log('segno completato cosa?')
  console.log(e.target) // l'elemento su cui avete cliccato
  const clickedSpan = e.target
  clickedSpan.style.textDecoration = 'line-through'
}

const deleteTask = function (e) {
  console.log(e.target)
  e.target.parentElement.remove()
}

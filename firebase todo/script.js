import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js'
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js'

const appSetting = {
    databaseURL : "https://to-do-app-16d6b-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSetting)
const toDoDB = getDatabase(app)
const toDoList = ref(toDoDB, 'toDo')
const btn = document.getElementById('btn')
const show = document.getElementById('tasks')

btn.addEventListener('click', function add(){
    let inputBox = document.getElementById('inputTask')
    dbUpdate(inputBox)
    inputBox.value = ""
}
)
onValue(toDoList, function(snapshot){
    let array = Object.values(snapshot.val())
    show.innerHTML = ""
    for(let i=0; i<array.length; i++){
        let task = array[i]
        listShow(task)
    }
}
)
function dbUpdate(inputBox){
    push(toDoList, inputBox.value)
}
function listShow(task){
    show.innerHTML +=  `<li>${task}</li>`
}

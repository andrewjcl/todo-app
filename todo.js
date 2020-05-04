const todos = [{
    text: 'Brush the cat',
    completed: true
}, {
    text: 'Mow the lawn',
    completed: true
}, {
    text: 'Clean Bedroom',
    completed: true
}, {
    text: 'Go grocery shopping',
    completed: false
}, {
    text: 'Buy standing desk from IKEA',
    completed: false
}]

const filterByTerm = function(array, searchTerm) {
    return array.filter(function(e) {
        return e.text.toLowerCase().includes(searchTerm.toLowerCase())
    })
}

let inputString = ''

const renderTodos = function(arrayTodos) {
    document.querySelector('#todo-div').innerHTML = ''

    let filteredArray = filterByTerm(arrayTodos, inputString)

    filteredArray.forEach(function(todo) {
        let newParagraph = document.createElement('p')
        newParagraph.textContent = todo.text
        document.querySelector('#todo-div').appendChild(newParagraph)
    })
}

// NOT USED
const getCompletedTodos = function(array) {
    return array.filter(function(e) {
        return e.completed
    })
}

// NOT USED
const getNotCompletedTodos = function(array) {
    return array.filter(function(e) {
        return !e.completed
    })
}

const sortTodosCompleted = function(array) {
    array.sort(function(a, b) {
        if (a.completed && !b.completed) {
            return 1
        } else if (!a.completed && b.completed) {
            return -1
        } else {
            return 0
        }
    })
}

document.querySelector('#text-input').addEventListener('input', function(e) {
    inputString = e.target.value
    renderTodos(todos)
})

// ////////// Begin webpage

sortTodosCompleted(todos)

renderTodos(todos)

// const newHR  = document.createElement('hr')
// document.querySelector('#todo-div').appendChild(newHR)

// renderTodos(getCompletedTodos(todos))

// const newHR2  = document.createElement('hr')
// document.querySelector('#todo-div').appendChild(newHR2)

// renderTodos(getNotCompletedTodos(todos))



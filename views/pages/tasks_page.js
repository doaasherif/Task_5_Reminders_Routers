let tasksArr = []

export function tasksPage(){
    let myTemp = `
    <section class="bg-info d-flex flex-column align-content-center p-5">
        <input placeholder="Create Task" onblur="${createTask(event)}" class="cD0-createTask uD0-dash-br w-75 m-auto cD0-gray fD0-arial fD0-size-35 p-4">
    </section>
    `
    return myTemp
}

function createTask(event){
    tasksArr.push(event.target.value)
}
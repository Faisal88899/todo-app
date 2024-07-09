const inputtask = document.getElementById("task-input");
const taskform = document.getElementById("task-form");
const tasklist = document.getElementById("task-list");


taskform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const tasktitle = inputtask.value;
    console.log(tasktitle);
    if(tasktitle === ""){
        alert("please enter your task")
    }else{
        const listitem = document.createElement("li");
        listitem.innerHTML = tasktitle;
        tasklist.append(listitem);

        let span = document.createElement("span");
        span.innerHTML = '&times;';
        listitem.appendChild(span)
        inputtask.value = "";
        save_Data()
    }
})


tasklist.addEventListener("click",(e)=>{
    if (e.target.tagName == "LI"){
        e.target.classList.toogle("checked")
        save_Data()
    }
    if(e.target.tagName == "SPAN"){
        const li = e.target.parentElement;
        li.remove()
        save_Data()
    }
})

const show_Data = () =>{
    tasklist.innerHTML =localStorage.getItem("listitem")
}
const  save_Data = () =>{
    localStorage.setItem("listitem",tasklist.innerHTML)
}

show_Data()

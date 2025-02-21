const input_box = document.getElementById("input");
const task_list = document.getElementById("task-list");


function addTask() {
    if(input_box.value===''){
        alert("Please enter a task");
    } else {

        let li =document.createElement("li");
        li.innerHTML = input_box.value;
        task_list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);     

    
    
    }
    input_box.value = '';
}
task_list.addEventListener('click', function(e){
if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
}
else
    if(e.target.tagName === 'SPAN'){
        e.target.parentNode.remove();
        }
});


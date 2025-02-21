ateElement('li');
        li.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement('a');
        link.className = 'delete-item';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);

        taskList.appendChild(li);

        taskInput.value = '';
    }

    function removeTask(e) {
        if (e.target.parentElement.classList.contains('delete-item')) {
            if (confirm('Are you sure?')) {
                e.target.parentElement.parentElement.remove();
            }
        }
    }
});
let btnCreate = document.getElementById('create-btn')
let toDoList = document.querySelector('.to-do-list')



btnCreate.addEventListener("click", function(){
    let card = document.createElement('div');
    let inputValue = document.getElementById('input').value;
    card.className = "to-do-card";
    card.innerHTML = `<span>${inputValue}</span>             
                        <div class="btn">
                            <button>Done</button>
                            <button>Delete</button>
                        </div>`
    if (inputValue.trim().length !== 0) toDoList.append(card);
});


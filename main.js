const btnCreate = document.getElementById('create-btn')
const toDoList = document.querySelector('.to-do-list')
const btnDone = document.querySelector('.btn-done')
const btnDelet = document.querySelector('.btn-delet')



btnCreate.addEventListener("click", function(){
    let card = document.createElement('div');
    let inputValue = document.getElementById('input').value;
    card.className = "to-do-card";
    card.innerHTML = `<span>${inputValue}</span>             
                        <div class="btn">
                            <button class="btn-done">Done</button>
                            <button class="btn-delet">Delete</button>
                        </div>`
    if (inputValue.trim().length !== 0) toDoList.append(card);
});


btnDelet.addEventListener("click", function(){ 
    btnDelet.parentElement.parentElement.remove()
});
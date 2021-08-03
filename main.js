const btnCreate = document.getElementById('create-btn')
const toDoList = document.querySelector('.to-do-list')
const btnsDone = document.getElementsByClassName('btn-done')
const btnsDelet = document.getElementsByClassName('btn-delet')



btnCreate.addEventListener("click", function(){
    let card = document.createElement('div');
    let inputValue = document.getElementById('input').value;
    card.className = "to-do-card";
    card.innerHTML = `<span>${inputValue}</span>             
                        <div class="btn">
                            <button class="btn-done">Done</button>
                            <button class="btn-delet">Delete</button>
                        </div>`
    if (inputValue.trim().length !== 0) {
        toDoList.append(card);
        eventDelet()
        eventDone()
    }
});

const eventDelet = () => {
    for (let i = 0; i < btnsDelet.length; i++) {
        btnsDelet[i].addEventListener("click", function(){ 
            btnsDelet[i].parentElement.parentElement.remove()
        });
    }
};

const eventDone = () => {
    for (let i = 0; i < btnsDone.length; i++) {
        btnsDone[i].addEventListener("click", function(){ 
            btnsDone[i].parentElement.parentElement.classList.toggle("done")
        });
    }
};

eventDelet();
eventDone();
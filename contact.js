document.addEventListener("DOMContentLoaded", function(){

const addBtn = document.getElementById("add-new");
const showAddForm = document.getElementById("add-contact");

showAddForm.style.display = "none";

addBtn.addEventListener("click", 
    function showingForm(){
        if(showAddForm.style.display==="none"){
            showAddForm.style.display="block";
        }else{
            showAddForm.style.display="none";
        }
    }      
)
});

const form = document.getElementById("adding-form");
const userInfo = document.getElementById("user-info");

form.addEventListener("submit", function(event){
    event.preventDefault();
    //get contact info from form
    const profile = document.getElementById("image-user").value;
    const name = document.getElementById("user-name").value;
    const number = document.getElementById("user-number").value;
    const email = document.getElementById("user-email").value;

    //making a contact obj

    const newContact = {
        profilePic : profile,
        name: name,
        number: number, 
        email: email
    };

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.push(newContact);

    contacts.sort((a, b) => a.name.localeCompare(b.name));

    localStorage.setItem("contacts", JSON.stringify(contacts));
    showUserInfo();
});

function showUserInfo() {
    let contacts = JSON.parse(localStorage.getItem("newContact")) || [];

    userInfo.innerHTML = "";

    contacts.forEach(contact=> {
        userInfo.innerHTML += `
            <div class="flex items-center px-6 gap-10 py-3 my-8 border-b border-gray-400">
                <img src="${contact.profilePic}" class="w-24 h-24 rounded-full mb-4 object-cover"/>
                <span class="text-zinc-500 text-2xl">${contact.name}</span>
                <span class="text-zinc-500 text-xl">${contact.number}</span>
            </div>`
    });
}

console.table(showUserInfo())
window.onload = showUserInfo();

localStorage.clear();

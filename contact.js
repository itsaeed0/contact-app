
document.addEventListener("DOMContentLoaded", function(){

const addBtn = document.getElementById("add-new")
const showAddForm = document.getElementById("add-contact");

showAddForm.style.display = "none";

addBtn.addEventListener("click", 
    function showingForm(){
        console.log("Button clicked!");
        if(showAddForm.style.display==="none"){
            showAddForm.style.display="block";
        }else{
            showAddForm.style.display="none";
        }
    }
        
)


});
// Contact Form Validation

function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

if(name==="" || email==="" || message===""){
    alert("Please complete all required fields.");
    return false;
}

alert("Thank you! Your message has been submitted.");

return true;

}

// Search Books

function searchBooks(){

let input=document.getElementById("searchInput").value.toLowerCase();

let rows=document.querySelectorAll("#bookList tr");

rows.forEach(function(row){

let text=row.innerText.toLowerCase();

if(text.includes(input)){

row.style.display="";

}
else{

row.style.display="none";

}

});

}
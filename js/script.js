var BookMarkNameInput =document.getElementById("BookMarkNameInput");
var SiteURLInput = document.getElementById("SiteURLInput");
var inputs;
if(localStorage.getItem("inputs") == null){
   inputs = [];
}else{
   inputs = JSON.parse(localStorage.getItem("inputs"));
   display(inputs);
}
function submitUrl(){
    if(BookMarkNameInput.classList.contains("is-valid")&&
    SiteURLInput.classList.contains("is-valid"))
    {
        var UrlInputs ={
            BookName: BookMarkNameInput.value,
            SiteURLInput: SiteURLInput.value,
        }
        inputs.push(UrlInputs);
        console.log(inputs);
        display(inputs);
        localStorage.setItem("inputs", JSON.stringify(inputs));
        display(inputs);
    }
    else{
        alert("no data valid")
    }
    
clear()
}
function display(arr){
    var cartona = "";
    for(var i=0; i<arr.length; i++){
        cartona+=
        `<tr>
        <th scope="row">${i+1}</th>
        <td>${arr[i].BookName}</td>
        <td><button class="btn visit d-flex align-items-center justify-content-center py-0 "><i class="fa-solid fa-eye"></i><p class="mt-3 ms-3">Visit</p</button></td>
        <td><button onclick="deleteinput()" class="btn btn-danger d-flex align-items-center justify-content-center py-0"><i class="fa-solid fa-trash-can"></i><p class="mt-3 ms-3">Delete</p</button></td>
      </tr>`
    }
    document.getElementById("demo").innerHTML = cartona;
}
function clear(){
    BookMarkNameInput.value = null;
    SiteURLInput.value = null;    
}
function deleteinput(deletedIndex){
    inputs.splice(deletedIndex,1);
    display(inputs);
    localStorage.setItem("inputs", JSON.stringify(inputs));
}
function validateUrl(element){

    var regex ={
        SiteURLInput : /https?:\/\/(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?([\/a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=]*)?/,
        BookMarkNameInput:/^[A-Z][a-z]{2,10}$/,
    } 
    if(regex[element.id].test(element.value) == true){
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        element.nextElementSibling.classList.add("d-none");
    }else{
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
        element.nextElementSibling.classList.remove("d-none");
    }
   
}
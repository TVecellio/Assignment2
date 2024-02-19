window.onload=function(){
    loading();
    console.log("part2");
    document.getElementById("btn").addEventListener("click", function(){
        console.log("part1");
         load();
     });
     document.getElementById("errorbtn").addEventListener("click", function(){
        const errId = document.getElementById("error");
        errId.style.display = "none";
        document.getElementById("errorMessage").textContent = "";
        document.getElementById("errorMessage2").textContent = "";
     });
};
function loading() {
    const imgID = document.getElementById("loading");
    imgID.style.display="block";
    const listId = document.getElementById("loaded");
    listId.style.display = "none";
    const errId = document.getElementById("error");
    errId.style.display = "none";
}
function load() {
    const imgID = document.getElementById("loading");
    imgID.style.display = "none";
    const listId = document.getElementById("loaded");
    listId.style.display = "block";
}

function errorName() {
    const errId = document.getElementById("error");
    errId.style.display = "block";
    var error = "Name is required field";
    document.getElementById("errorMessage").textContent = error;
    return false;
}

function ageError() {
    const errId = document.getElementById("error");
    errId.style.display = "block";
    var error = "Please enter age between 1 and 100";
    document.getElementById("errorMessage2").textContent = error;
    return false;
}

function validateForm(){
    var name = document.getElementById("name").value;
    console.log(name);
    var age = document.getElementById("age").value;
    var ages = parseInt(age);
    console.log(age);
    if(name === "")
    {
       return errorName();
    }
    if(isNaN(ages))
    {
        return ageError();
    }
    if(ages <=0 || ages >= 100)
    {
       return  ageError();
    }
    console.log("Name:" +name);
    console.log("Age" +ages);
    return true;
}



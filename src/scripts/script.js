function dropdownMenu() {
    const element = document.getElementById("dropdownMenu"); 
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";  
    } else {
        element.style.display = "none";   
    }
}

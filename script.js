function dropdownMenu() {
    const element = document.getElementById("dropdownMenu"); // Ensure this matches the HTML id
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";  
    } else {
        element.style.display = "none";   
    }
}

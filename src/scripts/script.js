function dropdownMenu() {
    const dropdown = document.getElementById("dropdownMenu"); 
    const profilePic = document.querySelector(".profile-pic");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        const rect = profilePic.getBoundingClientRect();
        
        dropdown.style.top = `${rect.bottom}px`;
        dropdown.style.right = `${window.innerWidth - rect.right - profilePic.scrollWidth/2}px`;
        
        dropdown.style.display = "block";  
    } else {
        dropdown.style.display = "none";   
    }
}

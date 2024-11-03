// Function to toggle the dropdown menu
function dropdownMenu() {
    const dropdown = document.getElementById("dropdownMenu"); 
    const profilePic = document.querySelector(".profile-pic");

    // Toggle dropdown visibility
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        const rect = profilePic.getBoundingClientRect();
        
        dropdown.style.top = `${rect.bottom} + 5 px`;
        dropdown.style.right = `${window.innerWidth - rect.right - profilePic.scrollWidth / 2 + 40}px`;
        
        dropdown.style.display = "flex";  
        dropdown.style.zIndex = "1000";

        // Add event listener to document to close dropdown on click outside
        document.addEventListener("click", function handleClickOutside(event) {
            const isClickInsideDropdown = dropdown.contains(event.target);
            const isClickOnProfilePic = profilePic.contains(event.target);
            
            // If the click is outside both dropdown and profile pic, hide the dropdown
            if (!isClickInsideDropdown && !isClickOnProfilePic) {
                dropdown.style.display = "none";
                // Remove event listener after closing dropdown to avoid multiple listeners
                document.removeEventListener("click", handleClickOutside);
            }
        });
    } else {
        dropdown.style.display = "none";   
    }
}

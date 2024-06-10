function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    var darkModeToggleIcon = document.getElementById("dark-mode-icon");

    if (document.body.classList.contains("dark-mode")) {
        darkModeToggleIcon.classList.remove("fa-moon");
        darkModeToggleIcon.classList.add("fa-sun");
    } else {
        // Change to moon icon
        darkModeToggleIcon.classList.remove("fa-sun");
        darkModeToggleIcon.classList.add("fa-moon");
    }
}

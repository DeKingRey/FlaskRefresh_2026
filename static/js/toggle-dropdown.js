function toggleInfo(button, display) {
    const header = button.parentElement;

    // Gets the toggleable list and checks if it is currently visible
    const infoDiv = header.nextElementSibling;
    const isVisible = infoDiv.style.display === display;

    // Upddates list and button according to visibility
    infoDiv.style.display = isVisible ? "none" : display;
    button.textContent = isVisible ? ">" : "⌄";
}
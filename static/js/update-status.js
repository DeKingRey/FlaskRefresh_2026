// Goes through each dropdown and updates status in DB if changed
document.querySelectorAll(".status-dropdown").forEach(dropdown => {
    updateColour(dropdown, parseInt(dropdown.dataset.statusId));

    dropdown.addEventListener("change", function() {
        const recipeId = this.dataset.recipeId;
        const newStatus = parseInt(this.value);

        updateColour(dropdown, newStatus)
        
        fetch("/update-recipe-status", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: recipeId,
                status: newStatus
            })
        })
    })
});

// Updates colour of dropdown depending on status
function updateColour(dropdown, statusID) {
    if (statusID == 2) dropdown.style.backgroundColor = "#b0ffb0";
    else if (statusID == 1) dropdown.style.backgroundColor = "#f8ffb0";
    else dropdown.style.backgroundColor = "#ffbeb0";
}


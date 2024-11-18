// Get all the table cells
const table = document.getElementById("skillsTable");
const cells = table.querySelectorAll("td");

// Loop through each cell
cells.forEach(cell => {
    // Parse the cell text as a number
    const value = parseInt(cell.textContent, 10);

    // Check if the value is a number
    if (!isNaN(value)) {
        // Apply color based on the value
        if (value < 10) {
            cell.style.color = "white";
        } else if (value >= 10 && value < 16) {
            cell.style.color = "yellow";
        } else if (value >= 16) {
            cell.style.color = "green";
        }
    }
});

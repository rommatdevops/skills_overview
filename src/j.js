function applyTextColorToTable() {
    const table = document.getElementById("skillsTable");
    const rows = table.querySelectorAll("tr");

    // Loop through each row
    rows.forEach(row => {
        const cells = row.querySelectorAll("td"); // Get all cells in the row

        for (let i = 0; i < cells.length; i += 2) {
            const skillNameCell = cells[i]; // Skill name
            const valueCell = cells[i + 1]; // Skill value

            if (skillNameCell && valueCell) {
                const value = parseInt(valueCell.textContent.trim(), 10);

                if (!isNaN(value)) {
                    // Apply color based on the value
                    if (value < 10) {
                        valueCell.style.color = "white";
                    } else if (value >= 10 && value < 16) {
                        valueCell.style.color = "yellow";
                    } else if (value >= 16) {
                        valueCell.style.color = "green";
                    }
                }
            }
        }
    });
}

function applyBackgroundColorToDivs() {
    const table = document.getElementById("skillsTable");
    const rows = table.querySelectorAll("tr");

    // Loop through each row
    rows.forEach(row => {
        const cells = row.querySelectorAll("td"); // Get all cells in the row

        for (let i = 0; i < cells.length; i += 2) {
            const skillNameCell = cells[i]; // Skill name
            const valueCell = cells[i + 1]; // Skill value

            if (skillNameCell && valueCell) {
                const skillName = skillNameCell.textContent.trim().toLowerCase(); // Convert to lowercase
                const value = parseInt(valueCell.textContent.trim(), 10);

                if (!isNaN(value)) {
                    const scaleUpDiv = document.getElementById(skillName);

                    if (scaleUpDiv) {
                        // Update the background color based on the value
                        if (value < 10) {
                            scaleUpDiv.style.setProperty("--bg", "120, 120, 120"); // Dark Gray
                        } else if (value >= 10 && value < 16) {
                            scaleUpDiv.style.setProperty("--bg", "255, 255, 0"); // Yellow
                        } else if (value >= 16) {
                            scaleUpDiv.style.setProperty("--bg", "0, 255, 0"); // Green
                        }
                    }
                }
            }
        }
    });
}

function applyClassesToValueCells() {
    const table = document.getElementById("skillsTable");
    const rows = table.querySelectorAll("tr");
  
    rows.forEach(row => {
      const cells = row.querySelectorAll("td");
  
      for (let i = 0; i < cells.length; i += 2) {
        const valueCell = cells[i + 1];
  
        if (valueCell) {
          const value = parseInt(valueCell.textContent.trim(), 10);
  
          if (!isNaN(value)) {
            // Спочатку знімаємо попередні класи, щоб не накопичувати
            valueCell.classList.remove("value-low", "value-mid", "value-high");
  
            if (value < 10) {
              valueCell.classList.add("value-low");
            } else if (value < 16) {
              valueCell.classList.add("value-mid");
            } else {
              valueCell.classList.add("value-high");
            }
          }
        }
      }
    });
  }
  
  function applyHighlightToSkillNames() {
    const table = document.getElementById("skillsTable");
    const rows = table.querySelectorAll("tr");
  
    rows.forEach(row => {
      const cells = row.querySelectorAll("td");
      for (let i = 0; i < cells.length; i += 2) {
        const skillNameCell = cells[i];
        const valueCell = cells[i + 1];
  
        if (skillNameCell && valueCell) {
          const value = parseInt(valueCell.textContent.trim(), 10);
  
          if (!isNaN(value)) {
            // Прибрати попередні класи (якщо є)
            skillNameCell.classList.remove("skill-low", "skill-mid", "skill-high");
  
            if (value < 10) {
              skillNameCell.classList.add("skill-low");
            } else if (value < 16) {
              skillNameCell.classList.add("skill-mid");
            } else {
              skillNameCell.classList.add("skill-high");
            }
          }
        }
      }
    });
  }

  applyTextColorToTable();        // Ваша наявна логіка для кольорів тексту
  applyBackgroundColorToDivs();   // Ваша наявна логіка для div
  applyClassesToValueCells(); 
  applyHighlightToSkillNames();
// =====================
// PROFILE MODAL
// =====================

// Get elements
const modal = document.getElementById("profileModal");
const btn = document.getElementById("profileBtn");
const closeBtn = document.querySelector(".close");

// Open modal
if (btn && modal) {
    btn.addEventListener("click", function () {
        modal.style.display = "block";
    });
}

// Close modal (X button)
if (closeBtn && modal) {
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
}

// Close when clicking outside modal
window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


// =====================
// NAVIGATION BUTTONS
// =====================

// Add Student button
const addStudent = document.getElementById("addStudent");
if (addStudent) {
    addStudent.addEventListener("click", function () {
        window.location.href = "register.html";
    });
}

// Delete Student button
const deleteStudent = document.getElementById("deleteStudent");
if (deleteStudent) {
    deleteStudent.addEventListener("click", function () {
        window.location.href = "database.html";
    });
}

// Edit Student button
const editStudent = document.getElementById("editStudent");
if (editStudent) {
    editStudent.addEventListener("click", function () {
        alert("Edit feature coming soon");
    });
}



const searchInput = document.querySelector(".search-box input");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();
        console.log("Searching:", value);

    });
}

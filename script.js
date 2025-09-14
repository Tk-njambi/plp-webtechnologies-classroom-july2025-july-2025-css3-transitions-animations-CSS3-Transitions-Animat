// --- Part 2: Functions with Scope, Parameters & Return ---

// Global variable
let globalGreeting = "Welcome to my portfolio!";

// Function with parameter & return
function personalizedGreeting(name) {
    let localGreeting = "Hello, " + name + "!"; // local scope
    return localGreeting + " " + globalGreeting;
}

// Display greeting in console
console.log(personalizedGreeting("Visitor"));

// Function to calculate number of projects
function countProjects(...projects) {
    return projects.length;
}
console.log("Total Projects:", countProjects("Project 1", "Project 2", "Project 3"));

//Combining CSS & JS Animations

// Animate button when clicked
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
    alert("Thanks for reaching out! 🚀");
    contactBtn.classList.toggle("animate");
});

//Add CSS animation dynamically
contactBtn.addEventListener("mouseenter", () => {
    contactBtn.style.transform = "scale(1.2) rotate(5deg)";
    contactBtn.style.transition = "all 0.4s ease";
});
contactBtn.addEventListener("mouseleave", () => {
    contactBtn.style.transform = "scale(1) rotate(0)";
});
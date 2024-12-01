// JavaScript to make the custom cursor follow the mouse
const cursor = document.createElement('div'); // Create a div element for the cursor
cursor.id = 'cursor'; // Set the id for the cursor
document.body.appendChild(cursor); // Add the cursor to the body

// Set initial mouse position
let mouseX = 0;
let mouseY = 0;

// Function to update the cursor position
function moveCursor() {
  cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`; // Center the cursor at the mouse position
  cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;
}

// Mousemove event listener to track mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  moveCursor(); // Update the cursor position
});

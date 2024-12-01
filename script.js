// JavaScript to make the custom cursor follow the mouse
const cursor = document.getElementById('cursor');
const ctx = cursor.getContext('2d');
let mouseX = 0;
let mouseY = 0;

// Set the canvas size to match the desired cursor size
cursor.width = 30;
cursor.height = 30;

// Function to draw the custom cursor on the canvas
function drawCursor() {
  ctx.clearRect(0, 0, cursor.width, cursor.height); // Clear the canvas
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 15, 0, 2 * Math.PI); // Draw a circle
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; // Set color (semi-transparent black)
  ctx.fill(); // Fill the circle
  ctx.closePath();
}

// Mousemove event listener to track mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = `${mouseX - 15}px`; // Adjust position for center of cursor
  cursor.style.top = `${mouseY - 15}px`;
  drawCursor(); // Draw the custom cursor
});

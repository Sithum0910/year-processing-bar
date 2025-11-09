// Get references to the HTML elements we need to update
const filler = document.getElementById('progress-bar-filler');
const text = document.getElementById('progress-text');

function updateProgress() {
    // 1. GET THE CURRENT DATE AND YEAR
    const now = new Date();
    const currentYear = now.getFullYear(); // This will be 2025, 2026, etc.

    // 2. CALCULATE PERCENTAGE
    // Get the start of this year (Jan 1st)
    const startOfYear = new Date(currentYear, 0, 1);
    // Get the start of next year (Jan 1st)
    const endOfYear = new Date(currentYear + 1, 0, 1);

    // Calculate total milliseconds in the *entire* year
    const totalMillisecondsInYear = endOfYear - startOfYear;
    // Calculate milliseconds passed *so far* this year
    const millisecondsPassed = now - startOfYear;

    // Calculate the percentage
    const percentage = (millisecondsPassed / totalMillisecondsInYear) * 100;

    // 3. CALCULATE THE COLOR
    // This uses the year number to create a unique color
    // It changes the "Hue" in HSL (Hue, Saturation, Lightness)
    // (currentYear * 50) % 360 gives a nice-looking new color each year
    const hue = (currentYear * 50) % 360;
    const color = `hsl(${hue}, 100%, 50%)`;

    // 4. UPDATE THE WEBSITE
    
    // Set the bar's width
    filler.style.width = `${percentage}%`;
    
    // Set the bar's color
    filler.style.backgroundColor = color;

    // Set the text
    // .toFixed(8) shows 8 decimal places, so you can see it update "live"
    text.textContent = `${currentYear} is ${percentage.toFixed(8)}% complete.`;
}

// This is the magic part:
// It automatically runs the updateProgress function every second (1000ms)
setInterval(updateProgress, 1000);

// Run it once right away when the page loads
updateProgress();

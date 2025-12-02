// Function to update the clock display
function updateClock() {
  // Get current date and time
  const now = new Date()

  // Get hours, minutes, and seconds
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  // Determine AM or PM
  const period = hours >= 12 ? "PM" : "AM"

  // Convert to 12-hour format
  hours = hours % 12
  hours = hours ? hours : 12 // Handle midnight (0 hours)

  // Add leading zeros if needed
  hours = hours.toString().padStart(2, "0")
  minutes = minutes.toString().padStart(2, "0")
  seconds = seconds.toString().padStart(2, "0")

  // Format the time string
  const timeString = `${hours}:${minutes}:${seconds}`

  // Update the display
  document.getElementById("time").textContent = timeString
  document.getElementById("period").textContent = period

  // Update the date
  updateDate()
}

// Function to update the date display
function updateDate() {
  const now = new Date()

  // Array of day names
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  // Get day, month, and year
  const dayName = days[now.getDay()]
  const monthName = months[now.getMonth()]
  const date = now.getDate()
  const year = now.getFullYear()

  // Format the date string
  const dateString = `${dayName}, ${monthName} ${date}, ${year}`

  // Update the date display
  document.getElementById("date").textContent = dateString
}

// Function to initialize the clock
function initializeClock() {
  // Update the clock immediately
  updateClock()

  // Set up interval to update every second
  setInterval(updateClock, 1000)
}

// Start the clock when the page loads
document.addEventListener("DOMContentLoaded", initializeClock)

// Optional: Add some interactive features
document.querySelector(".clock-wrapper").addEventListener("click", function () {
  // Add a subtle animation when clicked
  this.style.transform = "scale(0.98)"
  setTimeout(() => {
    this.style.transform = "scale(1)"
  }, 100)
})

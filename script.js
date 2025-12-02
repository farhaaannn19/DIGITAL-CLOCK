function updateClock() {
  const now = new Date()

 
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

 const period = hours >= 12 ? "PM" : "AM"

  hours = hours % 12
  hours = hours ? hours : 12 

  hours = hours.toString().padStart(2, "0")
  minutes = minutes.toString().padStart(2, "0")
  seconds = seconds.toString().padStart(2, "0")

  const timeString = `${hours}:${minutes}:${seconds}`

  document.getElementById("time").textContent = timeString
  document.getElementById("period").textContent = period

  updateDate()
}

function updateDate() {
  const now = new Date()

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

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

  const dayName = days[now.getDay()]
  const monthName = months[now.getMonth()]
  const date = now.getDate()
  const year = now.getFullYear()

  const dateString = `${dayName}, ${monthName} ${date}, ${year}`

  document.getElementById("date").textContent = dateString
}

function initializeClock() {
  updateClock()

  setInterval(updateClock, 1000)
}

document.addEventListener("DOMContentLoaded", initializeClock)

document.querySelector(".clock-wrapper").addEventListener("click", function () {
  this.style.transform = "scale(0.98)"
  setTimeout(() => {
    this.style.transform = "scale(1)"
  }, 100)
})

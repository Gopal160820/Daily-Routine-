// Set the date to count down to
const countDownDate = new Date("January 31, 2025 00:00:00").getTime();

// Update the countdown every second
const countdownElement = document.getElementById("countdown");
setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  countdownElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000); // Update every second



// Define the study schedule array
let studySchedule = [
    { day: "Monday", subject: "Algorithms", time: "9:00 AM - 11:00 AM", completed: false },
    { day: "Tuesday", subject: "Data Structures", time: "10:00 AM - 12:00 PM", completed: false },
    // You can prepopulate it with some default values
  ];
  
  // Function to display the study schedule
  function displaySchedule() {
    const scheduleContainer = document.getElementById("studySchedule");
    let scheduleHTML = "<ul>";
  
    studySchedule.forEach((study, index) => {
      const checkbox = `<input type="checkbox" id="task${index}" onchange="markAsComplete(${index}, this.checked)" ${study.completed ? 'checked' : ''}>`;
      const taskLabel = `<label for="task${index}">${study.day} - ${study.subject} - ${study.time}</label>`;
      const removeButton = `<button onclick="deleteEntry(${index})">Remove</button>`;
      scheduleHTML += `<li>${checkbox} ${taskLabel} ${removeButton}</li>`;
    });
  
    scheduleHTML += "</ul>";
    scheduleContainer.innerHTML = scheduleHTML;
  }
  
  // Function to add a new entry to the schedule
  function addToSchedule(event) {
    event.preventDefault();
  
    const day = document.getElementById("dayInput").value;
    const subject = document.getElementById("subjectInput").value;
    const time = document.getElementById("timeInput").value;
  
    studySchedule.push({ day, subject, time, completed: false });
  
    // Clear input fields after adding to schedule
    document.getElementById("dayInput").value = "";
    document.getElementById("subjectInput").value = "";
    document.getElementById("timeInput").value = "";
  
    displaySchedule();
  }
  
  // Function to delete an entry from the schedule
  function deleteEntry(index) {
    studySchedule.splice(index, 1);
    displaySchedule();
  }
  
  // Function to mark task as complete
  function markAsComplete(index, checked) {
    studySchedule[index].completed = checked;
  }
  
  // Function to toggle the display of the form
  function toggleForm() {
    const form = document.getElementById("studyForm");
    if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }
  
  // Call the function to display the schedule when the page loads
  window.onload = displaySchedule;
  
  // Event listener for form submission
  const studyForm = document.getElementById("studyForm");
  studyForm.addEventListener("submit", addToSchedule);
  
  // Event listener for the add button
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", toggleForm);
  








  // Function to save schedule data to localStorage
function saveToLocalStorage() {
    localStorage.setItem('studySchedule', JSON.stringify(studySchedule));
  }
  
  // Function to load schedule data from localStorage
  function loadFromLocalStorage() {
    const savedSchedule = localStorage.getItem('studySchedule');
    if (savedSchedule) {
      studySchedule = JSON.parse(savedSchedule);
      displaySchedule(); // Re-display the loaded schedule
    }
  }
  
  // Call loadFromLocalStorage on page load
  window.onload = loadFromLocalStorage;
  
  // Other functions (addToSchedule, deleteEntry, markAsComplete) remain the same but add saveToLocalStorage() at the end of each function.
  
  // Save to localStorage before leaving the page
  window.addEventListener('beforeunload', saveToLocalStorage);
  

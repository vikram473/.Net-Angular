document.addEventListener("DOMContentLoaded", function () {
  const selectedEvent = JSON.parse(localStorage.getItem("selectedEvent"));

  if (selectedEvent) {
    document.getElementById("eventId").value = selectedEvent.id;
    document.getElementById("eventName").value = selectedEvent.name;
    document.getElementById("eventCategory").value = selectedEvent.category;
    document.getElementById("eventDate").value = selectedEvent.date;
    document.getElementById("eventTime").value = selectedEvent.time;
  }

  const registrationForm = document.getElementById("registrationForm");
  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("You are successfully registered to this event!");
    registrationForm.reset();

    if (selectedEvent) {
      document.getElementById("eventId").value = selectedEvent.id;
      document.getElementById("eventName").value = selectedEvent.name;
      document.getElementById("eventCategory").value = selectedEvent.category;
      document.getElementById("eventDate").value = selectedEvent.date;
      document.getElementById("eventTime").value = selectedEvent.time;
    }
  });
});
const defaultEvents = [
  {
    id: "E101",
    name: "AI Innovation Summit",
    category: "Tech & Innovations",
    date: "2026-03-20",
    time: "10:00",
    url: "https://example.com/ai-summit"
  },
  {
    id: "E102",
    name: "Industrial Automation Expo",
    category: "Industrial Events",
    date: "2026-03-25",
    time: "02:00",
    url: "https://example.com/automation-expo"
  },
  {
    id: "E103",
    name: "Cloud Tech Conference",
    category: "Tech & Innovations",
    date: "2026-03-30",
    time: "11:30",
    url: "https://example.com/cloud-conference"
  }
];

function renderHomeEvents(events) {
  const container = document.getElementById("homeEventsContainer");
  if (!container) return;

  container.innerHTML = "";

  events.forEach(event => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card shadow h-100 event-card">
          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text"><strong>ID:</strong> ${event.id}</p>
            <p class="card-text"><strong>Category:</strong> ${event.category}</p>
            <p class="card-text"><strong>Date:</strong> ${event.date}</p>
            <p class="card-text"><strong>Time:</strong> ${event.time}</p>
            <p class="card-text">
              <a href="${event.url}" target="_blank" class="text-decoration-none">Join Event</a>
            </p>
            <button class="btn btn-success w-100" onclick='registerEvent(${JSON.stringify(event)})'>Register</button>
          </div>
        </div>
      </div>
    `;
  });
}

function registerEvent(eventObj) {
  localStorage.setItem("selectedEvent", JSON.stringify(eventObj));
  window.location.href = "register.html";
}

document.addEventListener("DOMContentLoaded", function () {
  openDatabase(() => {
    getAllEventsFromDB((dbEvents) => {
      const allEvents = [...defaultEvents, ...dbEvents];
      renderHomeEvents(allEvents);
    });
  });
});
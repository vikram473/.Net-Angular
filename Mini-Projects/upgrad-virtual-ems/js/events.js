// Render all admin events
function renderAdminEvents(events) {
  const container = document.getElementById("adminEventsContainer");
  container.innerHTML = "";

  if (events.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="alert alert-warning">No events found.</div>
      </div>
    `;
    return;
  }

  events.forEach(event => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card shadow h-100 event-card">
          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p><strong>ID:</strong> ${event.id}</p>
            <p><strong>Category:</strong> ${event.category}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><a href="${event.url}" target="_blank">Join Event</a></p>

            <div class="d-flex gap-2">
              <button class="btn btn-warning w-50" onclick="editEvent('${event.id}')">Edit</button>
              <button class="btn btn-danger w-50" onclick="removeEvent('${event.id}')">Delete</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

// Load all events from DB
function loadAdminEvents() {
  openDatabase(() => {
    getAllEventsFromDB((events) => {
      renderAdminEvents(events);
    });
  });
}

// Delete event
function removeEvent(id) {
  if (confirm("Are you sure you want to delete this event?")) {
    deleteEventFromDB(id, () => {
      alert("Event deleted successfully!");
      loadAdminEvents();
      resetFormToAddMode();
    });
  }
}

// Edit event - load data into form
function editEvent(id) {
  getAllEventsFromDB((events) => {
    const selectedEvent = events.find(event => event.id === id);

    if (!selectedEvent) {
      alert("Event not found!");
      return;
    }

    // Fill form with selected event data
    document.getElementById("newEventId").value = selectedEvent.id;
    document.getElementById("newEventName").value = selectedEvent.name;
    document.getElementById("newEventCategory").value = selectedEvent.category;
    document.getElementById("newEventDate").value = selectedEvent.date;
    document.getElementById("newEventTime").value = selectedEvent.time;
    document.getElementById("newEventUrl").value = selectedEvent.url;

    // Enable edit mode
    document.getElementById("editMode").value = "true";
    document.getElementById("originalEventId").value = selectedEvent.id;

    // Update UI
    document.getElementById("formTitle").innerText = "Edit Event";
    document.getElementById("submitBtn").innerText = "Update Event";
    document.getElementById("submitBtn").classList.remove("btn-primary");
    document.getElementById("submitBtn").classList.add("btn-warning");
    document.getElementById("cancelEditBtn").classList.remove("d-none");

    // Scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Reset form to Add mode
function resetFormToAddMode() {
  const eventForm = document.getElementById("eventForm");

  eventForm.reset();
  document.getElementById("editMode").value = "false";
  document.getElementById("originalEventId").value = "";

  document.getElementById("formTitle").innerText = "Add New Event";
  document.getElementById("submitBtn").innerText = "Add Event";
  document.getElementById("submitBtn").classList.remove("btn-warning");
  document.getElementById("submitBtn").classList.add("btn-primary");
  document.getElementById("cancelEditBtn").classList.add("d-none");
}

document.addEventListener("DOMContentLoaded", function () {
  const eventForm = document.getElementById("eventForm");
  const searchBtn = document.getElementById("searchBtn");
  const cancelEditBtn = document.getElementById("cancelEditBtn");

  // Load all events when page opens
  loadAdminEvents();

  // CREATE / UPDATE
  eventForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const isEditMode = document.getElementById("editMode").value === "true";
    const originalEventId = document.getElementById("originalEventId").value;

    const eventObj = {
      id: document.getElementById("newEventId").value.trim(),
      name: document.getElementById("newEventName").value.trim(),
      category: document.getElementById("newEventCategory").value,
      date: document.getElementById("newEventDate").value,
      time: document.getElementById("newEventTime").value,
      url: document.getElementById("newEventUrl").value.trim()
    };

    // If ADD mode
    if (!isEditMode) {
      addEventToDB(eventObj, () => {
        alert("Event added successfully!");
        resetFormToAddMode();
        loadAdminEvents();
      });
    } 
    // If UPDATE mode
    else {
      // Case 1: ID not changed
      if (eventObj.id === originalEventId) {
        updateEventInDB(eventObj, () => {
          alert("Event updated successfully!");
          resetFormToAddMode();
          loadAdminEvents();
        });
      } 
      // Case 2: ID changed → need extra check
      else {
        getAllEventsFromDB((events) => {
          const idExists = events.some(event => event.id === eventObj.id);

          if (idExists) {
            alert("New Event ID already exists! Please use a unique Event ID.");
            return;
          }

          // Delete old event, then add updated event with new ID
          deleteEventFromDB(originalEventId, () => {
            addEventToDB(eventObj, () => {
              alert("Event updated successfully!");
              resetFormToAddMode();
              loadAdminEvents();
            });
          });
        });
      }
    }
  });

  // SEARCH
  searchBtn.addEventListener("click", function () {
    const searchType = document.getElementById("searchType").value;
    const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();

    getAllEventsFromDB((events) => {
      let filteredEvents = events;

      if (searchType === "id") {
        filteredEvents = events.filter(event =>
          event.id.toLowerCase().includes(searchValue)
        );
      } else if (searchType === "name") {
        filteredEvents = events.filter(event =>
          event.name.toLowerCase().includes(searchValue)
        );
      } else if (searchType === "category") {
        filteredEvents = events.filter(event =>
          event.category.toLowerCase().includes(searchValue)
        );
      }

      renderAdminEvents(filteredEvents);
    });
  });

  // Cancel Edit
  cancelEditBtn.addEventListener("click", function () {
    resetFormToAddMode();
  });
});
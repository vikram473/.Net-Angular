let db;
const dbName = "UpgradEMSDB";
const storeName = "events";

// Open IndexedDB
function openDatabase(callback) {
  const request = indexedDB.open(dbName, 1);

  request.onupgradeneeded = function (event) {
    db = event.target.result;

    if (!db.objectStoreNames.contains(storeName)) {
      db.createObjectStore(storeName, { keyPath: "id" });
    }
  };

  request.onsuccess = function (event) {
    db = event.target.result;
    if (callback) callback();
  };

  request.onerror = function () {
    console.error("Error opening IndexedDB");
    alert("Database connection failed!");
  };
}

// CREATE
function addEventToDB(eventObj, callback) {
  const transaction = db.transaction([storeName], "readwrite");
  const store = transaction.objectStore(storeName);
  const request = store.add(eventObj);

  request.onsuccess = function () {
    if (callback) callback();
  };

  request.onerror = function () {
    alert("Event ID already exists! Please use a unique Event ID.");
  };
}

// READ
function getAllEventsFromDB(callback) {
  const transaction = db.transaction([storeName], "readonly");
  const store = transaction.objectStore(storeName);
  const request = store.getAll();

  request.onsuccess = function () {
    callback(request.result);
  };

  request.onerror = function () {
    console.error("Error fetching events");
    alert("Failed to fetch events!");
  };
}

// UPDATE
function updateEventInDB(eventObj, callback) {
  const transaction = db.transaction([storeName], "readwrite");
  const store = transaction.objectStore(storeName);
  const request = store.put(eventObj);

  request.onsuccess = function () {
    if (callback) callback();
  };

  request.onerror = function () {
    console.error("Error updating event");
    alert("Failed to update event!");
  };
}

// DELETE
function deleteEventFromDB(id, callback) {
  const transaction = db.transaction([storeName], "readwrite");
  const store = transaction.objectStore(storeName);
  const request = store.delete(id);

  request.onsuccess = function () {
    if (callback) callback();
  };

  request.onerror = function () {
    console.error("Error deleting event");
    alert("Failed to delete event!");
  };
}
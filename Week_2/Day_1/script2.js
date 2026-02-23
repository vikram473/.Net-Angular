// Get current location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError,
            { timeout: 5000 }
        );
    } else {
        document.getElementById("status").innerText =
            "Geolocation is not supported by this browser.";
    }
}

// Success callback
function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    document.getElementById("status").innerText = "Location fetched successfully";
    document.getElementById("latitude").innerText = "Latitude: " + lat;
    document.getElementById("longitude").innerText = "Longitude: " + lon;

    saveLocation(lat, lon);
    loadLocationHistory();
}

// Error callback
function showError(error) {
    var message = "";

    if (error.code === error.PERMISSION_DENIED) {
        message = "Permission denied by user";
    } else if (error.code === error.TIMEOUT) {
        message = "Location request timed out";
    } else if (error.code === error.POSITION_UNAVAILABLE) {
        message = "Location information unavailable";
    }

    document.getElementById("status").innerText = message;
}

// Save last 5 locations in localStorage
function saveLocation(lat, lon) {
    var history = JSON.parse(localStorage.getItem("locationHistory")) || [];

    history.unshift({
        latitude: lat,
        longitude: lon,
        time: new Date().toLocaleString()
    });

    if (history.length > 5) {
        history.pop();
    }

    localStorage.setItem("locationHistory", JSON.stringify(history));
}

// Load location history on page load
function loadLocationHistory() {
    var history = JSON.parse(localStorage.getItem("locationHistory")) || [];
    var list = document.getElementById("history");
    list.innerHTML = "";

    for (var i = 0; i < history.length; i++) {
        var item = document.createElement("li");
        item.innerText =
            history[i].latitude + ", " +
            history[i].longitude +
            " (" + history[i].time + ")";
        list.appendChild(item);
    }
}
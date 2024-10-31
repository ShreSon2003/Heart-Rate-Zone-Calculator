function calculateZones() {
    const age = document.getElementById("ageInput").value;
    if (age === "" || age <= 0) {
      alert("Please enter a valid age.");
      return;
    }
  
    const maxHeartRate = 220 - age;
    
    const fatBurningMin = Math.round(maxHeartRate * 0.5);
    const fatBurningMax = Math.round(maxHeartRate * 0.7);
    const cardioMin = Math.round(maxHeartRate * 0.7);
    const cardioMax = Math.round(maxHeartRate * 0.85);
    const peakMin = Math.round(maxHeartRate * 0.85);
    const peakMax = Math.round(maxHeartRate * 1.0);
  
    document.getElementById("fatBurningZone").innerText = `${fatBurningMin} - ${fatBurningMax}`;
    document.getElementById("cardioZone").innerText = `${cardioMin} - ${cardioMax}`;
    document.getElementById("peakZone").innerText = `${peakMin} - ${peakMax}`;
    
    document.getElementById("result").style.display = "block";
  }
  
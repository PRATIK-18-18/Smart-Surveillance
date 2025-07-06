function simulateMotion() {
  const status = document.getElementById('motionStatus');
  const alertList = document.getElementById('alertList');
  status.textContent = "⚠️ Motion Detected!";
  status.style.color = "#ff4d4d";
  const timestamp = new Date().toLocaleString();
  const newAlert = document.createElement("li");
  newAlert.textContent = `Motion detected at ${timestamp}`;
  alertList.appendChild(newAlert);
  const audio = new Audio("https://assets.mixkit.co/sfx/download/mixkit-alert-alarm-1005.wav");
  audio.play();
}
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("formStatus").textContent = "✅ Feedback sent successfully!";
});

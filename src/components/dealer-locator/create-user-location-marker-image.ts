export function createUserLocationMarkerImage() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 48;
  canvas.height = 80;

  if (!context) {
    throw new Error("User location marker canvas context is unavailable");
  }

  const centerX = canvas.width / 2;
  const markerY = 16;
  const shadowY = canvas.height - 10;

  context.beginPath();
  context.ellipse(centerX, shadowY, 8, 3, 0, 0, Math.PI * 2);
  context.fillStyle = "#00000018";
  context.filter = "blur(3px)";
  context.fill();
  context.filter = "none";

  context.beginPath();
  context.moveTo(centerX, markerY + 10);
  context.lineTo(centerX, shadowY - 3);
  context.strokeStyle = "rgba(17, 17, 17, 0.18)";
  context.lineWidth = 1;
  context.stroke();

  const glowGradient = context.createRadialGradient(centerX, markerY, 5, centerX, markerY, 16);
  glowGradient.addColorStop(0, "rgba(255, 255, 255, 0.22)");
  glowGradient.addColorStop(0.7, "rgba(255, 255, 255, 0.08)");
  glowGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  context.beginPath();
  context.arc(centerX, markerY, 16, 0, Math.PI * 2);
  context.fillStyle = glowGradient;
  context.fill();

  context.beginPath();
  context.arc(centerX, markerY, 8.5, 0, Math.PI * 2);
  context.fillStyle = "#ffffff";
  context.fill();

  context.beginPath();
  context.arc(centerX, markerY, 5, 0, Math.PI * 2);
  context.fillStyle = "#111111";
  context.fill();

  context.beginPath();
  context.arc(centerX - 1.5, markerY - 1.5, 1.4, 0, Math.PI * 2);
  context.fillStyle = "#ffffffb8";
  context.fill();

  return context.getImageData(0, 0, canvas.width, canvas.height);
}

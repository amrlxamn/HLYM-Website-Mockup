export function createDealerMapMarkerImage(isSelected: boolean) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 48;
  canvas.height = 80;

  if (!context) {
    throw new Error("Dealer marker canvas context is unavailable");
  }

  const centerX = canvas.width / 2;
  const markerY = 16;
  const shadowY = canvas.height - 10;

  const outerRadius = isSelected ? 10 : 8;
  const innerRadius = isSelected ? 7 : 5.5;

  // Ground shadow ellipse
  context.beginPath();
  context.ellipse(centerX, shadowY, isSelected ? 8 : 6, isSelected ? 3 : 2.5, 0, 0, Math.PI * 2);
  context.fillStyle = "rgba(0, 0, 0, 0.18)";
  context.filter = "blur(3px)";
  context.fill();
  context.filter = "none";

  // Thin stem
  context.beginPath();
  context.moveTo(centerX, markerY + outerRadius);
  context.lineTo(centerX, shadowY - 3);
  context.strokeStyle = "rgba(238, 57, 61, 0.18)";
  context.lineWidth = 1;
  context.stroke();

  // White outer ring
  context.beginPath();
  context.arc(centerX, markerY, outerRadius, 0, Math.PI * 2);
  context.fillStyle = "#ffffff";
  context.fill();

  // Red inner circle
  context.beginPath();
  context.arc(centerX, markerY, innerRadius, 0, Math.PI * 2);
  context.fillStyle = "#ee393d";
  context.fill();

  // Specular highlight
  context.beginPath();
  context.arc(centerX - 2, markerY - 2, 1.8, 0, Math.PI * 2);
  context.fillStyle = "#ffffffb8";
  context.fill();

  return context.getImageData(0, 0, canvas.width, canvas.height);
}

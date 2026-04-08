export function createDealerMapPulseImage() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  let repaintMap: { triggerRepaint: () => void } | null = null;

  canvas.width = 112;
  canvas.height = 112;

  if (!context) {
    throw new Error("Dealer pulse canvas context is unavailable");
  }

  const centerX = canvas.width / 2;
  const centerY = 48;
  const shadowY = canvas.height - 10;
  const styleImage = {
    data: new Uint8Array(canvas.width * canvas.height * 4),
    height: canvas.height,
    onAdd(map: unknown) {
      repaintMap =
        typeof map === "object" &&
        map !== null &&
        "triggerRepaint" in map &&
        typeof map.triggerRepaint === "function"
          ? { triggerRepaint: map.triggerRepaint.bind(map) }
          : null;
    },
    pixelRatio: 2,
    render() {
      const progress = (performance.now() % 2000) / 2000;
      const easedProgress = Math.sin(progress * Math.PI);
      const pulseRadius = 11 + 14 * easedProgress;
      const pulseOpacity = 0.22 - 0.14 * easedProgress;
      const ringWidth = 1.5 + 1.2 * (1 - easedProgress);

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.beginPath();
      context.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      context.fillStyle = `rgba(238, 57, 61, ${Math.max(pulseOpacity * 0.42, 0.03)})`;
      context.filter = "blur(10px)";
      context.fill();
      context.filter = "none";

      context.beginPath();
      context.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      context.strokeStyle = `rgba(238, 57, 61, ${Math.max(pulseOpacity, 0.06)})`;
      context.lineWidth = ringWidth;
      context.stroke();

      context.beginPath();
      context.ellipse(centerX, shadowY, 8, 3, 0, 0, Math.PI * 2);
      context.fillStyle = "rgba(0, 0, 0, 0.18)";
      context.filter = "blur(3px)";
      context.fill();
      context.filter = "none";

      context.beginPath();
      context.moveTo(centerX, centerY + 10);
      context.lineTo(centerX, shadowY - 3);
      context.strokeStyle = "rgba(238, 57, 61, 0.18)";
      context.lineWidth = 1;
      context.stroke();

      context.beginPath();
      context.arc(centerX, centerY, 10, 0, Math.PI * 2);
      context.fillStyle = "#ffffff";
      context.fill();

      context.beginPath();
      context.arc(centerX, centerY, 7, 0, Math.PI * 2);
      context.fillStyle = "#ee393d";
      context.fill();

      context.beginPath();
      context.arc(centerX - 2, centerY - 2, 1.8, 0, Math.PI * 2);
      context.fillStyle = "#ffffffb8";
      context.fill();

      styleImage.data = new Uint8Array(
        context.getImageData(0, 0, canvas.width, canvas.height).data
      );
      repaintMap?.triggerRepaint();

      return true;
    },
    width: canvas.width
  };

  return styleImage;
}

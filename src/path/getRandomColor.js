export default function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  if (r === 255 && g === 255 && b === 255) {
    r = 0;
    g = 0;
    b = 255;
  }
  return `rgb(${r}, ${g}, ${b})`;
}

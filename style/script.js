
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = "アカサタナハマヤラワンアイウエオカキクケコサシスセソ";
const latin = "HAPYNEWR";
const nums = "206";
const sign = "!@#$%^&*()_+";
const alphabet = latin + nums ;

const fontSize = 20;
let columns = canvas.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

// Hàm tạo màu gradient rainbow dựa trên vị trí x
function getRainbowColor(x) {
  // Tạo gradient rainbow từ trái sang phải
  const hue = (x / canvas.width) * 360;
  return `hsl(${hue}, 100%, 60%)`;
}

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = fontSize + "px 'Orbitron', monospace";
  
  for (let i = 0; i < drops.length; i++) {
    const x = i * fontSize;
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    ctx.fillStyle = getRainbowColor(x);
    ctx.fillText(text, x, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = canvas.width / fontSize;
  drops = Array(Math.floor(columns)).fill(1);
});

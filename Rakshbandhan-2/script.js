function showPopup(cardNumber) {
  const content = document.getElementById("popupContent");
  const popup = document.getElementById("popup");

  let image = "";
  let message = "";

  if (cardNumber === 1) {
    image = "images/sister1.jpg";
    message = `Dear Ben,<br><br>
      Tamari smile ek magic che. Tame ghare cho, etle ghar ma light che. A Rakshabandhan par tamne bau khushi, pyar ane sukh malse. Love you forever! 💖`;
  } else if (cardNumber === 2) {
    image = "images/image2.jpg";
    message = `Sweetest Ben,<br><br>
      Aapdu bandhan bau special che. Tame hamesha mara saath rahi cho, mara har moment ma. Aa Rakshabandhan e yaadgar rahe! 🌸`;
  } else if (cardNumber === 3) {
    image = "images/image3.jpg";
    message = `Lovely Sister,<br><br>
      Tame mara jeevan ni ek priceless gift cho. Tamara laugh thi mara dino sunder bane che. Raksha Bandhan na a shubh divas par mane vadhare proud feel thay che! 🎁`;
  }

  content.innerHTML = `
    <img src="${image}" alt="Card Image">
    <p>${message}</p>
  `;

  // Re-trigger animation
  content.classList.remove("popup-content");
  void content.offsetWidth;
  content.classList.add("popup-content");

  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}


  const canvas = document.getElementById('fireworks');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.radius = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 10;
      this.speedY = (Math.random() - 0.5) * 10;
      this.alpha = 1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha -= 0.02;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  let particles = [];

  function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    const colors = ['#ff007f', '#ffd700', '#00ffff', '#ff4500', '#00ff00'];
    for (let i = 0; i < 40; i++) {
      particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
    }
  }

  function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.update();
      p.draw();
      if (p.alpha <= 0) particles.splice(i, 1);
    });
    requestAnimationFrame(animate);
  }

  setInterval(createFirework, 1000);
  animate();

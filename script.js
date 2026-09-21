/* ============ BINTANG DI LANGIT ============ */
const sky = document.getElementById('sky');
if (sky) {
  const starCount = window.innerWidth < 768 ? 70 : 140;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.4 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDuration = (Math.random() * 3 + 1.5) + 's';
    star.style.animationDelay = (Math.random() * 4) + 's';
    if (Math.random() > 0.85) {
      star.style.boxShadow = '0 0 8px 2px rgba(255,255,255,0.9)';
    }
    sky.appendChild(star);
  }

  /* ============ AWAN ============ */
  const cloudConfigs = [
    { w: 260, h: 60, top: '18%', dur: 55, delay: 0 },
    { w: 200, h: 50, top: '38%', dur: 70, delay: 12 },
    { w: 320, h: 70, top: '8%',  dur: 85, delay: 25 },
    { w: 180, h: 45, top: '48%', dur: 65, delay: 40 }
  ];
  cloudConfigs.forEach(cfg => {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.width = cfg.w + 'px';
    cloud.style.height = cfg.h + 'px';
    cloud.style.top = cfg.top;
    cloud.style.animationDuration = cfg.dur + 's';
    cloud.style.animationDelay = cfg.delay + 's';
    sky.appendChild(cloud);
  });
}

/* ============ BUBBLE TKJ ============ */
const tkjIcons = [
  'fa-network-wired', 'fa-server', 'fa-laptop-code', 'fa-wifi',
  'fa-microchip', 'fa-ethernet', 'fa-database', 'fa-shield-halved',
  'fa-cloud', 'fa-code', 'fa-terminal', 'fa-desktop'
];
const tkjContainer = document.getElementById('tkjBubbles');
if (tkjContainer) {
  const bubbleCount = window.innerWidth < 768 ? 14 : 26;
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'tkj-bubble';
    const size = Math.random() * 60 + 45;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 95 + '%';
    bubble.style.animationDuration = (Math.random() * 18 + 14) + 's';
    bubble.style.animationDelay = (Math.random() * 20) + 's';
    bubble.style.fontSize = (size * 0.4) + 'px';

    const isGold = Math.random() > 0.5;
    const rgb = isGold ? '255,215,0' : '100,180,255';
    bubble.style.borderColor = 'rgba(' + rgb + ',0.4)';
    bubble.style.background = 'radial-gradient(circle at 30% 30%, rgba(' + rgb + ',0.25), rgba(' + rgb + ',0.05))';
    bubble.style.boxShadow = '0 0 25px rgba(' + rgb + ',0.4), inset 0 0 20px rgba(' + rgb + ',0.25)';
    bubble.style.color = 'rgba(' + rgb + ',0.95)';

    const icon = document.createElement('i');
    icon.className = 'fas ' + tkjIcons[Math.floor(Math.random() * tkjIcons.length)];
    bubble.appendChild(icon);
    tkjContainer.appendChild(bubble);
  }
}

/* ============ TOGGLE MENU MOBILE ============ */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('open');
    const icon = navToggle.querySelector('i');
    icon.className = navMenu.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
  });
}

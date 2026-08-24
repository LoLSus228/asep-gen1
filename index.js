const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navItems = [...document.querySelectorAll('[data-nav]')];
const revealEls = document.querySelectorAll('.reveal');
const backToTop = document.getElementById('backToTop');
const cursorGlow = document.getElementById('cursorGlow');

const memberPhotos = [
  'assets/members/test1.png',
  'assets/members/test1.png',
  'assets/members/test1.png',
];

const memberList = [
  { name: 'สมาชิกคนที่ 1', ig: '@member1' },
  { name: 'สมาชิกคนที่ 2', ig: '@member2' },
  { name: 'สมาชิกคนที่ 3', ig: '@member3' },
  { name: 'สมาชิกคนที่ 4', ig: '@member4' },
  { name: 'สมาชิกคนที่ 5', ig: '@member5' },
  { name: 'สมาชิกคนที่ 6', ig: '@member6' },
  { name: 'สมาชิกคนที่ 7', ig: '@member7' },
  { name: 'สมาชิกคนที่ 8', ig: '@member8' },
  { name: 'สมาชิกคนที่ 9', ig: '@member9' },
  { name: 'สมาชิกคนที่ 10', ig: '@member10' },
  { name: 'สมาชิกคนที่ 11', ig: '@member11' },
  { name: 'สมาชิกคนที่ 12', ig: '@member12' },
  { name: 'สมาชิกคนที่ 13', ig: '@member13' },
  { name: 'สมาชิกคนที่ 14', ig: '@member14' },
  { name: 'สมาชิกคนที่ 15', ig: '@member15' },
  { name: 'สมาชิกคนที่ 16', ig: '@member16' },
  { name: 'สมาชิกคนที่ 17', ig: '@member17' },
  { name: 'สมาชิกคนที่ 18', ig: '@member18' },
  { name: 'สมาชิกคนที่ 19', ig: '@member19' },
  { name: 'สมาชิกคนที่ 20', ig: '@member20' },
  { name: 'สมาชิกคนที่ 21', ig: '@member21' },
  { name: 'สมาชิกคนที่ 22', ig: '@member22' },
  { name: 'สมาชิกคนที่ 23', ig: '@member23' },
  { name: 'สมาชิกคนที่ 24', ig: '@member24' },
  { name: 'สมาชิกคนที่ 25', ig: '@member25' },
  { name: 'สมาชิกคนที่ 26', ig: '@member26' },
  { name: 'สมาชิกคนที่ 27', ig: '@member27' },
  { name: 'สมาชิกคนที่ 28', ig: '@member28' },
  { name: 'สมาชิกคนที่ 29', ig: '@member29' },
  { name: 'สมาชิกคนที่ 30', ig: '@member30' },
  { name: 'สมาชิกคนที่ 31', ig: '@member31' },
  { name: 'สมาชิกคนที่ 32', ig: '@member32' },
  { name: 'สมาชิกคนที่ 33', ig: '@member33' },
  { name: 'สมาชิกคนที่ 34', ig: '@member34' },
  { name: 'สมาชิกคนที่ 35', ig: '@member35' },
  { name: 'สมาชิกคนที่ 36', ig: '@member36' },
  { name: 'สมาชิกคนที่ 37', ig: '@member37' },
  { name: 'สมาชิกคนที่ 38', ig: '@member38' },
  { name: 'สมาชิกคนที่ 39', ig: '@member39' },
  { name: 'สมาชิกคนที่ 40', ig: '@member40' },
];

const track = document.getElementById('membersTrack');

memberList.forEach((member, index) => {
  const memberCard = document.createElement('div');
  memberCard.className = 'member-card';
  memberCard.innerHTML = `
    <div class="member-photo" style="background-image: url('${memberPhotos[index % memberPhotos.length]}')"></div>
    <div class="member-meta">
      <div class="member-name">${member.name}</div>
      <div class="member-ig">
        <span class="ig-badge"><img src="assets/members/instagram-logo.svg" alt="Instagram" /></span>
        ${member.ig}
      </div>
    </div>
  `;
  track.appendChild(memberCard);
});

const announceList = [
  { date: '27 ส.ค. 2569', title: 'Day Camp ครั้งที่ 2', desc: 'จัดขึ้นวันที่ 27 สิงหาคม 2569 พร้อมกิจกรรมและการอบรมเพื่อพัฒนาทักษะของสมาชิก', tag: 'กิจกรรม' },
];

const announceContainer = document.getElementById('announceList');
announceList.forEach((item) => {
  const el = document.createElement('div');
  el.className = 'announce-item';
  el.innerHTML = `
    <div class="announce-date">${item.date}</div>
    <div>
      <div class="announce-title">${item.title}</div>
      <div class="announce-desc">${item.desc}</div>
    </div>
    <div class="announce-tag">${item.tag}</div>
  `;
  announceContainer.appendChild(el);
});

const lightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

const openLightbox = (src, alt) => {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightboxCaption.textContent = alt || 'ภาพกิจกรรม';
  lightbox.classList.add('open');
  lightbox.style.visibility = 'visible';
  lightbox.style.opacity = '1';
  lightbox.style.pointerEvents = 'auto';
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove('open');
  lightbox.style.visibility = 'hidden';
  lightbox.style.opacity = '0';
  lightbox.style.pointerEvents = 'none';
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  document.body.style.overflow = '';
};

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item) => {
  const img = item.querySelector('img');
  if (!img) return;

  item.addEventListener('click', () => openLightbox(img.src, img.alt || item.querySelector('.gallery-cap')?.textContent || 'ภาพกิจกรรม'));
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target.dataset.close === 'true' || event.target === lightbox) closeLightbox();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navItems.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });
}

const updateActiveNav = () => {
  const sections = document.querySelectorAll('section[id], header.hero');
  let currentSection = sections[0]?.id || 'members';

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 140 && rect.bottom >= 140) {
      currentSection = section.id || 'members';
    }
  });

  navItems.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentSection}`;
    link.classList.toggle('active', isActive);
  });
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => revealObserver.observe(el));

window.addEventListener('scroll', () => {
  updateActiveNav();

  if (window.scrollY > 500) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('mousemove', (event) => {
  if (window.innerWidth <= 760) return;

  cursorGlow.style.opacity = '1';
  cursorGlow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

window.addEventListener('mouseleave', () => {
  cursorGlow.style.opacity = '0';
});

updateActiveNav();


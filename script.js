const categories = [
  "Arms up", "Basketball", "Chair", "Creative", "Dance",
  "Female", "Flowers", "Football", "Hat", "Hockey",
  "Laying Down", "Male", "Money Maker", "Montage", "Music",
  "Nature", "Seated", "Soccer", "Softball", "Sport",
  "Standing", "Swim", "Tennis", "Track", "Urban",
  "Vehicle", "Volleyball", "Water"
];

// Dummy pose ideas (replace with your own images or data)
const poses = [
  { title: "Seated on Chair", categories: ["Chair", "Female", "Seated"] },
  { title: "Laying Down Pose", categories: ["Laying Down", "Nature"] },
  { title: "Basketball Action", categories: ["Basketball", "Sport", "Male"] },
  { title: "Urban Fashion", categories: ["Urban", "Standing", "Male"] }, 
  { url: "https://www.athletico.com/blog2/wp-content/uploads/2012/07/Istock-swimmer-032410.jpg", categories: ["Swim", "Male"] },
];

let activeCategory = null;

function createButtons() {
  const buttonContainer = document.getElementById('filterButtons');
  categories.forEach(category => {
    const btn = document.createElement('button');
    btn.textContent = category;
    btn.className = 'filter-button';
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-button').forEach(b => b.classList.remove('active'));
      if (activeCategory === category) {
        activeCategory = null;
      } else {
        btn.classList.add('active');
        activeCategory = category;
      }
      renderGallery();
    });
    buttonContainer.appendChild(btn);
  });
}

function renderGallery() {
  const gallery = document.getElementById('poseGallery');
  gallery.innerHTML = '';
  const filtered = activeCategory
    ? poses.filter(p => p.categories.includes(activeCategory))
    : poses;

  filtered.forEach(pose => {
    const card = document.createElement('div');
    card.className = 'pose-card';

    // Add title if available
    if (pose.title) {
      const title = document.createElement('h3');
      title.textContent = pose.title;
      card.appendChild(title);
    }

    // Add image if URL is available
    if (pose.url) {
      const img = document.createElement('img');
      img.src = pose.url;
      img.alt = pose.title || 'Pose Image';
      img.style.width = '100%'; // Adjust as needed
      card.appendChild(img);
    }

    gallery.appendChild(card);
  });
}

createButtons();
renderGallery();

const categories = [
  "Arms up", "Basketball", "Chair", "Creative", "Dance",
  "Female", "Flowers", "Football", "Hat", "Hockey",
  "Laying Down", "Male", "Money Maker", "Montage", "Music",
  "Nature", "Seated", "Soccer", "Softball", "Sport",
  "Standing", "Swim", "Tennis", "Track", "Urban",
  "Vehicle", "Volleyball", "Water"
];

// Sample pose data (add more or replace with your real data)
const poses = [
  { title: "Seated on Chair", categories: ["Chair", "Female", "Seated"] },
  { title: "Laying Down Pose", categories: ["Laying Down", "Nature"] },
  { title: "Basketball Action", categories: ["Basketball", "Sport", "Male"] },
  { title: "Urban Fashion", categories: ["Urban", "Standing", "Male"] },
  { title: "Swimwear Shot", categories: ["Swim", "Female"] },
];

let activeCategories = [];

function createButtons() {
  const buttonContainer = document.getElementById('filterButtons');
  categories.forEach(category => {
    const btn = document.createElement('button');
    btn.textContent = category;
    btn.className = 'filter-button';
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      if (activeCategories.includes(category)) {
        activeCategories = activeCategories.filter(c => c !== category);
      } else {
        activeCategories.push(category);
      }
      renderGallery();
    });
    buttonContainer.appendChild(btn);
  });
}

function renderGallery() {
  const gallery = document.getElementById('poseGallery');
  gallery.innerHTML = '';

  const filtered = poses.filter(pose =>
    activeCategories.every(cat => pose.categories.includes(cat))
  );

  const displayList = activeCategories.length === 0 ? poses : filtered;

  if (displayList.length === 0) {
    gallery.innerHTML = '<p>No poses match all selected categories.</p>';
    return;
  }

  displayList.forEach(pose => {
    const card = document.createElement('div');
    card.className = 'pose-card';
    card.textContent = pose.title;
    gallery.appendChild(card);
  });
}

createButtons();
renderGallery();

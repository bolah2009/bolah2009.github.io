if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(r => r)
      .catch(e => e);
  });
}

const navbarToggle = document.querySelector('.navbar-toggle');
const navList = document.querySelector('.nav-list');
const brandLogo = document.querySelector('.brand-logo-btn');

const addActiveSection = id => {
  const currentActiveElement = document.querySelector('.active-nav');
  const currentSectionElement = document.querySelector('.current-section');

  if (currentActiveElement) {
    if (currentActiveElement.dataset.id === id) {
      return;
    }
    currentActiveElement.classList.remove('active-nav');
  }

  const target = document.querySelector(`.nav-list-link[data-id="${id}"]`);
  currentSectionElement.textContent = id;
  target.classList.add('active-nav');
};

navbarToggle.addEventListener('click', () => {
  navList.classList.toggle('hide');
});

navList.addEventListener('click', ({ target }) => {
  navList.classList.add('hide');
  const {
    dataset: { id },
  } = target;
  if (!id) {
    return;
  }
  addActiveSection(id);
});

brandLogo.addEventListener('click', () => addActiveSection('home'));

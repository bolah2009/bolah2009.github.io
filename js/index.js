import handleFormSubmit from './handleFormSubmit'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((r) => r)
      .catch((e) => e)
  })
}

const navbarToggle = document.querySelector('.navbar-toggle')
const navList = document.querySelector('.nav-list')
const brandLogo = document.querySelector('.brand-logo-btn')

const addActiveSection = (id) => {
  const currentActiveElement = document.querySelector('.active-nav')
  const currentSectionElement = document.querySelector('.current-section')

  if (currentActiveElement) {
    if (currentActiveElement.dataset.id === id) {
      return
    }
    currentActiveElement.classList.remove('active-nav')
  }

  const target = document.querySelector(`.nav-list-link[data-id="${id}"]`)
  currentSectionElement.textContent = id
  target.classList.add('active-nav')
}

navbarToggle.addEventListener('click', () => {
  navList.classList.toggle('hide')
})

navList.addEventListener('click', ({ target }) => {
  navList.classList.add('hide')
  const {
    dataset: { id },
  } = target
  if (!id) {
    return
  }
  addActiveSection(id)
})

brandLogo.addEventListener('click', () => addActiveSection('home'))

const sectionPositions = () => {
  let data = []
  const get = () => data

  const update = () => {
    let updatedData = []
    const ids = ['home', 'about', 'projects', 'contact']

    ids.forEach((id, index) => {
      const currentSection = {}
      const { scrollHeight } = document.body
      const { height } = document
        .querySelector(`#${id}`)
        .getBoundingClientRect()
      currentSection.id = id
      currentSection.top = index === 0 ? 0 : updatedData[index - 1].bottom
      const currentSectionHeight = height + currentSection.top
      currentSection.bottom =
        index === ids.length - 1 ? scrollHeight : currentSectionHeight

      updatedData = [...updatedData.concat(currentSection)]
    })

    data = [...updatedData]
  }

  update()

  return { get, update }
}

const scrollPositions = sectionPositions()

window.addEventListener('resize', () => scrollPositions.update())

document.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY

  scrollPositions.get().some(({ top, bottom, id }) => {
    const sectionIsInView =
      currentScrollPosition >= top && currentScrollPosition < bottom
    if (sectionIsInView) {
      addActiveSection(id)
    }
    return sectionIsInView
  })
})

handleFormSubmit()

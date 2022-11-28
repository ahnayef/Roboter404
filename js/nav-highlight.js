
// Highlight navigation on scroll - https://github.com/ahngit

 /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
/**
   * Easy on scroll event listener 
   */
 const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

// main nav selector 

let navbarlinks = select('.header-nav__content .smoothscroll', true)
const navbarlinksActive = () => {
  let position = window.scrollY + 200
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return
    let section = select(navbarlink.hash)
    if (!section) return
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('header-nav__active')
    } else {
      navbarlink.classList.remove('header-nav__active')
    }
  })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)

console.log('Loaded!')
const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('navLinks')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open')
  navLinks.classList.toggle('open')
})

const reveals = document.querySelectorAll('.reveal')

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0, rootMargin: '0px 0px -50px 0px' })

reveals.forEach(el => observer.observe(el))

// COUNTERS
const counters = document.querySelectorAll('.stat-num')
counters.forEach(counter => {
  const target = parseInt(counter.getAttribute('data-target'))
  let current = 0
  const increment = target / 100
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      counter.textContent = target + '+'
      clearInterval(timer)
    } else {
      counter.textContent = Math.floor(current)
    }
  }, 15)
})

// FORM VALIDATION
const form = document.getElementById('contactForm')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const message = document.getElementById('message')
  let isValid = true

  document.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'))
  document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('input-error'))

  if (name.value.trim() === '') {
    name.classList.add('input-error')
    document.getElementById('nameError').classList.add('show')
    isValid = false
  }
  if (!email.value.includes('@')) {
    email.classList.add('input-error')
    document.getElementById('emailError').classList.add('show')
    isValid = false
  }
  if (message.value.trim() === '') {
    message.classList.add('input-error')
    document.getElementById('messageError').classList.add('show')
    isValid = false
  }
  if (isValid) {
    document.getElementById('successMsg').classList.add('show')
    form.reset()
  }
})
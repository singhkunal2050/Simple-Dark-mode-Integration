let button = document.querySelector('.btn')

 // press the button to toggle the .dark-mode class
button.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')
  document.querySelectorAll('.inverted').forEach((result) => {
    result.classList.toggle('invert')
  });


})

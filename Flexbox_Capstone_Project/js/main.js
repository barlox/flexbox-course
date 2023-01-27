document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menu-visible');
    document.querySelector('.burger').classList.toggle('burger-click');
  })
})

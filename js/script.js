const buttonBurger = document.getElementsByClassName('burger_button')[0];
const links = document.getElementsByClassName('links')[0];

buttonBurger.addEventListener('click', () => {
    links.classList.toggle('active')
})

console.log('im here 2');

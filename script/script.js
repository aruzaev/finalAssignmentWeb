const planets = document.querySelectorAll('.planet');
const planetNames = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'sun'];

planets.forEach((planet, index) => {
  planet.addEventListener('click', () => {
    window.parent.location.href = `${planetNames[index]}.html`;
  });
});

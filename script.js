var images = [
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/angry.png?v=1691530730994', 
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/annoyed.png?v=1691530731291',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/excitement.png?v=1691530731630',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/hello.png?v=1691530731935',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/laugh.png?v=1691530732256',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/sad.png?v=1691530732520',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/shrug.png?v=1691530732803',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/sleep.png?v=1691530733216',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/sob.png?v=1691530733565',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/thinking.png?v=1691530733846'
];
var random = Math.floor(Math.random() * images.length);
var replace = images[random];
document.querySelector('img').setAttribute('src', replace);

var easterEggTexts = [
    'Mr. Rinth is working on it',
    'Mr. Rinth is doing an extra shift',
    'Rinth Inc. will never ask for your password',
    'Whoops, we\'re all out of fabric',
    'The bandits are coming!',
    'The British are coming!',
    'Should\'ve used NextJS',
    'Modrinth got lost in Labrinth'
]

function changeHeading() {
    const heading = document.querySelector('h1');
    const randomNumber = Math.random();
  
    if (randomNumber < 0.9) {
        heading.textContent = "We're doing some maintenance";
    } else {
        var random = Math.floor(Math.random() * easterEggTexts.length);
        var replace = easterEggTexts[random];
        heading.textContent = replace;
    }
}

function changeBirdApp() {
    const birdApp = document.getElementById('birdapp');
    const randomNumber = Math.random();

    if (randomNumber < 0.9) {
        birdApp.innerHTML = `<i class="fa-brands fa-x-twitter"></i>`;
    } else {
        birdApp.innerHTML = `<i class="fa-brands fa-twitter"></i>`;
    }
}
  
window.addEventListener('load', changeHeading);
window.addEventListener('load', changeBirdApp);
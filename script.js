var images = [
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/angry.png?v=1691457541340', 
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/annoyed.png?v=1691457542432',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/excitement.png?v=1691457543014',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/hello.png?v=1691457544375',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/laugh.png?v=1691457544772',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/sad.png?v=1691457545532',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/shrug.png?v=1691457546020',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/sleep.png?v=1691457546819',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/sob.png?v=1691457547233',
    'https://cdn.glitch.global/6e46548a-2923-41f7-86e2-880d7da16f88/thinking.png?v=1691457547767'
];
var random = Math.floor(Math.random() * images.length);
var replace = images[random];
document.querySelector('img').setAttribute('src', replace);

var easterEggTexts = [
    'Mr. Rinth is working on it',
    'Mr. Rinth is doing an extra shift'
]

function changeHeading() {
    const heading = document.querySelector('h1');
    const randomNumber = Math.random();
  
    if (randomNumber < 0.8) {
        heading.textContent = "We're doing some maintenance";
    } else {
        var random = Math.floor(Math.random() * easterEggTexts.length);
        var replace = easterEggTexts[random];
        heading.textContent = replace;
    }
}
  
window.addEventListener('load', changeHeading);
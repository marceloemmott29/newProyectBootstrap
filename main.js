const app = document.getElementById('typewriter');
const typewriter = new Typewriter(app, {
  loop: true,
  delay:80,
});

typewriter
.typeString('la capital del sol')
.pauseFor(200)
.start();
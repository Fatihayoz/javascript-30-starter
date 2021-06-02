const shadow = (e) => {
  const hero = document.querySelector(".hero");
  const text = hero.querySelector("h1");
  const walk = 500; // 500px
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (e.currentTarget !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);
};

export { shadow };

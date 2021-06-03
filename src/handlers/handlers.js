const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

export { removeTransition };

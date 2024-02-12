class RandomBg {
  constructor() {
    this.init();
  }

  init() {
    setInterval(this.setRandomColor, 1000);
  }

  setRandomColor = () => {
    const newColor = "#" + Math.floor(Math.random() * 16777215);
    document.body.style.background = newColor;
  };
}

const RandBgColor = new RandomBg();

export default RandomBg;

import Component from "../Component/Component.js";

class Card extends Component {
  character;

  constructor(parentElement, element, character) {
    super(parentElement, "div");

    this.character = character;

    this.element.innerHTML = `<div></div>`;
  }
}

export default Card;

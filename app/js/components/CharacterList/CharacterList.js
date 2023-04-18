import CharacterCard from "../CharacterCard/CharacterCard.js";
import Component from "../Component/Component.js";

class CharacterList extends Component {
  characters;

  constructor(parentElement, characters) {
    super(parentElement, "ul", "characters-list row list-unstyled");

    this.characters = characters;
    this.renderHtml();
  }

  renderHtml() {
    this.characters.forEach(
      (character) => new CharacterCard(this.element, character)
    );
  }
}

export default CharacterList;

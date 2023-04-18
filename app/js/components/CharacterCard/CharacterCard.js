import Component from "../Component/Component.js";

class CharacterCard extends Component {
  character;

  constructor(parentElement, character) {
    super(parentElement, "li", "character col");
    this.character = character;
    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `<div class="card character__card">
          <img src="img/${
            this.character.characterData.imageSource
          }" alt="Character's Name and family" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${
              this.character.characterData.name
            } ${this.character.characterData.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>${this.character.characterData.age}</li>
                 <li>
                  State:
                  ${
                    this.character.isAlive
                      ? `<i class="fas fa-thumbs-up"></i>`
                      : `<i class="fas fa-thumbs-down"></i>`
                  } 
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                 ${
                   this.character?.yearsOfReign
                     ? `<li>Years of Reign: ${this.character.yearsOfReign}</li>`
                     : ""
                 }
                 ${
                   this.character?.weapon
                     ? `<li>Weapon: ${this.character.weapon}</li>`
                     : ""
                 }
                ${
                  this.character?.dexterity
                    ? `<li>Dexterity: ${this.character.dexterity}</li>`
                    : ""
                }
                ${
                  this.character?.kissAssLevel
                    ? `<li>Kiss Ass Level: ${this.character.kissAssLevel}</li>`
                    : ""
                }
                 ${
                   this.character?.advises
                     ? `<li>Advises to: ${this.character.advises.characterData.name}</li>`
                     : ""
                 }
                 ${
                   this.character?.serves
                     ? `<li>Serve to: ${this.character.serves.characterData.name}</li>`
                     : ""
                 }
              </ul>
              <div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>`;
  }
}

export default CharacterCard;

import characters from "./characters/characters.js";
import CharacterList from "./components/CharacterList/CharacterList.js";
import Component from "./components/Component/Component.js";

const selector = document.querySelector(".app");

const text = new Component(selector, "div", "hola");
const characterList = new CharacterList(selector, characters);

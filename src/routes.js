import Menu from './Menu.svelte';
import Honnleath from './puzzles/Honnleath.svelte';
import Anagram from './puzzles/Anagram.svelte';

const routes = {
  "/": Menu,
  "/Honnleath": Honnleath,
  "/anagram": Anagram
};

export default routes;

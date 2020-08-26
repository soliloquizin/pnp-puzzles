import Menu from './Menu.svelte';
import Honnleath from './puzzles/Honnleath.svelte';
import Anagram from './puzzles/Anagram.svelte';
import Valves from './puzzles/Valves.svelte';

const routes = {
  "/": Menu,
  "/Honnleath": Honnleath,
  "/anagram": Anagram,
  "/valves": Valves
};

export default routes;

import Menu from './Menu.svelte';
import Honnleath from './puzzles/Honnleath.svelte';
import Anagram from './puzzles/Anagram.svelte';
import Valves from './puzzles/Valves.svelte';
import GmCheatSheet from './GmCheatSheet.svelte';

const routes = {
  "/": Menu,
  "/Honnleath": Honnleath,
  "/anagram": Anagram,
  "/valves": Valves,
  "/gm": GmCheatSheet
};

export default routes;

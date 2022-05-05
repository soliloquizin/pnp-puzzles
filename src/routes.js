import Menu from './Menu.svelte';
import Honnleath from './puzzles/Honnleath.svelte';
import Anagram from './puzzles/Anagram.svelte';
import Valves from './puzzles/Valves.svelte';
import WordDiscs from './puzzles/WordDiscs.svelte';
import GmCheatSheet from './GmCheatSheet.svelte';

const routes = {
  "/": Menu,
  "/honnleath": Honnleath,
  "/anagram": Anagram,
  "/valves": Valves,
  "/word-discs": WordDiscs,
  "/gm": GmCheatSheet
};

export default routes;

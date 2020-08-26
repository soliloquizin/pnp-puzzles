# PnP Puzzles

[Puzzles in action](https://soliloquizin.github.io/pnp-puzzles/)  
I hope you & your group have as much fun with it as we do!

## Idea

As a GM I was struggling to challenge my players with puzzles without having props they could touch. Since we started to play on a VTT, I switched mainly to riddles or simple puzzles that could be explained verbally very easily. My players gave me the feedback that they would like more challenging puzzles, so I thought to myself: "I'm a programmer after all, so let's go!".

So, this is my puzzle-platform I am currently and will be using. If you or your GM have the same struggles as I had, feel free to use these puzzles for your gaming sessions as well!

## Contribution

Feel free to add your own or requested puzzles (see "new" issue-cards) - just open a PR.  
If you have a great idea for a puzzle, but do not feel comfortable coding it, please create an issue and label it "new".  
**Please make sure you're allowed to use the art you use in your puzzle-submissions!**

### get your name on it

![example of a contributor mention on a puzzle](https://raw.githubusercontent.com/soliloquizin/pnp-puzzles/master/public/assets/readme-contributor-mention-example.JPG)

In your puzzle-component import the contributor-type

```ts
import type { contributor } from "../puzzleHeader.svelte";
```

... add your information to a contributor variable

```ts
const contributor: contributor = {
  name: "soliloquizin",
  link: "https://github.com/soliloquizin"
};
```

... and hand it over to the puzzleHeader-component

```ts
<PuzzleHeader puzzleName={"Super Epic Puzzle"} puzzleHelp={"infoText"} contributor={contributor} />
```

---

## Get started

To start the app for development run:

```bash
npm run dev
```

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`.

## Deploying to githubpages

After building the app, run:
```bash
npm run deploy
```

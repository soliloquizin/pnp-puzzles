# PnP Puzzles

[Puzzles in action](https://corneliapelech.github.io/pnp-puzzles/)  
I hope you & your group have as much fun with it as we do!

## Idea

As a GM I was struggling to challenge my players with puzzles without having props they could touch. Since we started to play on a VTT, I switched mainly to riddles or simple puzzles that could be explained verbally very easily. My players gave me the feedback that they would like more challenging puzzles, so I thought to myself: "I'm a programmer after all, so let's go!".

So, this is my puzzle-platform I am currently and will be using. If you or your GM have the same struggles as I had, feel free to use these puzzles for your gaming sessions as well!

## Contribution

Feel free to add your own or requested puzzles (see "new" issue-cards) - just open a PR.  
If you have a great idea for a puzzle, but do not feel comfortable coding it, please create an issue and label it "new".  
**Please make sure you're allowed to use the art you use in your puzzle-submissions!**

### get your name on it

![example of a contributor mention on a puzzle](https://raw.githubusercontent.com/corneliapelech/puzzles/master/assets/readme-contributor-mention-example.jpg)

In your puzzle-component import the contributor-type

```ts
import type { contributor } from "../puzzleHeader.svelte";
```

... add your information to a contributor variable

```ts
const contributor: contributor = {
  name: "soliloquizin",
  link: "https://github.com/corneliapelech"
};
```

... and hand it over to the puzzleHeader-component

```ts
<PuzzleHeader puzzleName={"Super Epic Puzzle"} puzzleHelp={"infoText"} contributor={contributor} />
```

---

## Get started

... then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

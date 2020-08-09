(Get-Content c:/Users/Public/Projects/pnp-puzzles/public/index.html).replace('/build', '/pnp-puzzles/build') | Set-Content c:/Users/Public/Projects/pnp-puzzles/public/index.html
(Get-Content c:/Users/Public/Projects/pnp-puzzles/public/index.html).replace('/global', '/pnp-puzzles/global') | Set-Content c:/Users/Public/Projects/pnp-puzzles/public/index.html
(Get-Content c:/Users/Public/Projects/pnp-puzzles/public/build/bundle.js).replace('pnp-puzzles/pnp-puzzles', 'pnp-puzzles') | Set-Content c:/Users/Public/Projects/pnp-puzzles/public/build/bundle.js

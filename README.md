# Dawei Blog

[![github pages](https://github.com/daweichin/daweichin.github.io/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/daweichin/daweichin.github.io/actions/workflows/gh-pages.yml)

Made with Hugo

## Adding content
Hugo archetypes
Ensure posts.md exists in /archetypes, then run:
```hugo new posts/japan-2019-cycle/day3.md```
```hugo new posts/reflections/uni.md```

## Local Development
hugo server -D

## Building for Production
hugo -D

Preferred method to build is through pipeline
## Theme
theme from: https://github.com/adityatelange/hugo-PaperMod
```
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
git submodule update --init --recursive # needed when you reclone your repo (submodules may not get cloned automatically)
// TO UPDATE THEME:
git submodule update --remote --merge
```

## Github Settings
https://gohugo.io/hosting-and-deployment/hosting-on-github/

Deployment source --> GitHub Actions
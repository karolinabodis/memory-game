# <h1 align="center">Web Memory Game</h1>

[<p align="center"><img src="https://user-images.githubusercontent.com/78912800/161592012-c65301e3-6e7b-400c-bd1f-4d8c476e2718.png" width="450"/></p>](https://karolinabodis.github.io/memory-game/)

## Installation / Build Setup

Install the dependencies:

```bash
npm install
```

Run the project:

```bash
npm run start
```

## Overview

### What is this project?

Memory Game is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to collect the most matching pairs.

### How does it work?

By clicking on NEW GAME button the cards become shuffled. The rules given here are for a standard deck of 24 cards, which are laid face down in four rows of 6 cards each.

Click here for [live preview](https://karolinabodis.github.io/memory-game/).

## User Guide

The first player chooses a card and carefully turns it over.

The player then selects another card and turns it over. If the two cards are a matching pair for example two matching cats then they take the two cards and start a stack. The player is awarded another turn for making a match and goes again. If the cards are not a match they are turned back over and it is now the next players turn.

The next player chooses their first card and turns it over. If it is a match for one of the cards the previous player turned over then they try to remember where that matching card was and turn it. If they are successful at making a match they place the cards in their stack and choose another card. If the first card turned over was not a match for one previously turned over the player selects another card in an attempt of making a pair. If they are unsuccessful in making a match they flip the cards back over and play is passed to the next player.

A players turn is not over until they are unable to make a matching pair.

The game continues in this fashion until all the cards are played.

### Winning the Game

Once all the cards have been played the player with the most matching pairs is the winner.

### Tip

Just because it is another players turn doesn't mean you should stop paying attention. The cards that other players flip over could be the match you're looking for.

## Features

1. The game is single-player and runs on one browser client, multiple players can be supported by playing a hot-seat game (taking turns in the same web app).
2. The web app uses a set of random images for memory cards fetched from [CAT API](https://docs.thecatapi.com/api-reference/images/images-search).
3. The app tracks the current and end result.

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
and was styled using the utility-first CSS framework [TailwindCSS](https://github.com/tailwindlabs/tailwindcss).

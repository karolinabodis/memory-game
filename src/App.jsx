import { useState, useEffect } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
	let cardImages = [];

	// save the data from API
	const [allData, setAllData] = useState([]);
	// save the shuffled cards
	const [cards, setCards] = useState([]);
	// user card selection - based on click and update the State
	const [cardOne, setCardOne] = useState([null]);
	const [cardTwo, setCardTwo] = useState([null]);
	// keep track of guessed card pairs and card turns
	const [counter, setCounter] = useState(-1);
	const [turns, setTurns] = useState(-1);
	// disable the other cards when 2 is selected
	const [disabled, setDisabled] = useState(false);

	// fetch new Data from CAT API after 1st initial render and when cards array changes
	useEffect(() => {
		fetch(
			"https://api.thecatapi.com/v1/images/search?format=json&limit=12&mime_types=jpg&size=small"
		)
			.then((res) => res.json()) // parse JSON into JS
			.then((data) => setAllData(data)); // get DATA back
	}, [cards]);

	// add cat images and id to cardImages array
	allData.map((card) => {
		return cardImages.push({ id: card.id, url: card.url });
	});

	function shuffleCards() {
		// duplicate the cat images
		const shuffledCards = [...cardImages, ...cardImages]
			// randomize cat images
			.sort(() => Math.random() - 0.5)
			// cat images apply a unique randomId, matched boolean
			.map((card) => ({
				...card,
				randomId: Math.random().toString(),
				matched: false,
			}));

		setCards(shuffledCards);
		// reset when start a new game
		cardImages = [];
		setCounter(0);
		setTurns(0);
		// reset if either of one remained selected from previous a round
		setCardOne(null);
		setCardTwo(null);
	}

	// handle selected cards
	function handleSelect(card) {
		// if cardOne is null the 1st card was not selected update cardOne
		return cardOne ? setCardTwo(card) : setCardOne(card);
	}

	// compare the selected cards (fires: the component 1st mounts, then again when the cardOne || cardTwo changes)
	useEffect(() => {
		if (cardOne && cardTwo) {
			// all the other cards stay disabled
			setDisabled(true);
			if (cardOne.id === cardTwo.id) {
				setCards((prevCards) => {
					setCounter((prevCounter) => prevCounter + 1);
					// update matched cards State: find inside cards the selected card 'pair' and if its id matches with cardOne || cardTwo set to true its matched value
					return prevCards.map((card) => {
						if (card.id === cardOne.id) {
							return {
								...card,
								matched: true,
							};
						} else {
							return card;
						}
					});
				});

				resetSelection();
			} else {
				setCounter(counter);
				setTimeout(() => {
					resetSelection();
				}, 1000);
			}
		}
	}, [cardOne, cardTwo, counter]);

	// reset card selection
	function resetSelection() {
		setCardOne(null);
		setCardTwo(null);
		setTurns((prevTurns) => prevTurns + 1);
		setDisabled(false);
	}

	const card = cards.map((card) => (
		<Card
			key={card.randomId}
			card={card}
			handleSelect={handleSelect}
			flipped={card === cardOne || card === cardTwo || card.matched}
			disabled={disabled}
		/>
	));

	return (
		<div className="max-w-4xl py-10 mx-auto">
			<div className="grid grid-cols-2 grid-rows-4 gap-6 pb-10 md:grid-cols-4 lg:grid-cols-6">
				{card}
			</div>
			<div className="flex flex-row justify-center mb-4">
				{turns > 0 && <p className="text-xl">Turns: {turns}</p>}
				{counter > 0 && counter !== 12 ? (
					<p className="ml-10 text-xl">Guessed pairs: {counter}</p>
				) : (
					""
				)}
				{counter === 12 ? (
					<p className="ml-10 text-xl">Yay! You have found every cat.</p>
				) : (
					""
				)}
			</div>
			<div className="flex justify-center">
				<Button handleClick={shuffleCards} />
			</div>
		</div>
	);
}

export default App;

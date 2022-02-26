const deck = require('./deck')

const shuffledDeck = deck.map(c => ({ card: c.name, atk: c.atk || 0, def: c.def || 0 }))
	.sort(() => Math.random() - 0.5);

const half = ~~(deck.length / 2);

const message = (player) => {
	if (!player)
		return console.log('It was a tie!')

	console.log(`The ${player.name} won with "${player.card}"!!!`)
}

const duel = () => {

	let player1 = shuffledDeck.slice(0, half)

	let player2 = shuffledDeck.slice(-half)

	let victoryPile = []

	const judge = (p1, p2) => {
		if (p1.life < 0 === p2.life < 0) {
			const tribute1 = player1.splice(0, 2)
			const tribute2 = player2.splice(0, 2)
			victoryPile.push(p1, ...tribute1, p2, ...tribute2)
			return message()
		}

		if (p1.life > p2.life) {
			player1.push(p1, p2, ...victoryPile);
			victoryPile = []
			return message({ name: 'player1', ...p1 })
		}

		player2.push(p1, p2, ...victoryPile);
		victoryPile = []
		return message({ name: 'player2', ...p2 })
	}

	while (player1.length > 0 && player2.length > 0) {
		const p1 = player1.shift()
		const p2 = player2.shift()

		p1.life = p1.def - p2.atk
		p2.life = p2.def - p1.atk

		judge(p1, p2)
	}

	console.log(`Results:  player1: ${player1.length} | player2: ${player2.length} | victory pile: ${victoryPile.length}`)
}

duel()
import ballColors from "@/colors"
export const Config = {

	ballColor: ballColors,

	board: {
		size: {
			min: 4,
			max: 8,
		}
	},

	players: {
		number: {
			min: 2,
			max: 4,
		}
	}
}
import Phaser from 'phaser'


// import HelloWorldScene from './scenes/HelloWorldScene'

import MathFighterScene1 from './scenes/MathFighterScene1'
import MathFighterScene2 from './scenes/murid/MathFighterScene2'
import GameOverScene from './scenes/GameOverScene'

const config = {
	type: Phaser.AUTO,
	width: 480,
	height: 640,
	scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			debug : true
		}
	},
	scene: [MathFighterScene1, MathFighterScene2, GameOverScene],
	
}

export default new Phaser.Game(config)

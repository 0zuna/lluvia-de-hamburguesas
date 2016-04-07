window.onload = function() {
	var game = new Phaser.Game(886, 547, Phaser.AUTO, '', { preload: preload, create: create, update: update });

	function preload() {
		game.load.image('lluvia', 'http://peliculas.chiquipedia.com/images/peliculas-infantiles-lluvia-hamburguesas-2.jpg?phpMyAdmin=9ea091c51a5aa3cf876fb3cf0a5f7f3d');
		game.load.image('ground', 'assets/platform.png');
		game.load.image('star', 'assets/star.png');
		game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
		game.scale.pageAlignVertically = false;
        game.scale.pageAlignHorizontally = false;
	}

	function create() {
		game.add.sprite(0, 0, 'lluvia');
		
	}

	function update() {
	}


};
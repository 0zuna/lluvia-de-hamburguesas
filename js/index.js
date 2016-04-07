window.onload = function() {
	var game = new Phaser.Game("100", "100", Phaser.AUTO, '', { preload: preload, create: create, update: update });

	function preload() {
		game.load.image('lluvia', 'assets/cloudy-with-a-chance-of-meatballss.jpg');
		game.load.spritesheet('flint', 'assets/flint.png', 52, 121);
		game.load.image('hamburguesa','assets/hamburguesa.png')
		//game.scale.pageAlignVertically = true;
        //game.scale.pageAlignHorizontally = true;
        game.debug.text('Lluvia de Hamburguesas', 270, 16);
        console.log('preload');
        

	}

	function create() {
		
		lluvia=game.add.sprite(0, 0, 'lluvia');
		game.add.sprite(50,50,'flint');
		lluvia.height = game.height;
    	lluvia.width = game.width;
    	lluvia.smoothed = true;
		console.log('create')

    	hamburguesas = game.add.group();
    	hamburguesas.enableBody = true;

    	while (hamburguesas){
    	//var i=1;
        var burguer = hamburguesas.create(i * 70, 0, 'hamburguesa');
        burguer.body.gravity.y = Math.floor((Math.random() * 100) + 1); 
        burguer.body.bounce.y = 0.7 + Math.random() * 0.2;
        //i++;
    	}

       
	}

	function update() {
	}


};
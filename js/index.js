window.onload = function() {
	var game = new Phaser.Game("100", "100", Phaser.AUTO, '', { preload: preload, create: create, update: update });
	var platforms;
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

    	
    	for (var i=1;i<12;i++){
        var burguer = hamburguesas.create(i*Math.floor((Math.random() * 100) + 1) , 0, 'hamburguesa');
        burguer.body.gravity.y = Math.floor((Math.random() * 100) + 1); 
        burguer.body.bounce.y = 0.7 + Math.random() * 0.2;
    	}
        platforms = game.add.group();
        
	ground = platforms.create(0, game.world.height - 64, '');
	ground.enableBody = true;
    ground.scale.setTo(2, 2);
   	//ground.body.immovable = true;
    //var ledge = platforms.create(400, 400, 'lluvia');
    //ledge.body.immovable = true;
    //ledge = platforms.create(-150, 250, 'lluvia');
    //ledge.body.immovable = true;
    	

       
	}

	function update() {
	}


};
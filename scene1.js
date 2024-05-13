class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }
    preload(){
        this.load.image("background", "assets/background.jpg");
        // this.load.image('SpaceShip', "assets/SpaceShip.png");
        this.load.spritesheet('SpaceShip', 'assets/SpaceShipS.png', {
            frameWidth : 1024 / 2, 
            frameHeight : 512
        });
        this.load.spritesheet('explode', 'assets/Boom.png',{
            frameWidth : 480 / 2,
            frameHeight : 256
        })
    }
    create(){
        this.add.text(20, 20, "Loading Game ...");
        this.scene.start("PlayGame");
    }
}
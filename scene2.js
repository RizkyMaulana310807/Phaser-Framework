class Scene2 extends Phaser.Scene{
    constructor(){
        super("PlayGame");
    }
    create(){
        this.background = this.add.tileSprite(0, 0, 256, 272, "background")
        this.background.setOrigin(0, 0);
        
        this.ship = this.add.sprite(256 /2 - 50, 272 / 2, 'SpaceShip')
        this.ship.setScale(0.1);
        // this.ship.flipY = true;
        // this.ship.angle += 30;

        this.anims.create({
            key : 'ship1_anim',
            frames : this.anims.generateFrameNumbers('SpaceShip'),
            frameRate : 20,
            repeat : -1
        });
        this.anims.create({
            key: 'explode_anims',
            frames : this.anims.generateFrameNumbers('explode'),
            frameRate : 20,
            repeat : 0, 
            hideOnComplete : true
        });
        
        this.ship.play('ship1_anim')
        this.ship.setInteractive();
        this.input.on('gameobjectdown', this.destroyShip, this)
        this.add.text(20, 20, "Playing Game", {font : "25px Arial", fill : "yellow"});
        
    }
    moveShip(ship, speed){
        ship.y += speed
        if(ship.y > 272){
            this.resetPosition(this.ship);
        }
    }
    resetPosition(ship){
        ship.y = 0;
        var randomX = Phaser.Math.Between(0, 256)
        ship.x = randomX;
    }
    destroyShip(pointer, gameobject){
        gameobject.setTexture('explode');
        gameobject.play('explode_anims');
    }
    update(){
        this.moveShip(this.ship, 1)
        this.background.tilePositionY -= 0.5;
        // this.background.tilePositionX -= 1;
    }
    
}
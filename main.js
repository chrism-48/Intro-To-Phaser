let config = {
    type: Phaser.AUTO,
    backgroundColor:'#FFFFFF',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

// var atlasFrame;
let singleImage;

function preload() {
    this.load.image('arrows','./images/arrows.svg')
    

}

function create() {

    
    singleImage = this.add.image(300, 400, 'arrows');

}

function update() { 

    singleImage.rotation += .53;

}
'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var background;
var flappy;
var top_pipe;
var bottom_pipe;
var cursors;
var pipey;
//var flap;

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image('background','background.gif');
  game.load.spritesheet('flappy','Flappy Bird (2).png', 64, 21);
  game.load.image('top_pipe','top-pipe.gif');
  game.load.image('bottom_pipe','bottom-pipe.gif');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  background = game.add.tileSprite(0,0,320,568,'background');
  background.autoScroll(-100,0);
  flappy = game.add.sprite(20,300,'flappy');
  flappy.scale.set(1);
  flappy.smoothed = false;
  flappy.animations.add('fly',[0,1,2,3,4,5], 5, true);
  flappy.play('fly');
  game.physics.enable(flappy, Phaser.Physics.ARCADE);
  flappy.body.gravity.y = 500;
  //flap = flappy.body.velocity.y = -300;
  top_pipe = game.add.sprite(300,-400,'top_pipe');
  game.physics.enable(top_pipe, Phaser.Physics.ARCADE);
  top_pipe.body.velocity.x = -100;
  top_pipe.body.immovable = true;
  bottom_pipe = game.add.sprite(300,400,'bottom_pipe');
  game.physics.enable(bottom_pipe, Phaser.Physics.ARCADE);
  bottom_pipe.body.velocity.x = -100;
  bottom_pipe.body.immovable = true;
  cursors = game.input.keyboard.createCursorKeys();
  //game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
  //var flapKey = input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  //flapKey.onDown.add(flappy.flap, flappy);
  //input.onDown.add(flappy.flap, flappy);
}

function update() {
  if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    flappy.body.velocity.y = -300;
  }
  pipey = game.rnd.integerInRange(30,500);
  if (top_pipe.x < -50) {
    top_pipe.x = 300;
    top_pipe.y = pipey - 15;
  }
  if (bottom_pipe.x < -50) {
    bottom_pipe.x = 300;
    bottom_pipe.y = pipey + 15  
  }
  if (game.physics.arcade.collide(flappy, top_pipe)) {
    game.destroy();
  }
  if (game.physics.arcade.collide(flappy, bottom_pipe)) {
    game.destroy();
  }
}

function render() {
}

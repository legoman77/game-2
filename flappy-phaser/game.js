'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var background;
var flappy;
var top_pipe;
var cursors;

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image('background','background.gif');
  game.load.image('flappy','flappy.gif');
  game.load.image('top_pipe','top-pipe.gif');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  background = game.add.tileSprite(0,0,320,568,'background');
  background.autoScroll(-100,0);
  flappy = game.add.sprite(20,300,'flappy');
  game.physics.enable(flappy, Phaser.Physics.ARCADE);
  flappy.body.gravity.y = 200;
  top_pipe = game.add.sprite(300,-500,'top_pipe');
  game.physics.enable(top_pipe, Phaser.Physics.ARCADE);
  top_pipe.body.velocity.x = -300;
  if (top_pipe.x <= 0) {
    top_pipe.x = 300;
  }
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    flappy.body.velocity.y = -300;
  }
}

function render() {
}

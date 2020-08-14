var monkey, monkeyimg, bananagroup, bananaimg, stonegroup, stoneimg, backGround, backgroundimg;

function preload(){

monkeyimg = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
bananaimg = loadImage("Banana.png");
  
stoneimg = loadImage("stone.png");
  
backgroundimg = loadImage("jungle2.png")  

}

function setup() {
  createCanvas(400, 400);
  
  backGround = createSprite(200, 200, 400, 400);
  backGround.addImage("backGround", backgroundimg);
  
}

function draw() {
  background(220);
}
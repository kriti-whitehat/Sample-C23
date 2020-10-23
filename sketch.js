const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background("cyan");
    Engine.update(engine);
    
}
var Height = window.innerHeight*.97
var Width = window.innerWidth*.99
var hud
var blocks=[]
var blockH=40
var blockW=70.3
var pad 
function preload()
{
for (var x =0; x<9; x++)
{
 blocks[x]=[]
 for(var y =0; y<Height; y++)
{
 blocks[x][y]= new Block((x*(((Width*.3)+(Width*.7))/2)/9)+Width*.3,y*blockH,y,(((Width*.3)+(Width*.7))/2)/9)
}

}
noLoop();
}
function setup()
{
 createCanvas(Width,Height)
 hud= new Hud();
 pad = new Paddle((((Width*.3)+(Width*.7))/2),Height*.95);
}
function draw()
{
background(225)
hud.draw()
keyDown()
pad.draw()

}
function keyDown()
{
if (keyIsDown(65))
pad.x-=1
}
function Hud()
{
 this.draw = function()
	{
	line((Width*.3),Height,(Width*.3),0)
	line((Width*.7),Height,(Width*.7),0)
	for(var x=0; x<9; x++)
	{
	 blocks[x][1].draw()
	}
	}
}
function Block(x,y,l,s)
{
this.x=x
this.y=y
this.num=l+1
this.size=s
this.draw = function()
{
fill(255,0,0)
rect(this.x,this.y+30,(((Width*.3)+(Width*.7))/2)/9,this.s)
fill(0)
textSize(15)
text(this.size,this.x,this.y+25)
}
this.update = function()
{

}
}
function Paddle(x,y)
{
this.x=x
this.y=y
this.draw = function()
{
fill(0)
rect(this.x,this.y,100,30)
}
this.update = function()
{

}

}
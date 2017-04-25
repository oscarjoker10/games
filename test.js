var Height =680 //window.innerHeight*.97
var Width =1080// window.innerWidth*.99
var hud
var blocks=[]
var blockH=40
var blockW=70.3
var pad 
var right,left
var size
var speedx,speedy
function preload()
{
for (var x =0; x<8; x++)
{
 blocks[x]=[]
 for(var y =0; y<Height; y++)
{

 blocks[x][y]= new Block((x*(((Width*.3)+(Width*.7))/2)/10)+Width*.3,y*((Width*.3)+(Width*.7)/2)/25,y,(((Width*.3)+(Width*.7))/2)/10)
}

}
}
function setup()
{
speedx=speedy=6
 createCanvas(Width,Height)
frameRate(60);
smooth();
 hud= new Hud();
 pad = new Paddle((((Width*.3)+(Width*.7))/2),Height*.95);
}
function draw()
{

background(225)
hud.draw()

for (var y=0;y<9;y++)
{
for(var x=0; x<9; x++)
	{
	// blocks[x][y].draw()

	}
}
pad.draw()
ball();
}
function ball()
{
this.x=Width/2+speedx
this.y=Height/2+speedy
fill(0)
 ellipse(this.x,this.y,20,20)
if(this.y<0)
speedy+=8
if(this.y>Height)
speedy-=8
}




function keyPressed()
{
 if(key=='a'||key=='A')
 {
 left= true
 }
  if(key=='d'||key=='D')
 {
 right = true
 }
}
function keyReleased()
{
 if(key=='a'||key=='A')
 {
 left= false
 }
  if(key=='d'||key=='D')
 {
 right = false
 }
}

function Hud()
{
 this.draw = function()
	{
	line((Width*.3),Height,(Width*.3),0)
	line((Width*.7),Height,(Width*.7),0)
	
	}
}
function Block(x,y,l,s)
{
this.x=x
this.y=y
this.num=l+1
this.size=s
size=this.s
this.draw = function()
{
fill(255,0,0)
rect(this.x,this.y,this.size,this.size/2)
fill(0)
//textSize(15)
//text(this.size,this.x,this.y)
}
this.update = function()
{

}
}
function Paddle(x,y)
{
this.x=x
this.y=y

this.size=blocks[0][0].size*2
this.draw = function()
{
if(left==true&&this.x>Width*.3)
this.x-=7
if(right==true&&this.x<(Width*.7)-111)
this.x+=7
fill(0)
rect(this.x,this.y,this.size,this.size/4)
}
this.update = function()
{

}

}

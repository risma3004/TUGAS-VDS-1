function setup() {
createCanvas (800,400);
background(0,153,153);

x1 = 399,5;
y1 = 0;
x2 = 399;
y2 = 399,5;

x = 120;
y = 170;
lebar = 150;
tinggi = 100;

a = 190;
b = 120;
lebar1 = 8;
tinggi1 = 50;

a1 = 195;
b1 = 200;
lebar2 = 15;
tinggi2 = 15;

a2 = 215;
b2 = 200;
lebar3 = 15;
tinggi3 = 15;

a3 = 235;
b3 = 200;
lebar4 = 15;
tinggi4 = 15;

a4 = 255;
b4 = 200;
lebar5 = 15;
tinggi5 = 15;

a5 = 175;
b5 = 200;
lebar6 = 15;
tinggi6 = 15;

a6 = 155;
b6 = 200;
lebar7 = 15;
tinggi7 = 15;

a7 = 135;
b7 = 200;
lebar8 = 15;
tinggi8 = 15;

a8 = 195;
b8 = 100;
lebar9 = 15;
tinggi9 = 15;

p = 95;
q = 260;
lebar10 = 200;
tinggi10 = 10;

r =  100
s = 30

}

function draw() {
//line(x1,y1,x2,y2)

strokeWeight(4);
fill(0);
stroke("WHITE");
line(399,0,399,399);

strokeWeight(4);
fill(224,224,224);
stroke(224,224,224);
rect(a,b,lebar1,tinggi1)

var r = 100 + 30 * Math.sin(PI/10*s)
s+=1
strokeWeight(4);
strokeJoin(ROUND);
rect(120,170,150,100);
fill(r,r,0);
stroke(204,102,0);
rect(x,y,lebar,tinggi)

strokeWeight(4);
fill(64,64,64);
stroke(0);
rect(p,q,lebar10,tinggi10)


strokeWeight(4);
fill(255,255,0);
ellipse(a1,b1,lebar2,tinggi2)

strokeWeight(4);
fill(255,255,0);
ellipse(a2,b2,lebar3,tinggi3)

strokeWeight(4);
fill(255,255,0);
ellipse(a3,b3,lebar4,tinggi4)

strokeWeight(4);
fill(255,255,0);
ellipse(a4,b4,lebar5,tinggi5)

strokeWeight(4);
fill(255,255,0);
ellipse(a5,b5,lebar6,tinggi6)

strokeWeight(4);
fill(255,255,0);
ellipse(a6,b6,lebar7,tinggi7)

strokeWeight(4);
fill(255,255,0);
ellipse(a7,b7,lebar8,tinggi8)

strokeWeight(4);
fill(240,0,0);
ellipse(a8,b8,lebar9,tinggi9)


}
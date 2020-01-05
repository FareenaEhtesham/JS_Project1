<html>
    <head>
        <title>Snowy Background</title>
        <link href="./H1.js">
    </head>

<style>
body{
    background: #000000;
    overflow: hidden;
}



</style>

    <body>
        <img style="position: absolute;bottom: 0%;left:40%;height: 50%;" 
        src="./img1.png">
<!--by default canvas size is 300px-->
<canvas id="sky">
  
</canvas>

<div  id="x"></div>


    </body>

    <script>
    window.onload =function(){

var canvas=document.getElementById("sky");

var ctx=canvas.getContext("2d");

//set canvax dimensions to the window dimensions

var w= window.innerWidth;
var h=window.innerHeight;

canvas.width =w;
canvas.height =h;

//generate the snow flakes

var mf=130;   //max flakes are 100
var flakes = [];

for (var i=0 ;i<mf ;i++){

    flakes.push({

        x:Math.random()*w,    //flakes contain width
        y:Math.random()*h,      //flakes contain height
        r:Math.random()* 4+1,   // min of 2 and max of 7 b/c random generate 0-1 if 0*5+2=2(min) if random is 1 then 1*5+2
        d:Math.random() * 1,    // density of flake is 1

    })
}

//draw flakes

function drawFlakes(){
    ctx.clearRect(0 ,0, w ,h);
    ctx.fillStyle = "white";      //flake is white
    ctx.beginPath();               
    for(var i=0; i< mf ;i++){
        var f= flakes[i];
        ctx.moveTo(f.x, f.y);         
    //draw a circle
        ctx.arc(f.x ,f.y ,f.r ,0, Math.PI *2 ,true); //f.x and f.y are flakes along with position f.r is a 
        //radius and we are making a circle with 0degree and to 36degree(pi*2)
        
    }
    ctx.fill();
    moveFlakes();

}


//ANIMATE THE FLAKES
var angle=0;
function moveFlakes(){
    angle +=0.01;
    for (var i=0;i<mf ;i++){
        var f=flakes[i];

        //Change the coordinates when it animates
        f.y += Math.pow(f.d,2) +1;
        f.x +=Math.sin(angle) *2;
        
//When all flakes end then it starts again
        if(f.y >h){
            flakes[i]= {x:Math.random()*w,
            
            y:0, r:f.r, d:f.d};
        }

    }
}

setInterval(drawFlakes ,25);
}

   
    </script>




</html>

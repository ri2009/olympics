canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="black";
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.arc(300,400,20,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.arc(355,400,20,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(400,400,20,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=2;
ctx.arc(330,430,20,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.arc(360,430,20,0,2*Math.PI);
ctx.stroke();



canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    colour=document.getElementById("colour").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);
    }
    function circle(mouse_x,mouse_y){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=2;
        ctx.arc(mouse_x,mouse_y,20,0,2*Math.PI);
        ctx.stroke();  
    }
    function erase(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
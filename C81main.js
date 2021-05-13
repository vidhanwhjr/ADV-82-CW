var Mouse_Event= "empty";
var last_position_of_x, last_position_of_y ;
var line_width=7.659
var canvas= document.getElementById("Canvas1");
var ctx= canvas.getContext("2d");
var color = "red";
canvas.addEventListener("mousedown", My_mousedown);
function My_mousedown(e){
    Mouse_Event="mousedown";
}
canvas.addEventListener("mouseup", My_mouseup);
function My_mouseup(e){
    Mouse_Event="mouseup";
}
canvas.addEventListener("mouseleave", My_mouseleave);
function My_mouseleave(e){
    Mouse_Event="mouseleave";
}
canvas.addEventListener("mousemove", My_mousemove);
function My_mousemove(e){
    var current_position_of_x= e.clientX - canvas.offsetLeft;
    var current_position_of_y= e.clientY - canvas.offsetTop;
    
    if(Mouse_Event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=line_width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }
    last_position_of_y=current_position_of_y;
    last_position_of_x=current_position_of_x;
}

function ds(){
    ctx.clearRect(0,0, canvas.width,  canvas.height);
}
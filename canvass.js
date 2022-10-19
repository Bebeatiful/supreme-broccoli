cor = "black"
canvas = document.getElementById("myCanvas")
pincel = canvas.getContext("2D")
canvas.addEventListener("mousedown",myMousedown)
pincel.beginPath();
pincel.strokeStyle = cor 
pincel.fillStyle = cor
pincel.lineWidth = 5
pincel.arc(200,200,20,0,2*Math.PI)
pincel.stroke()
pincel.fill()
function myMousedown(e){
    mouseX = e.clientX - canvas.offsetLeft
    mouseY = e.clientY - canvas.offsetTop
    pcanetaincel (mouseX,mouseY)
}
function pcanetaincel(mouseX,mouseY){
    pincel.beginPath();
    pincel.strokeStyle = cor 
    pincel.fillStyle = cor
    pincel.arc(mouseX,mouseY,20,0,2*Math.PI)
    pincel.stroke()
    pincel.fill()
}

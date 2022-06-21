import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  setupDrawing(c){
    let ctx = c.getContext("2d")
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 400, 300);
    for(let i = 20; i<=400 ; i+=20){
      ctx.moveTo(i,0)
      ctx.lineTo(i,300)
      ctx.strokeStyle="#000"
      ctx.stroke()
    }
    for (let i =20; i<=300; i+=20){
      ctx.moveTo(0,i)
      ctx.lineTo(400,i)
      ctx.strokeStyle="#000"
      ctx.stroke()
    }
  }

  drawCanvas(c, tables){
  
    let ctx = c.getContext("2d")
    ctx.clearRect(0, 0, c.width, c.height);
    this.setupDrawing(c)
    ctx.beginPath()
    tables.forEach(table => {
      
      if (table.shape == "rectangle"){
        console.log(table)
        ctx.fillStyle="white"
        ctx.fillRect(table.startWidth, table.startHeight , table.width, table.height)
        ctx.fillStyle="black"
        ctx.fillText(table.id.toString(), table.startWidth+10, table.startHeight+10)
        ctx.stroke()
      }
      if(table.shape == "round"){
        ctx.strokeStyle="white"
        ctx.fillStyle = "white"
        ctx.arc(table.startWidth  , table.startHeight, table.radius, 0, 2 * Math.PI, false)
        ctx.fill()
        ctx.fillStyle="black"
        ctx.fillText(table.id.toString(), table.startWidth-table.radius*0.3, table.startHeight-table.radius*0.3)
        ctx.stroke()
        
      }
    
    });
    
  }

  fillTakenTable(c, table){
    let ctx = c.getContext("2d")
    ctx.fillStyle="red"
    ctx.font = "10px Arial";
    ctx.fillText("zauzet", table.startWidth + table.width * 0.1, table.startHeight + table.height * 0.8)
  }
}

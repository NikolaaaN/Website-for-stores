import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Table } from '../models/table';
import { CompanyService } from '../services/company.service';
import { TableService } from '../table.service';

@Component({
  selector: 'app-stolovi',
  templateUrl: './stolovi.component.html',
  styleUrls: ['./stolovi.component.css']
})
export class StoloviComponent implements OnInit {

  constructor(private companyService: CompanyService, private tableService: TableService) { }

  ngOnInit(): void {
    this.companyService.getCompanyByUsername().subscribe((company: Company) => {
      this.company = company
      this.object= this.company.objects[0].name
      
      this.companyLoaded=true

    this.companyService.getTables(this.object).subscribe((tables: Array<Table>) => {
      this.tables = tables
      this.drawCanvas()
      this.setupDrawing()
      this.fillTakenTables()
    })
    })
    this.oneTable.startHeight = 30
    this.oneTable.startWidth = 40
    this.oneTable.height=50
    this.oneTable.width= 50
    this.oneTable.shape= "rectangle"
    this.tables.push(this.oneTable)
    this.oneTable = new Table()
    this.oneTable.radius = 20
    this.oneTable.shape = "round"
    this.oneTable.startHeight = 100
    this.oneTable.startWidth = 240
    this.tables.push(this.oneTable)
    this.oneTable = new Table()
    this.oneTable.height=40
    this.oneTable.width= 80
    this.oneTable.startHeight = 20
    this.oneTable.startWidth = 160
    this.oneTable.shape= "rectangle"
    this.tables.push(this.oneTable)
    this.oneTable = new Table() 

    

  }

  oneTable : Table = new Table()
  tables: Array<Table> = []
  company: Company
  object: string
  tableID: number
  companyLoaded: boolean = false // resava onaj error ctx.company...

  startHeight: number = 0
  startWidth: number = 0
  shape: string
  height: number
  width: number
  radius: number
  taken: boolean = false
  showForm : boolean = false

  drawCanvas(){
    let c = document.getElementById("myCanvas");
    this.tableService.drawCanvas(c, this.tables)
  }


  showTableForm(){
    this.showForm = true
  }

  addTable(){
    this.oneTable.startHeight = this.startHeight
    this.oneTable.startWidth = this.startWidth
    this.oneTable.height = this.height
    this.oneTable.width = this.width
    this.oneTable.shape = this.shape
    this.oneTable.taken = this.taken
    this.oneTable.radius = this.radius
    this.oneTable.id = this.tableID
    this.companyService.addTable(this.object, this.oneTable).subscribe((message: string) => {
    })

  }
  selectObject(name){
    this.object = name
    this.companyService.getTables(this.object).subscribe((tables: Array<Table>) => {
      this.tables = tables
      this.drawCanvas()
      this.fillTakenTables()
    })
  }

  setupDrawing(){
    let c = document.getElementById("myCanvas");
    this.tableService.setupDrawing(c)
  }

  fillTakenTables(){
    let c = document.getElementById("myCanvas");
    this.tables.forEach(table => {

      if (sessionStorage.getItem(table.id.toString())!=null){
        this.tableService.fillTakenTable(c, table)
      }
    });
  }
}

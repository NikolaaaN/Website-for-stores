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
      this.fillTakenTables()
    })
    })
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
      if(tables.length>0)
        this.fillTakenTables()
    })
  }

  fillTakenTables(){
    console.log(this.tables)
    let c = document.getElementById("myCanvas");
    this.tables.forEach(table => {

      if (sessionStorage.getItem(table.id.toString())!=null){
        this.tableService.fillTakenTable(c, table)
      }
    });
  }
}

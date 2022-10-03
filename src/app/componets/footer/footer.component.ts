import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Footer } from 'src/app/model/footer';
import { FooterService } from 'src/app/service/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  public footers:Footer[]=[];
  deleteFooter: Footer | undefined;
  editFooter: Footer | undefined;

  constructor(private footerService:FooterService) { }

  ngOnInit(): void {
    this.getFooters();

  }
  public getFooters():void{
  this.footerService.getFooter().subscribe({
    next:(Response: Footer[]) =>{
      this.footers=Response;
    },
    error:(error:HttpErrorResponse) => {
    alert(error.message);
    }
  })
}

public onOpenModal(mode:String, footer?:Footer):void{
  const container=document.getElementById('main-container');
  const button=document.createElement('button');
  button.type='button';
  button.style.display='none';
  button.setAttribute('data-toggle','modal')
  if(mode === 'add') {
     button.setAttribute('data-target','#addFooterModal');
  } else if(mode==='delete'){
    this.deleteFooter=footer;
    button.setAttribute('data-target','#deleteFooterModal');
  }  else if(mode==='edit'){
    this.editFooter=footer;
    button.setAttribute('data-target','#editFooterModal');
  }
  container?.appendChild(button);
  button.click();

}
  public onAddFooter(addForm:NgForm): void {
    document.getElementById('add-footer-form')?.click();
    this.footerService.addFooter(addForm.value).subscribe({
       next: (response:Footer) =>{
        console.log(response);
        this.getFooters();
        addForm.reset();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
       }
       
    })
  
  }
  public onUpdateFooter(footer:Footer){
    this.editFooter=footer;
    document.getElementById('add-footer-form')?.click();
    this.footerService.updateFooter(footer).subscribe({
       next: (response:Footer) =>{
        console.log(response);
        this.getFooters();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
       }
    })
  }
  public onDeleteFooter(idFooter:number):void{
    this.footerService.deleteFooter(idFooter).subscribe({
       next: (response:void) =>{
        console.log(response);
        this.getFooters();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
       }
    })

}

}

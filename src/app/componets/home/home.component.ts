import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Home } from 'src/app/model/home';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public homes:Home[]=[];
  public deleteHome: Home | undefined;
  public editHome: Home | undefined;
  
   constructor(private homeService:HomeService) { }
 
   ngOnInit(): void {
    this.getHomes();

  }
  public getHomes():void{
  this.homeService.getHome().subscribe({
    next:(Response: Home[]) =>{
      this.homes=Response;
    },
    error:(error:HttpErrorResponse) => {
    alert(error.message);
    }
  })
}

public onOpenModal(mode:String, home?:Home):void{
  const container=document.getElementById('main-container');
  const button=document.createElement('button');
  button.type='button';
  button.style.display='none';
  button.setAttribute('data-toggle','modal')
  if(mode === 'add') {
     button.setAttribute('data-target','#addHomeModal');
  } else if(mode==='delete'){
    this.deleteHome=home;
    button.setAttribute('data-target','#deleteHomeModal');
  }  else if(mode==='edit'){
    this.editHome=home;
    button.setAttribute('data-target','#editHomeModal');
  }
  container?.appendChild(button);
  button.click();

}
  public onAddHome(addForm:NgForm): void {
    document.getElementById('add-home-form')?.click();
    this.homeService.addHome(addForm.value).subscribe({
       next: (response:Home) =>{
        console.log(response);
        this.getHomes();
        addForm.reset();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
       }
       
    })
  
  }
  public onUpdateHome(home:Home){
    this.editHome=home;
    document.getElementById('add-home-form')?.click();
    this.homeService.updateHome(home).subscribe({
       next: (response:Home) =>{
        console.log(response);
        this.getHomes();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
       }
    })
  }
  public onDeleteHome(idHome:number):void{
    this.homeService.deleteHome(idHome).subscribe({
       next: (response:void) =>{
        console.log(response);
        this.getHomes();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
       }
    })

}

}
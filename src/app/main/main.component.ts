import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private homeService: MainService, private titleService: Title) { }

  ngOnInit(): void {
    this.changeTitle();
  }

  changeTitle(): void {
    if(!this.titleService.getTitle().includes('Inicio')) {
      this.titleService.setTitle('Inicio - ' + this.titleService.getTitle());
    }
  }

  setContentTopMargin(margin: number): void {
    document.getElementById('content')!.style.marginTop = (margin + 25)+"px";
  }

}

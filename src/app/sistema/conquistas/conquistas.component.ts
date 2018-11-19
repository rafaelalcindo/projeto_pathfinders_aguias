import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-conquistas',
  templateUrl: './conquistas.component.html',
  styleUrls: ['./conquistas.component.css']
})
export class ConquistasComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public conquistaPage(): void {
    this.router.navigate(['/conquistas/classes']);
  }

}

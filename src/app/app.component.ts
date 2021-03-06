import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import * as THREE from 'three';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  implements OnInit  {

  constructor() { }

  ngOnInit(): void {
  }
  hover = false;
  active = false;

  onAnimate(mesh: THREE.Object3D) {
    mesh.rotation.x = mesh.rotation.y += 0.01;
  }

}

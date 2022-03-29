import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgtCoreModule,NgtColorPipeModule } from '@angular-three/core';
import {NgtSobaOrbitControlsModule} from '@angular-three/soba/controls';

import { NgtMeshModule } from '@angular-three/core/meshes';
import {  NgtMeshStandardMaterialModule } from '@angular-three/core/materials';
import { NgtBoxGeometryModule } from '@angular-three/core/geometries';
import {NgtGridHelperModule} from '@angular-three/core/helpers';
import {NgtAmbientLightModule, NgtSpotLightModule} from '@angular-three/core/lights';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgtCoreModule,
    NgtSobaOrbitControlsModule,
    NgtMeshModule,
    NgtMeshStandardMaterialModule,
    NgtBoxGeometryModule,
    NgtGridHelperModule,
    NgtAmbientLightModule, NgtSpotLightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

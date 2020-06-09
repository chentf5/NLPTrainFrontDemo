import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {loadGraphModel} from '@tensorflow/tfjs-converter';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  model: any;
  constructor() { }

  async ngOnInit() {
    this.model =  await loadGraphModel('web_model/model.json');
  }



}

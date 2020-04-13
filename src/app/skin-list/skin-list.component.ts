import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkinService } from '../services/skin.service';
import { Skin } from '../models/skin';

@Component({
  selector: 'app-skin-list',
  templateUrl: './skin-list.component.html',
  styleUrls: ['./skin-list.component.css']
})
export class SkinListComponent implements OnInit {
  skinList$: Skin[];
  constructor(public skinService: SkinService) { }

  ngOnInit(): void {
    this.getAllCustomSkins();
  }

  private getAllCustomSkins(): void {
    this.skinService.getAllSkins().subscribe(
      data => {
        this.skinList$ = data;
        console.log("Count of All skins: " + this.skinList$.length);
        this.skinList$ = this.skinList$.filter(this.customSkinsOnly);
        console.log("Count of custom skins: " + this.skinList$.length);
      }
    );
  }

  //filters
  customSkinsOnly(skin) {
    return skin.parent_skin_id > 0;
  }

  // TODO : how can I filter by multiple criterias
  // raceFilter(skin) {
  //   return 
  // }

}
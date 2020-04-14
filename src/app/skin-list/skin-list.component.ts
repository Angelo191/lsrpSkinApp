import { Component, OnInit } from '@angular/core';
import { SkinService } from '../services/skin.service';
import { Skin } from '../models/skin';

declare var $: any; //jquery alias
@Component({
  selector: 'app-skin-list',
  templateUrl: './skin-list.component.html',
  styleUrls: ['./skin-list.component.css']
})
export class SkinListComponent implements OnInit {
  skinList$: Skin[]; // this is the variable used to load skins on the page
  fullSkinList$: Skin[]; // this variable is a cache that holds the full list of skins loaded OnInit to avoid calling the API everytime
  constructor(public skinService: SkinService) { }

  ngOnInit(): void {
    this.getAllCustomSkins();
  }

  // display only custom skins and fill a cache with a full list, used later to reset following filter usage
  private getAllCustomSkins(): void {
    this.skinService.getAllSkins().subscribe(
      data => {
        this.skinList$ = data;
        this.skinList$ = this.skinList$.filter(this.customSkinsOnly);
        this.fullSkinList$ = this.skinList$;
        console.log("♦ Number of skins returned by the API: ");
        console.log("  • Custom Skins: " + this.skinList$.length);
        console.log("  • Default game Skins: " + (data.length - this.skinList$.length));
        console.log("  • Total: " + data.length);
      }
    );
  }


  // ==================== filters management ====================

  resetFilters(): void {
    this.skinList$ = this.fullSkinList$;
  }

  // used when the button reset is clicked
  clearFilters() : void {
    $('.selectpicker').selectpicker('deselectAll');
    this.resetFilters();

  }

  // submit makes sure to clear filters if existing then applies the currently selected ones
  applyFilters(): void {
    this.resetFilters();

    var filters = {
      races: $('#select-race').val(),
      genders: $('#select-gender').val(),
      weights: $('#select-weight').val(),
      categories: $('#select-category').val()
    }

    //only apply a specific filter if at least one element is selected from that category
    if (filters.races.length > 0)
      this.applyFilter('race', filters.races);
    if (filters.genders.length > 0)
      this.applyFilter('gender', filters.genders);
    if (filters.weights.length > 0)
      this.applyFilter('weight', filters.weights);
    if (filters.categories.length > 0)
      this.applyFilter('category', filters.categories);
  }

  // applied initially during component initialization to only display custom skins
  customSkinsOnly(skin) {
    return skin.parent_skin_id > 0;
  }

  // takes the type of filter (race, weight, etc) as well as the list of filters and performs the filtering
  applyFilter(type: string, filtersList): void {
    if (filtersList.length < 1) return console.log("no filters in " + type + " dropdown")
    this.skinList$ = this.skinList$.filter(x => {
      for (var key in filtersList) {
        if (filtersList[key] == x[type])
          return true
      }
    })
  }

}
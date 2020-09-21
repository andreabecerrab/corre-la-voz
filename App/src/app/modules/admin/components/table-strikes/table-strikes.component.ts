import { Component, OnInit } from '@angular/core';
import { Marcha } from 'src/app/models/Marcha';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { Observable, Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-table-strikes',
  templateUrl: './table-strikes.component.html',
  styleUrls: ['./tables.sass'],
})
export class TableStrikesComponent implements OnInit {
  strikes: Marcha[];
  private marchaSub: Subscription;
  private total: Subscription;
  selectedDelete: string;
  selectedEdit: Marcha;

  //pagination
  totalPost;
  currentPage = 1;
  strikePerPage = 10;
  paseSizeOption = [10, 20, 30];

  constructor(private _marchaServices: MarchaServiceService) {}

  ngOnInit() {
    this._marchaServices.getMarchas(this.strikePerPage, this.currentPage);
    this.marchaSub = this._marchaServices
      .getMarchasUpdatedListener()
      .subscribe((strikes: Marcha[]) => (this.strikes = strikes));
    this.total = this._marchaServices
      .getTotalPosts()
      .subscribe((total: number) => (this.totalPost = total));
  }
  delete(id: string) {
    this.selectedDelete = id;
  }
  confirmDelete() {
    this._marchaServices.deleteMarcha(
      this.selectedDelete,
      this.strikePerPage,
      this.currentPage
    );
  }
  edit(strike: Marcha) {
    this.selectedEdit = this.strikes.find((e) => e._id === strike._id);
  }

  onChangePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.strikePerPage = pageData.pageSize;
    this._marchaServices.getMarchas(this.strikePerPage, this.currentPage);
  }
}

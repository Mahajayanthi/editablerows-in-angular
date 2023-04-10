import { Component } from '@angular/core';
import { USER_DATA } from './matdata';
import { COLUMNS_SCHEMA } from './matdata';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-mat',
  templateUrl: './mat.component.html',
  styleUrls: ['./mat.component.scss']
})
export class MatComponent {
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;
  valid:any={}
  constructor(public dialog: MatDialog) {}
  addRow() {
    const newRow = {
      id:0,
      paymenttype: '',
      accountnumber:0,
      date: '',
      amount:0,
      comments:'',
      isEdit: true,
      isSelected:false
    };
    this.dataSource = [newRow, ...this.dataSource];
  }
  removeRow(id: number) {
    this.dataSource = this.dataSource.filter((u) => u.id !== id);
  }
  removeSelectedRows() {
    this.dialog
      .open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.dataSource = this.dataSource.filter((u: any) => !u.isSelected);
        }
      });
  }
  inputHandler(e: any, id: number, key: string) {
    if (!this.valid[id]) {
      this.valid[id] = {}
    }
    this.valid[id][key] = e.target.validity.valid
  }
  isAllSelected() {
    return this.dataSource.every((item: any) => item.isSelected);
  }
  isAnySelected() {
    return this.dataSource.some((item: any) => item.isSelected);
  }
  selectAll(event: any ) {
    this.dataSource = this.dataSource.map((item: any) => ({
      ...item,
      isSelected: event.checked,
    }));
  }
}


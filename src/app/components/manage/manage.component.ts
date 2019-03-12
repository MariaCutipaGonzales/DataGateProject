import { Component, OnInit, OnDestroy } from '@angular/core';
import { ManageService } from './services/manage.service';
import { Subscription } from 'rxjs';
import { ManageListBackend, ListDataManageViewer } from './models/manage.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit, OnDestroy {

  private manageListSubscriptor = new Subscription();
  private itemManageSubscriptor = new Subscription();

  public isEditable: boolean;
  public isListSelect: boolean;
  public dataViewer: ListDataManageViewer = {} as ListDataManageViewer;
  public dataManage: ManageListBackend[] = [];

  public editForm: FormGroup;
  public types = [
    { name: 'Integer' },
    { name: 'Decimal' },
    { name: 'String' },
    { name: 'Char' },
    { name: 'Object' },
  ];
  constructor(
    private _manageService: ManageService,
  ) {
    this.isEditable = false;
    this.isListSelect = false;
    this.editForm = new FormGroup({
      keyName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      sensitivity: new FormControl()
    });

    this.editForm.controls['type'].setValue('Integer', { onlySelf: true });
  }

  ngOnInit() {
    this.getManageList();
  }

  ngOnDestroy(): void {
    this.manageListSubscriptor.unsubscribe();
    this.itemManageSubscriptor.unsubscribe();
  }

  getManageList() {
    this.manageListSubscriptor = this._manageService.getList().subscribe((list) => {
      this.dataManage = [];
      this.dataManage = list.map((item) => {
        return new ListDataManageViewer(item);
      }, []);
      console.log(this.dataManage);
    });
  }

  getDataByKeyName($event) {
    const { id } = $event;
    this.itemManageSubscriptor = this._manageService.getItemById(id).subscribe((item) => {
      console.log('itemManageSubscriptor', item);
      this.dataViewer = new ListDataManageViewer(item);
      if (this.isEditable) {
        this.setValuesForm(this.dataViewer);
      }
      this.isListSelect = true;
    });
  }

  updateItemManage() {
    const { keyName, description, type, sensitivity } = this.editForm.controls;
    const { id, possibleValues, sensitivy } = this.dataViewer;

    if (this.editForm.valid) {
      const dataRequest = {
        id: id,
        key_name: keyName.value as string,
        description: description.value as string,
        type: type.value as string,
        possible_values: possibleValues,
        sensitivy: sensitivy,
        flgSensitivy: sensitivity.value
      }
      this._manageService.updatekey(dataRequest).subscribe((item) => {
        this.dataViewer = new ListDataManageViewer(item);
        this.setValuesForm(item);
        this.getManageList();
      });
      this.isEditable = false;
    }
  }

  editKeyName($event) {
    console.log($event);
    this.setValuesForm($event);
    this.isEditable = true;
  }

  setValuesForm(data) {
    const { keyName, description, type } = this.editForm.controls;
    keyName.setValue(data.keyName);
    description.setValue(data.description);
    type.setValue(data.type);
    this.editForm.controls['type'].setValue(data.type, { onlySelf: true });
  }

}

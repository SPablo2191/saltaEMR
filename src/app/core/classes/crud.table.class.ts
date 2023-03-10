import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseModel } from './baseModel.interface';

export class crudTable {
  ref!: DynamicDialogRef;
  updateComponent!: any;
  viewComponent!: any;
  createComponent!: any;
  title!: string;
  constructor(
    protected dialogService: DialogService,
    private confirmationService: ConfirmationService
  ) {}

  getDialog(component: any, title?: string, data = {}) {
    this.ref = this.dialogService.open(component, {
      header: `${title}`,
      width: '60%',
      data: data,
      maximizable: true,
    });
  }
  create() {
    this.getDialog(this.createComponent, `Nuevo ${this.title}`);
  }
  read(data : any) {
    this.getDialog(this.viewComponent, `Paciente - ${data.lastname}, ${data.name}`,data);
  }
  update(item: any, title: string = 'Agregar Evolución') {
    this.getDialog(this.updateComponent, title, item);
  }
  delete(id: number, itemName: string = '') {
    this.confirmationService.confirm({
      header: `Eliminar ${this.title}`,
      message: `¿Estás seguro que deseas eliminar este ${this.title} ${itemName}?`,
      accept: () => {},
    });
  }
}

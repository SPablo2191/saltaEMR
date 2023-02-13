import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

export class crudTable {
  ref!: DynamicDialogRef;
  updateComponent!: any;
  viewComponent!: any;
  title ! : string;
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
  create(){}
  read(id : number){
    this.getDialog(this.viewComponent,`HOLA ${id}`);
  }
  update(item: any, title: string = 'Agregar Evolución') {
    this.getDialog(this.updateComponent, title, item);
  }
  delete(id: number,itemName : string ='') {
    this.confirmationService.confirm({
      message: `¿Estás seguro que deseas eliminar este ${this.title} ${itemName}?`,
      accept: () => {
      },
    });
  }

}

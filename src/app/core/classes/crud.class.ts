import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { map, Observable, Subscription } from 'rxjs';
import { baseService } from '../services/base.service';

export class crud {
  //items : BehaviorSubject<any []> = new BehaviorSubject([] as any[]);
  items!: Observable<any[]>;
  ref!: DynamicDialogRef;
  title!: string;
  subscriptions$: Subscription = new Subscription();
  editComponent!: any;
  readComponent: any;
  constructor(
    protected dialogService: DialogService,
    protected api: baseService,
    private confirmationService: ConfirmationService
  ) {}
  getDialog(component: any, title: string, data = {}) {
    this.ref = this.dialogService.open(component, {
      header: `${title}`,
      width: '60%',
      data: data,
      maximizable: true,
    });
  }
  create() {
    this.getDialog(this.editComponent, `Añadir ${this.title}`);
    this.subscriptions$.add(
      this.ref.onClose
        .pipe(
          map((response) => {
            if (response) {
              this.fetchData();
            }
          })
        )
        .subscribe()
    );
  }
  update(item: any) {
    this.getDialog(this.editComponent, `Editar ${this.title}`, item);
    this.subscriptions$.add(
      this.ref.onClose
        .pipe(
          map((response) => {
            if (response) {
              this.fetchData();
            }
          })
        )
        .subscribe()
    );
  }
  fetchData(): void {
    this.items = this.api.get();
  }
  read() {
    this.getDialog(this.readComponent, `${this.title}`);
  }
  delete(id: number) {
    this.confirmationService.confirm({
      message: `¿Estás seguro que deseas eliminar este item # ${id}?`,
      accept: () => {
        this.subscriptions$.add(
          this.api
            .delete(`/${id}`)
            .pipe(
              map((response) => {
                this.fetchData();
              })
            )
            .subscribe()
        );
      },
    });
  }
}

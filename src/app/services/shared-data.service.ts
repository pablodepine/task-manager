import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private tarefaSubject = new BehaviorSubject<any>(null);
  tarefa$ = this.tarefaSubject.asObservable();

  setTarefa(tarefa: any) {
    this.tarefaSubject.next(tarefa);
  }
}

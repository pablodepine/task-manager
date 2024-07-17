import { PriorityEnum } from '../enums/priority';
import { StatusEnum } from '../enums/status';

export interface Tarefa {
  taskId?: string;
  title: string;
  priority: PriorityEnum;
  description: string;
  status: StatusEnum;
}

import { Entity } from 'shared/domain/entity';

export class TaskEntity extends Entity {
  public description: string;
  public title: string;
  public completedAt?: Date | null;

  constructor(description: string, title: string) {
    super();
    this.description = description;
    this.title = title;
    this.completedAt = null;
  }
}

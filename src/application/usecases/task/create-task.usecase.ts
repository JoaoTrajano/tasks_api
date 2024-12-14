import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateTaskUseCase {
  constructor() {}

  get teste(): string {
    return 'teste'
  }
}
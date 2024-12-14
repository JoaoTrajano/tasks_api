import { Injectable } from "@nestjs/common";
import { UseCase } from "../usecase";

type CreateTaskUseCaseInput = {
  title: string
  description: string
}

type CreateTaskUseCaseOutput = {
  status: string
}

@Injectable()
export class CreateTaskUseCase implements UseCase<CreateTaskUseCaseInput, CreateTaskUseCaseOutput> {

  async execute(data: CreateTaskUseCaseInput): Promise<CreateTaskUseCaseOutput> {
    console.log(data)
    return await {status: 'ok'}
  }
 
}
export interface UseCase<Input = unknown, Output = unknown> {
  execute(data: Input): Promise<Output>;
}

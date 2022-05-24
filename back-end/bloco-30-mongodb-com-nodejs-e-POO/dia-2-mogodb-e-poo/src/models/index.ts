interface Model<T>{
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(): Promise<T | null>,
}

export default Model;
import { Model as M, Document } from 'mongoose';
import Model from '.';

export default abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { }

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> => this.model.findOne({ id });
}
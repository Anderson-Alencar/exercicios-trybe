import { Document, Schema, model as createModel } from 'mongoose';
import Lens from '../interfaces/Lens';
import MongoModel from './MongoModel';

interface LensDocument extends Lens, Document { }

const lensSchema = new Schema<LensDocument>({
  degree: Number,
  antiGlare: Boolean,
  blueLightFilter: Boolean,
});

export default class LensModel extends MongoModel<Lens> {
  constructor(model = createModel('Lenses', lensSchema)) {
    super(model);
  }
}
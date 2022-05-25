import Service, { ServiceError } from '.';
import Lens, { LensSchema } from '../interfaces/Lens';
import LensModel from '../models/Lens';

export default class LensService extends Service<Lens> {
  constructor(model = new LensModel()) {
    super(model);
  }

  create = async (obj: Lens):Promise<Lens | ServiceError | null> => {
    const parsed = LensSchema.safeParse(obj);

    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };
}
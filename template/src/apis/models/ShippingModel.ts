import { BaseModel } from './baseModel';

type Model = {
  name: string
}

export class Shipping extends BaseModel<Model> {}
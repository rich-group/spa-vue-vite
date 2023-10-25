export class BaseModel<T> {
  data!: T;
  retCode!: string;
  retInfo!: string;
  success!: boolean;
  timeStamp!: number;
}
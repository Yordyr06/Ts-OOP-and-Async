export class BaseHttpService<TypeClass> {
  data: TypeClass[] =[];

  getAll(): TypeClass[] | Promise<TypeClass[]> {
    return []
  }
}

const service_1 = new BaseHttpService<string>();
service_1.data

const service_2 = new BaseHttpService<number>();
service_2.data

const service_3 = new BaseHttpService<boolean>();
service_3.data
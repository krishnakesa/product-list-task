export interface CoffeeList {
  id: number;
  uid: string;
  blend_name: string;
  origin: string;
  variety: string;
  notes: string;
  intensifier: string;
}

export class CoffeeListClass {
  public id: number;
  public uid: string;
  public blend_name: string;
  public origin: string;
  public variety: string;
  public notes: string;
  public intensifier: string;

  constructor(data: CoffeeList) {
    this.id = data.id;
    this.uid = data.uid;
    this.blend_name = data.blend_name;
    this.origin = data.origin;
    this.variety = data.variety;
    this.notes = data.notes;
    this.intensifier = data.intensifier;
  }
}

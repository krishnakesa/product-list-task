export class ProductItemModel {
  id?: number;
  uid?: string;
  blend_name?: string;
  origin?: string;
  variety?: string;
  notes?: string;
  intensifier?: string;

  constructor(obj: ProductItemModel) {
    this.id = obj.id;
    this.blend_name = obj.blend_name;
    this.uid = obj.uid;
    this.origin = obj.origin;
    this.variety = obj.variety;
    this.notes = obj.notes;
    this.intensifier = obj.intensifier;
  }
}


import { Pan } from "../models/panModel.js";

export class PanRepository {
  constructor() {
    this.panes = [];
    this.currentId = 1; 
  }

  findAll() {
    return this.panes;
  }

  save(data) {
    const pan = new Pan({ id: this.currentId++, ...data });
    this.panes.push(pan);
    return pan;
  }
}

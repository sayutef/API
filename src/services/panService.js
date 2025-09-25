
export class PanService {
  constructor(repository) {
    this.repository = repository;
  }

  getAllPanes() {
    return this.repository.findAll();
  }

  createPan(data) {
    if (!data.nombre || !data.precio) {
      throw new Error("Missing required fields: nombre, precio");
    }
    return this.repository.save(data);
  }
}

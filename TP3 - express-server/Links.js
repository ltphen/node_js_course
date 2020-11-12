const file = require('./File');
const { filePath } = require('./config')
// The links manager class CRUD
class Links {

  constructor() {
    this.links = [];
  }

  // read data from file and saves them to manipulate
  async readData() {
    let data = await file.read(filePath)
    this.links = data != '' ? JSON.parse(data) : [];
  }

  // read data from file and saves them to manipulate
  async writeData() {
    await file.write(filePath, JSON.stringify(this.links));
  }

  async add(linkObject) {
    await this.readData();
    linkObject.id = this.links.length;
    this.links.push(linkObject);
    await this.writeData();
    return this.links;
  }

  async getAll() {
    await this.readData();
    return this.links;
  }

  async remove(id) {
    await this.readData();
    this.links = this.links.filter( link => link.id != id )
    await this.writeData();
    return this.links;
  }

  async getOne(id) {
    await this.readData();
    let link = null;
    this.links.forEach( (value) => {
      if(value.id == id){
        link = value;
      }
    })
    return link;
  }

  async update(id, newData) {
    await this.readData();
    this.links=this.links.map((link) => {
      if(link.id == id){
        return newData;
      }
      return link;
    })
    await this.writeData();

    return this.links;
  }
}

module.exports= Links;
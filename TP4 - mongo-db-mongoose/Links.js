
const Link = require('./db');

// The links manager class CRUD

class Links {

  async add(linkObject) {
    const link = new Link(linkObject);
    return link.save();
  }

  async getAll() {
    return await Link.find({});
  }

  async remove(id) {
    await Link.deleteOne({ _id: id });
    return await Link.find({});
  }

  async getOne(id) {
    return await Link.findById(id);
  }

  async update(id, newData) {
    let data =  await Link.updateOne({_id: id}, newData);
    console.log(data, id);
    return data.ok ? await Link.findById(id): null;
  }
}

module.exports= Links;
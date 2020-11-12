/** 
 * 
 * A simple file manager with node js
*/
 
// getting fs and transform them to promise to avoid callback 
const {readFile, writeFile} = require('fs').promises;

// The File class 

class File {

  static async write(content, filename) {
    const data = await writeFile(content, filename);
    if (!data) return [];
    return data;
  }

  static async read(filename) {
    const data = await readFile(filename, 'utf8');
    if (!data) return [];
    return data;
  }
}

module.exports = File;
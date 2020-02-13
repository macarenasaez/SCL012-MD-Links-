const mdLinks = require('../src/md-links');


describe('mdLinks', () => {

  it('debería traer archivos md desde un directorio', () => {
    return expect(mdLinks.mdLinks('/home/laboratoriad300/Escritorio/SCL012-MD-Links-/src')).resolves.toMatchSnapshot();
  });

});

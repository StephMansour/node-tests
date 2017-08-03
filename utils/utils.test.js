const expect = require('expect');

const utils = require ('./utils');

describe('utils', () => {
  describe('#add', () => {
    it('Should add 2 numbers', () => {
      var res = utils.add(5, 50);

      expect(res).toBeA('number').toBe(55);
    });

    it('Should async add 2 numbers', (done) => {
      utils.asyncAdd(15, 10, (sum) => {
        expect(sum).toBe(25).toBeA('number');
        done();
      });
    });
  });

  describe('#square', () => {
    it('Should async square a number', (done) => {
      utils.asyncSquare(5, (res) => {
        expect(res).toBe(25).toBeA('number');
        done();
      });
    });

    it('Should square a number', () => {
      var res = utils.square(10);
      expect(res).toBeA('number').toBe(100);
    });
  });

  describe('#other', () => {
    it('Should expect some values', () => {
      expect({name: 'bob'}).toBeA('object').toEqual({name: 'bob'});
    });

    it('should be included in the array', () => {
      expect([1,2,3]).toInclude(3).toExclude(5);
    });

    it('should be included in the object', () => {
      expect({
        name: 'bob',
        age: 55
      }).toInclude({
        name: 'bob'
      });
    });

    it('Should verify first and last names are set', () => {
      var user = {
        age: 20,
        location: 'NYC'
      };
      var res = utils.setName(user, 'Bob Marley');

      expect(res).toBeA('object').toInclude({
        firstName: 'Bob',
        lastName: 'Marley'});
    });
  });
});




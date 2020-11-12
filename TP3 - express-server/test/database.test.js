const assert = require('assert');
const chai = require('chai');
const Links = require('./../Links')
const links = new Links();
var expect = chai.expect;

describe('Links', function() {
    describe('#add()', function() {
        it('should add without error',  function(done) {
                links.add({
                    link: 'test',
                    description: 'Super contenu'
                }).then(data => done()).catch(err=>done(err));
        });
    });
});

describe('Links', function() {
    describe('#remove()', function() {
        it('should delete without error',  function(done) {
            links.remove(1).then( (data)=>{
                links.getOne(1).then((data)=>{
                    expect(data).to.be.equal(null);
                    done()
                }).catch(err=>done(err));
            }).catch(err=>done(err));
        });
    });
});

describe('Links', function() {
    describe('#getAll()', function() {
        it('should getAll without error',  function(done) {
            links.getAll().then((data)=>{
                expect(data).to.have.a('array')
                done()
            }).catch(err=>done(err));
        });
    });
});


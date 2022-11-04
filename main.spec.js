const request = require('supertest');
const { response } = require('./main');
const app = require('./main');

describe('POST /clientes/salvar', function() {
    it('responds with json', async function() {
        const response = await request(app)
          .post('/clientes/salvar')
          .set('Accept', 'application/json')
          .send({
            "codigo": "2",
            "endereco": "Teste",
             "nome": "pedrao",
           })
      
        expect(response.status).toEqual(201);
        
      });
  });

describe('GET /getInfo', function() {
    it('responds with json', async function() {
        const response = await request(app)
          .get('/getInfo')
          .set('Accept', 'application/json')
      
        expect(response.status).toEqual(200);
        expect(response.body.user).toEqual('geekxxx');
      });
  });


  describe('GET /clientes/listar', function() {
    it('responds with json', async function() {
        const response = await request(app)
          .get('/clientes/listar')
          .set('Accept', 'application/json')
      
        expect(response.status).toEqual(200);
        expect(response.body).toEqual( {
            "codigo": "2",
            "endereco": "Teste",
             "nome": "pedrao",
             });
      });
  });

  describe('GET /clientes/listar', function() {
    it('responds with json', async function() {
        const response = await request(app)
          .get('/clientes/listar/codigo')
          .set('Accept', 'application/json')
      
        expect(response.status).toEqual(200);
        
      });
  });




 
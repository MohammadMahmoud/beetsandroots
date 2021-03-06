import request from 'supertest';
import app from '../../bootstrap/server';
import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();
describe('API tests', function () {
  it('should respond to whoami', async function (done) {
    const response = await request(app).get('/').expect(200);

    assert(response.body.message.appName, process.env.APP_NAME);
    assert(response.body.message.version, process.env.APP_VER);

    done();
  });

  it('should get list of products', async function (done) {
    const response = await request(app).get('/api/product').expect(200);

    expect(response.body.message.devices.length).toBeGreaterThanOrEqual(7);
    done();
  });
});

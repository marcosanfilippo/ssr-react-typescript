// tslint:disable:no-implicit-dependencies
import * as supertest from 'supertest';
import { server } from '../routes';

describe('Routes: default not found', () => {
  test('it should return the 200 when /', () => {
    return supertest(server)
      .get('/')
      .then((response: supertest.Response) => {
        expect(response.status).toBe(200);
      });
  });

  test('it should return 200 on /welcome', () => {
    return supertest(server)
      .get('/welcome')
      .then((response: supertest.Response) => {
        expect(response.status).toBe(200);
      });
  });

  test('it should return the default 404 when wrong path', () => {
    return supertest(server)
      .get('/this_url_does_not_exist')
      .then((response: supertest.Response) => {
        expect(response.status).toBe(404);
      });
  });
});

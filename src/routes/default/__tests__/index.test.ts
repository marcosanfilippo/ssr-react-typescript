// tslint:disable:no-implicit-dependencies
import * as httpMock from 'node-mocks-http';
import * as routes from '../../../routes';

const mockRequest = () =>
  httpMock.createRequest({
    method: 'GET',
    url: '/this_url_does_not_exist'
  });
const mockResponse = () => httpMock.createResponse();

describe('Routes: default not found', () => {
  test('it should return the default 404', () => {
    routes.getDefault(mockRequest(), mockResponse());
  });
});

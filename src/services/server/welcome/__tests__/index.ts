// tslint:disable:no-implicit-dependencies
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getData } from '../index';

const mock = new MockAdapter(axios);

describe('Backend: welcome', () => {
  afterEach(() => {
    // mock.restore();
  });

  test('it resolves with data when service is available', () => {
    const data = { fake: 'data' };

    mock.onGet('https://randomuser.me/api/').reply(200, data);
    getData().then(responseData => {
      expect(responseData).toEqual(data);
    });
  });

  test('it reject with an error when service is not available', () => {
    const data = {};

    mock.onGet('https://randomuser.me/api/').timeout();
    getData().then(defaultData => {
      expect(defaultData).toEqual(data);
    });
  });
});

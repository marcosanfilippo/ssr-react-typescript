// tslint:disable:no-implicit-dependencies
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getData } from '../index';

const mock = new MockAdapter(axios);

describe('Backend: welcome', () => {
  afterEach(() => {
    mock.restore();
  });

  test('it resolves with data when service is available', () => {
    expect.assertions(1);

    const data = { fake: 'data' };
    mock.onGet('https://randomuser.me/api/').reply(200, data);

    return getData().then(responseData => {
      expect(responseData).toMatchObject(data);
    });
  });

  test('it catch error and return default data when service is not available', () => {
    expect.assertions(1);

    const data = {};
    mock.onGet('https://randomuser.me/api/').timeout();

    return getData().then(defaultData => {
      expect(defaultData).toMatchObject(data);
    });
  });
});

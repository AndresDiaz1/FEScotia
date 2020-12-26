import { appStore } from './AppStore';

describe('AppStore Integration Tests', () => {
  it('Initializes the store', async (done) => {
    const store = appStore;

    expect(store).toBeTruthy();

    done();
  });
});

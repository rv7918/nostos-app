import { House } from './house.model';

describe('House', () => {
  it('should create an instance of House Model', () => {
    expect(new House()).toBeTruthy();
  });

  it('should create an instance', () => {
    let model = new House();
    expect(typeof(model)).toEqual('object')
  });
});

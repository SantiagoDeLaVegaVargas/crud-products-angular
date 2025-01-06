import { Product } from './product';

describe('Products', () => {
  it('should create an instance', () => {
    expect(new Product(0,"",0,"")).toBeTruthy();
  });
});

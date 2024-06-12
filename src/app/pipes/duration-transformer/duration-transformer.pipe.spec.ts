import { DurationTransformerPipe } from './duration-transformer.pipe';

describe('DurationTransformerPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationTransformerPipe();
    expect(pipe).toBeTruthy();
  });
});

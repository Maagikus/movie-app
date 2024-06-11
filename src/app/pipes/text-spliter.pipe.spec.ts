import { TextTruncatePipe } from './text-truncate.pipe';

describe('TextSpliterPipe', () => {
  it('create an instance', () => {
    const pipe = new TextTruncatePipe();
    expect(pipe).toBeTruthy();
  });
});

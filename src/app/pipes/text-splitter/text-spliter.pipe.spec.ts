import { TextTruncatePipe } from './text-truncate.pipe';

describe('TextSplitterPipe', () => {
  it('create an instance', () => {
    const pipe = new TextTruncatePipe();
    expect(pipe).toBeTruthy();
  });
});

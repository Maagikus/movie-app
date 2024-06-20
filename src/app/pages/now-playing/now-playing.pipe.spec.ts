import { NowPlayingPipe } from './now-playing.pipe';

describe('NowPlayingPipe', () => {
  it('create an instance', () => {
    const pipe = new NowPlayingPipe();
    expect(pipe).toBeTruthy();
  });
});

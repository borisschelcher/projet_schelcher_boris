import { RefactorPhoneNumberPipe } from './refactor-phone-number.pipe';

describe('RefactorPhoneNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new RefactorPhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });
});

import imready from '../'

test('should be promise', () => {
  expect(imready).toBeDefined()
  expect(imready).toBeInstanceOf(Promise)
})

test('should wait for DOM content to load', () => {
  expect(imready).resolves.toBe(true)
})

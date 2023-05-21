import { echo } from './index'
// None of the functions below need to be imported if you
// set up the vite.config.ts + tsconfig.json for globals.
import { describe, expect, test /*, it */ } from 'vitest'

describe('The echo() function...', () => {
  test("should return 'Hello'.", () => {
    const value = echo('Hello')
    expect(value).toBe('Hullo')
  })
})

import queryReducer from './query'
import { ActionObject, IAddQueryAction, IRemoveQueryAction, ICleanStore } from '@/interfaces'

describe('queryReducer', () => {
  it('should return initial value', () => {
    const mockAction: ActionObject = {
      type: '',
      query: undefined
    }
    const expected = ''
    const result = queryReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })

  it('should return a query string if type of action is ADD_QUERY', () => {
    const mockQuery = 'App'

    const mockAction: IAddQueryAction = {
      type: 'ADD_QUERY',
      query: mockQuery
    }

    const expected: string = mockQuery

    const result: string = queryReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })

  it('should return an empty string if type of action is REMOVE_QUERY', () => {
    const mockAction: IRemoveQueryAction = {
      type: 'REMOVE_QUERY'
    }

    const expected = ''

    const result: string = queryReducer('app', mockAction)

    expect(result).toEqual(expected)
  })

  it('should return the empty string if type of action is CLEAN_STORE', () => {
    const mockAction: ICleanStore = {
      type: 'CLEAN_STORE'
    }

    const expected = ''
    const result = queryReducer('app', mockAction)

    expect(result).toEqual(expected)
  })
})

import filterReducer from './filter'
import { ActionObject, IAddFilterAction, IRemoveFilterAction, ICleanStore } from '@/interfaces'

describe('filterReducer', () => {
  it('should return initial value', () => {
    const mockAction: ActionObject = {
      type: '',
      filter: undefined
    }
    const expected = ''
    const result = filterReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })

  it('should return a filter string if type of action is ADD_FILTER', () => {
    const mockFilter = 'Tech'

    const mockAction: IAddFilterAction = {
      type: 'ADD_FILTER',
      filter: mockFilter
    }

    const expected: string = mockFilter

    const result: string = filterReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })

  it('should return an empty string if type of action is REMOVE_FILTER', () => {
    const mockAction: IRemoveFilterAction = {
      type: 'REMOVE_FILTER'
    }

    const expected = ''

    const result: string = filterReducer('Tech', mockAction)

    expect(result).toEqual(expected)
  })

  it('should return the empty string if type of action is CLEAN_STORE', () => {
    const mockAction: ICleanStore = {
      type: 'CLEAN_STORE'
    }

    const expected = ''
    const result = filterReducer('Tech', mockAction)

    expect(result).toEqual(expected)
  })
})

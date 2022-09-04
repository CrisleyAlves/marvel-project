import { create3DMANCharacterMock, createSpiderManCharacterMock } from '../mocks/character'

export const mockGetAllCharactersRequestWithData = () => ({
  data: {
    code: 200,
    data: {
      results: [create3DMANCharacterMock(), createSpiderManCharacterMock()]
    }
  }
})

export const mockSearchCharacterRequestWithData = () => ({
  data: {
    code: 200,
    data: {
      results: [create3DMANCharacterMock()]
    }
  }
})

export const mockSearchCharacterRequestWithNoData = () => ({
  data: {
    code: 200,
    data: {
      results: []
    }
  }
})

export const mockCharacterDetailRequestWithData = () => ({
  data: {
    code: 200,
    data: {
      results: [create3DMANCharacterMock()]
    }
  }
})

export const mockErrorCatchBlock = () => ({
  response: {
    data: {
      status: 'error message'
    }
  }
})

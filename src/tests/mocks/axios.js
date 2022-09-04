import axios from 'axios';
import {
  mockCharacterDetailRequestWithData,
  mockErrorCatchBlock,
  mockGetAllCharactersRequestWithData,
  mockSearchCharacterRequestWithData,
  mockSearchCharacterRequestWithNoData,
} from "./requests"

jest.mock('axios')

export const axiosMockGetAllCharactersRequestWithData = () => axios.get.mockResolvedValue(mockGetAllCharactersRequestWithData())

export const axiosMockSearchCharacterRequestWithData = () => axios.get.mockResolvedValue(mockSearchCharacterRequestWithData());

export const axiosMockSearchCharacterRequestWithNoData = () => axios.get.mockResolvedValue(mockSearchCharacterRequestWithNoData());

export const axiosMockCharacterDetailRequestWithData = () => axios.get.mockResolvedValue(mockCharacterDetailRequestWithData())

export const axiosMockErrorCatchBlock = () => axios.get.mockRejectedValue(mockErrorCatchBlock())

export const axiosMockErrorFromTheAPI = () => axios.get.mockResolvedValue({});

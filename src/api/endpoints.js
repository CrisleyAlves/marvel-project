import { MARVEL_API_AUTHORIZATION, MARVEL_API_BASE_URL } from "../config";

export const GET_ALL_CHARACTERS_ENDPOINT = `${MARVEL_API_BASE_URL}/characters?ts=1${MARVEL_API_AUTHORIZATION}`;
export const SEARCH_CHARACTER_ENDPOINT = `${MARVEL_API_BASE_URL}/characters?ts=1${MARVEL_API_AUTHORIZATION}`;

export const GET_CHARACTER_BY_ID_ENDPOINT = `http://gateway.marvel.com/v1/public/characters/[id]?ts=1${MARVEL_API_AUTHORIZATION}`;

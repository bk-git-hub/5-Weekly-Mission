import { FolderObject } from './interfaces';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api/sample';
const USER_BASE_URL = 'https://bootcamp-api.codeit.kr/api/users/1';

const FOLDER_PATH = '/folder';
const USER_FOLDERS_PATH = '/folders';
const LINK_PATH = '/links';
const LINK_FOLDER_SEARCH_OPTION = '?folderId=';
const FOLDER_LOADING_ERROR_MESSAGE = '폴더 정보를 불러오는데 실패했습니다';
const USER_LOADING_ERROR_MESSAGE = '이용자 정보를 불러오는데 실패했습니다';

export async function getFolderInfo(): Promise<object> {
  const query = `${BASE_URL}${FOLDER_PATH}`;
  const response = await fetch(query);

  if (!response.ok) {
    throw new Error(FOLDER_LOADING_ERROR_MESSAGE);
  }

  const result = await response.json();

  return result.folder;
}

export async function getUserInfo(): Promise<object> {
  const query = `${USER_BASE_URL}`;
  const response = await fetch(query);

  if (!response.ok) {
    throw new Error(USER_LOADING_ERROR_MESSAGE);
  }

  const result = await response.json();

  return result.data[0];
}

export async function getUserFolders(): Promise<FolderObject[]> {
  const response = await fetch(`${USER_BASE_URL}${USER_FOLDERS_PATH}`);

  if (!response.ok) {
    throw new Error();
  }

  const result = await response.json();

  return result.data;
}

export async function getUserLinks(id: number): Promise<object[]> {
  let linkPath = `${LINK_PATH}`;

  if (id && id > 0) {
    linkPath = `${LINK_PATH}${LINK_FOLDER_SEARCH_OPTION}${id}`;
  }
  const response = await fetch(`${USER_BASE_URL}${linkPath}`);

  if (!response.ok) {
    throw new Error();
  }
  const result = await response.json();

  return result.data;
}

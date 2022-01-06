import { GET_BOOKS } from '~/constants/api';

import request from '../request';

export async function searchBooks(index: number, text: string) {
  try {
    const response = await request.get(GET_BOOKS, {
      index,
      text,
    });

    return response;
  } catch {
    return null;
  }
}

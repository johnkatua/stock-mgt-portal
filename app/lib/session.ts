'use server';

import { cookies } from 'next/headers';

export const deleteSession = () => {
  cookies().delete('access_token');
};

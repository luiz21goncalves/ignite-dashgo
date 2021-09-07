import { useQuery } from 'react-query';

import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

type GetUserResponse = {
  users: User[];
  totalCount: number;
};

export async function getUsers(page: number): Promise<GetUserResponse> {
  const { data, headers } = await api.get('/users', {
    params: { page },
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map((findUser) => ({
    id: findUser.id,
    name: findUser.name,
    email: findUser.email,
    created_at: new Date(findUser.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));

  return { users, totalCount };
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 15, // 15 seconds
  });
}

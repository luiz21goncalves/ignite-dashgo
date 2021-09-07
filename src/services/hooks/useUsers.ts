import { useQuery } from 'react-query';

import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

export async function getUsers(): Promise<User[]> {
  const response = await api.get('/users');

  return response.data.users.map((findUser) => ({
    id: findUser.id,
    name: findUser.name,
    email: findUser.email,
    created_at: new Date(findUser.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 15, // 15 seconds
  });
}

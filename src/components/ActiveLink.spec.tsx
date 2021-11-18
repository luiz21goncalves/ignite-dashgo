import { useRouter } from 'next/router';

import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';

import { ActiveLink } from './ActiveLink';

jest.mock('next/router');

describe('ActiveLink component', () => {
  it('renders correctly', () => {
    const useRouterMocked = mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      asPath: '/users',
    } as any);

    render(
      <ActiveLink href="/">
        <a>Home</a>
      </ActiveLink>,
    );

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });

  it('adds color `pink.400` if matches stating path', () => {
    const useRouterMocked = mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      asPath: '/users/create',
    } as any);

    render(
      <ActiveLink href="/users/1/edit">
        <a>Edit user</a>
      </ActiveLink>,
    );

    expect(screen.getByRole('link', { name: /edit user/i })).toHaveStyle({
      color: 'var(--chakra-colors-pink-400)',
    });
  });

  it('adds color `gray.50` if not matches stating path', () => {
    const useRouterMocked = mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      asPath: '/about',
    } as any);

    render(
      <ActiveLink href="/users/1/edit">
        <a>Edit user</a>
      </ActiveLink>,
    );

    expect(screen.getByRole('link', { name: /edit user/i })).toHaveStyle({
      color: 'var(--chakra-colors-gray-50)',
    });
  });

  it('adds color `pink.400` if matches exact path', () => {
    const useRouterMocked = mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      asPath: '/users/create',
    } as any);

    render(
      <ActiveLink href="/users/create" shouldMatchExactHref>
        <a>Create user</a>
      </ActiveLink>,
    );

    expect(screen.getByRole('link', { name: /create user/i })).toHaveStyle({
      color: 'var(--chakra-colors-pink-400)',
    });
  });

  it('adds color `gray.50` if not matches exact path', () => {
    const useRouterMocked = mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      asPath: '/users',
    } as any);

    render(
      <ActiveLink href="/users/create" shouldMatchExactHref>
        <a>Create user</a>
      </ActiveLink>,
    );

    expect(screen.getByRole('link', { name: /create user/i })).toHaveStyle({
      color: 'var(--chakra-colors-gray-50)',
    });
  });
});

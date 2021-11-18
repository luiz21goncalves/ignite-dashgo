import { useRouter } from 'next/router';

import { render, screen } from '@testing-library/react';
import { RiDashboardLine } from 'react-icons/ri';
import { mocked } from 'ts-jest/utils';

import { NavLink } from './NavLink';

jest.mock('next/router');

describe('NavLink component', () => {
  it('renders correctly', () => {
    const useRouterMocked = mocked(useRouter);
    useRouterMocked.mockReturnValueOnce({
      asPath: '/',
    } as any);

    render(
      <NavLink href="/dashboard" icon={RiDashboardLine}>
        Dashboard
      </NavLink>,
    );

    expect(
      screen.getByRole('link', { name: /dashboard/i }),
    ).toBeInTheDocument();
  });
});

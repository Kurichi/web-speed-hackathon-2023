import type { FC } from 'react';

import { SignInModal } from '../../modal/SignInModal';
import { SignUpModal } from '../../modal/SignUpModal';
import { Providers } from '../Providers';
import { Router } from '../Routes';

export const App: FC = () => (
  <Providers>
    <Router />
    <SignInModal />
    <SignUpModal />
  </Providers>
);

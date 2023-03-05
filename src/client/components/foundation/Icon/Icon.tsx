import type { FC, ReactNode } from 'react';

import * as styles from './Icon.styles';

type Props = {
  width: number;
  height: number;
  children: ReactNode;
  color: string;
};

export const IconHolder: FC<Props> = ({ color, height, children, width }) => {
  return <span className={styles.container({ color, height, width })}>{children}    </span>
};

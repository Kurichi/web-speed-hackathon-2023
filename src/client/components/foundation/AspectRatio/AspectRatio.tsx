import type { FC, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { throttle } from 'throttle-debounce';

import * as styles from './AspectRatio.styles';

type Props = {
  ratioWidth: number;
  ratioHeight: number;
  children: ReactNode;
};

export const AspectRatio: FC<Props> = ({ children, ratioHeight, ratioWidth }) => {
  const [aspectRatio, setAspectRatio] = useState(0);

  useEffect(() => {
    setAspectRatio(ratioWidth / ratioHeight);
  }, []);

  return (
    <div className={styles.container({ aspectRatio })}>
      {children}
    </div>
  );
};

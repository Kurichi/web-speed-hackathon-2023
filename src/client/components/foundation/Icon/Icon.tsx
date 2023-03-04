import classNames from 'classnames';
import type { FC } from 'react';
import { FaCheckCircle, FaArrowLeft, FaArrowRight, FaUser, FaPlay, FaShoppingCart } from 'react-icons/fa';

import * as styles from './Icon.styles';

type Props = {
  type: 'FaCheckCircle' | 'FaArrowLeft' | 'FaArrowRight' | 'FaUser' | 'FaPlay' | 'FaShoppingCart';
  width: number;
  height: number;
  color: string;
};

export const Icon: FC<Props> = ({ color, height, type, width }) => {
  const Icons = [FaCheckCircle, FaArrowLeft, FaArrowRight, FaUser, FaPlay, FaShoppingCart];
  const Icon = Icons.find((icon) => icon.name === type);
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      {
        Icon && <Icon />
      }
    </span>
  );
};

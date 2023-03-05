import { isEqual } from 'lodash-es';
import type { FC } from 'react';
import { memo } from 'react';

import type { OrderFragmentResponse } from '../../../graphql/fragments';
import { useTotalPrice } from '../../../hooks/useTotalPrice';
import { CartItem } from '../CartItem';

import * as styles from './OrderPreview.styles';

type Props = {
  order: OrderFragmentResponse;
  onUpdateCartItem: (productId: number, amount: number) => void;
  onRemoveCartItem: (productId: number) => void;
};

export const OrderPreview: FC<Props> = memo(({ onRemoveCartItem, onUpdateCartItem, order }) => {
  const { totalPrice } = useTotalPrice(order);

  return (
    <div className={styles.container()}>
      <ul className={styles.itemList()}>
        {order.items.map((item) => {
          return (
            <li key={item.product.id}>
              <CartItem item={item} onRemove={onRemoveCartItem} onUpdate={onUpdateCartItem} />
            </li>
          );
        })}
      </ul>
      <p className={styles.totalPrice()}>{totalPrice.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}</p>
    </div>
  );
}, isEqual);

OrderPreview.displayName = 'OrderPreview';
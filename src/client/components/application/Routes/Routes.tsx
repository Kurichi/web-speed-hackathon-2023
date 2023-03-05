import React from 'react';
import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

const NotFound = React.lazy(async () => ({
  default: (await import('../../../pages/NotFound')).NotFound,
}));
const Order = React.lazy(async () => ({
  default: (await import('../../../pages/Order')).Order,
}));
const OrderComplete = React.lazy(async () => ({
  default: (await import('../../../pages/OrderComplete')).OrderComplete,
}));
const ProductDetail = React.lazy(async () => ({
  default: (await import('../../../pages/ProductDetail')).ProductDetail,
}));
const Top = React.lazy(async () => ({
  default: (await import('../../../pages/Top')).Top,
}));
// import { Order } from '../../../pages/Order';
// import { OrderComplete } from '../../../pages/OrderComplete';
// import { ProductDetail } from '../../../pages/ProductDetail';
// import { Top } from '../../../pages/Top';

import { useScrollToTop } from './hooks';

export const Router: FC = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route element={<Top />} path="/" />
      <Route element={<ProductDetail />} path="/product/:productId" />
      <Route element={<Order />} path="/order" />
      <Route element={<OrderComplete />} path="/order/complete" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

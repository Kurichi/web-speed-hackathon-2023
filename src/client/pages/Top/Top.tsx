import { FC, useEffect } from 'react';

import { Layout } from '../../components/application/Layout';
import { ProductList } from '../../components/feature/ProductList';
import { ProductHeroImage } from '../../components/product/ProductHeroImage';
import { useFeatures } from '../../hooks/useFeatures';
import { useRecommendation } from '../../hooks/useRecommendation';

import * as styles from './Top.styles';

export const Top: FC = () => {
  const { recommendation } = useRecommendation();
  const { features } = useFeatures();

  useEffect(() => {
    document.title = '買えるオーガニック';
  }, []);

  return (
    <>
      <Layout>
        <div>
          {recommendation && <ProductHeroImage product={recommendation?.product} title="今週のオススメ" />}

          <div className={styles.featureList()}>
            {features.map((featureSection) => {
              return (
                <div key={featureSection.id} className={styles.feature()}>
                  <h2 className={styles.featureHeading()}>{featureSection.title}</h2>
                  <ProductList featureSection={featureSection} />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

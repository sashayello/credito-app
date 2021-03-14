import * as React from 'react';
import { useEvent, useStore } from 'effector-react/ssr';

import { useStart, withStart } from 'lib/page-routing';
import * as model from './model';


import { HomePageTemplate, TitleTemplateBox } from './../../ui/templates';
import { TableFeature } from 'features/table';

export const HomePage = withStart(model.pageLoaded, () => {
  useStart(model.pageLoaded);

  const increment = useEvent(model.incrementClicked);
  const reset = useEvent(model.resetClicked);

  const counterValue = useStore(model.$counterValue);
  const pagePending = useStore(model.$pagePending);

  return (
    <>
      <TitleTemplateBox 
        title={'Кредит онлайн без отказа'} 
        description={'Поможем подобрать наилучшие условия кредита на карту без отказа. Оформление круглосуточно, без справок и поручителей, быстрое рассмотрение.'}
      />
      <HomePageTemplate>
        <TableFeature />
      </HomePageTemplate>
    </>
  );
});


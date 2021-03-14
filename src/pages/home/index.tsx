import * as React from 'react';
import { useEvent, useStore } from 'effector-react/ssr';

import { useStart, withStart } from 'lib/page-routing';
import * as model from './model';

export const HomePage = withStart(model.pageLoaded, () => {
  useStart(model.pageLoaded);

  const increment = useEvent(model.incrementClicked);
  const reset = useEvent(model.resetClicked);

  const counterValue = useStore(model.$counterValue);
  const pagePending = useStore(model.$pagePending);

  return (
    <>
      <h1>Hello Credit page we build some table width info Store</h1>
    </>
  );
});


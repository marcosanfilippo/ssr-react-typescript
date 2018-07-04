import * as React from 'react';
import { renderToString } from 'react-dom/server';

const renderHTML = (component: React.ReactElement<any>) => renderToString(component);

export { renderHTML };

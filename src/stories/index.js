/**
 * Created by 70469 on 2018/4/8.
 */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { withReadme, withDocs, doc } from 'storybook-readme';

import Button from '../component/Button';
import ButtonReadme from '../component/Button/README.md';
import ButtonDocs from '../component/Button/DOCS.md'


storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(withDocs(ButtonDocs))
    .addDecorator(withReadme(ButtonReadme))
    .add('Button', () => (
        <Button type="success">哈哈哈</Button>
    ));
import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';


setOptions({
    name: 'Storybook',
    url: '#',
    goFullScreen: false
});


function loadStories() {
    require('../src/stories/index');
    // You can require as many stories as you need.
}

configure(loadStories, module);

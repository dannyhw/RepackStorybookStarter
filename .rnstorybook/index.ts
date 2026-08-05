import AsyncStorage from '@react-native-async-storage/async-storage';
import { LiteUI } from '@storybook/react-native-ui-lite';
import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';
import { view } from './storybook.requires';

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
  enableWebsockets: true,
  CustomUIComponent: LiteUI,
});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

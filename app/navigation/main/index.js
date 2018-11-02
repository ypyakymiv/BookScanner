import { createBottomTabNavigator, createTabNavigator } from 'react-navigation';
import Library from './Library';
import Scanner from './Scanner';

const Nav = createTabNavigator({
  Scanner,
  Library
}, {
  lazy: false,
  navigationOptions: {
    tabBarVisible: false
  },
  swipeEnabled: true,
});

// const Nav = createBottomTabNavigator({
//   Scanner,
//   Library
// }, {
//   lazy: false
// });

export default Nav;

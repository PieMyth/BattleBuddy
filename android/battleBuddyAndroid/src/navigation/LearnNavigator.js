import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import LearnScreen from '../screens/LearnScreen';
import TabBarIcon from '../components/common/TabBarIcon';
import DamageCalcScreen from '../screens/stacks/Learn/DamageCalcScreen';
import BallisticsScreen from '../screens/stacks/Learn/BallisticsScreen';
import PenChanceScreen from '../screens/stacks/Learn/PenChanceScreen';
import AmmoTableScreen from '../screens/stacks/Learn/AmmoTableScreen';
import ArmorTableScreen from '../screens/stacks/Learn/ArmorTableScreen';
import defaultNavigationOptions from '../constants/defaultNavigationOptions';

const learnNavigator = createStackNavigator(
  {
    Learn: LearnScreen,
    PenChance: PenChanceScreen,
    DamageCalc: DamageCalcScreen,
    Ballistics: BallisticsScreen,
    Ammo: AmmoTableScreen,
    Armor: ArmorTableScreen
  },
  {
    initialRouteName: 'Learn',
    defaultNavigationOptions
  }
);

learnNavigator.navigationOptions = {
  tabBarLabel: 'Learn',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="learn" /> // eslint-disable-line
};

export default learnNavigator;
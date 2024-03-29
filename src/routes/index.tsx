import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { Header } from '~/components/Header';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import {
  BOOK_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
  PROFILE_SCREEN,
} from '~/constants/routes';
import { Book } from '~/screens/Book';
import { Home } from '~/screens/Home';
import { Login } from '~/screens/Login';
import { Profile } from '~/screens/Profile';

import { createTheme } from './utils';

const Stack = createStackNavigator();
const StackLogin = createStackNavigator();

export function RootStack() {
  const { theme } = useSelector((state: AplicationState) => state.theme);
  const { isLogged } = useSelector((state: AplicationState) => state.user);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled={false}
      >
        <ThemeProvider theme={createTheme(theme)}>
          <NavigationContainer>
            {isLogged ? (
              <Stack.Navigator initialRouteName={HOME_SCREEN}>
                <Stack.Screen
                  name={HOME_SCREEN}
                  component={Home}
                  options={{ header: props => <Header {...props} /> }}
                />

                <Stack.Screen
                  name={PROFILE_SCREEN}
                  component={Profile}
                  options={{ header: props => <Header {...props} /> }}
                />

                <Stack.Screen
                  name={BOOK_SCREEN}
                  component={Book}
                  options={{ header: props => <Header {...props} /> }}
                />
              </Stack.Navigator>
            ) : (
              <StackLogin.Navigator initialRouteName={LOGIN_SCREEN}>
                <StackLogin.Screen
                  name={LOGIN_SCREEN}
                  component={Login}
                  options={{ header: props => <Header {...props} /> }}
                />
              </StackLogin.Navigator>
            )}
          </NavigationContainer>
        </ThemeProvider>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

import { createStackNavigator,createAppContainer} from 'react-navigation';

import LoginScreen from './src/screens/Login/login'
import ProductsScreen from './src/screens/Products/products'
import ProductDetailsScreen from './src/screens/ProductDetails/productDetails'
import MapScreen from './src/screens/ProductMap/MapScreen'

import Sentry from 'sentry-expo';
import { SentrySeverity } from 'react-native-sentry';

// Remove this once Sentry is correctly setup.
Sentry.enableInExpoDevelopment = true;

Sentry.config('https://63aba41613fe4490bf79ce639d866242@sentry.io/1395772').install();
Sentry.captureMessage("Test",{level: SentrySeverity.Warning})

const MainNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  ProductsScreen: { screen: ProductsScreen },
  ProductDetailsScreen: { screen: ProductDetailsScreen },
  MapScreen: { screen: MapScreen },
});
const App = createAppContainer(MainNavigator);

export default App;

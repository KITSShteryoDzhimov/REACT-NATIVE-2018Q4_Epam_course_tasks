import { createStackNavigator,createAppContainer} from 'react-navigation';

import LoginScreen from './src/screens/Login/login'
import ProductsScreen from './src/screens/Products/products'
import ProductDetailsScreen from './src/screens/ProductDetails/productDetails'
import MapScreen from './src/screens/ProductMap/MapScreen'

const MainNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  ProductsScreen: { screen: ProductsScreen },
  ProductDetailsScreen: { screen: ProductDetailsScreen },
  MapScreen: { screen: MapScreen },
});
const App = createAppContainer(MainNavigator);

export default App;

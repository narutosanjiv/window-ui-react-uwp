import React, {Component} from "react";
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import MyComponent from "./MyComponent";

class App extends Component {
  render() {
    return (
      <UWPThemeProvider
        theme={getTheme({
          themeName: "dark", // set custom theme
          accent: "#0078D7", // set accent color
          useFluentDesign: true, // sure you want use new fluent design.
          desktopBackgroundImage: 'https://www.react-uwp.com/HEAD/static/images/golden-gate-bridge-2037990_1280.1D7oi.jpg'
        })}
      >
        <MyComponent />
      </UWPThemeProvider>
    );
  }
}

export default App;

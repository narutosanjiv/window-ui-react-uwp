import React, {Component} from "react";
import PropTypes from 'prop-types';
import NavigationView from "react-uwp/NavigationView";
import SplitViewCommand from "react-uwp/SplitViewCommand";
import Button from 'react-uwp/Button'
import MediaPlayer from 'react-uwp/MediaPlayer'

class MediaPlayerComponent extends React.Component {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  render() {
    const isPhoneScreen = window.innerHeight < 1024;
    return (
      <div
        style={this.context.theme.prefixStyle({
          margin: "10px 0",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center"
        })}
      >
        <MediaPlayer
          url="https://www.youtube.com/watch?v=vcBGj4R7Fo0"
          style={{ margin: 20 }}
          width={isPhoneScreen ? 320 : 640}
          height={isPhoneScreen ? 160 : 320}
          displayMode="default"
        />

        <MediaPlayer
          url="https://www.youtube.com/watch?v=vcBGj4R7Fo0"
          style={{ margin: 20 }}
          width={isPhoneScreen ? 320 : 640}
          height={isPhoneScreen ? 160 : 320}
          displayMode="minimum"
        />

        <MediaPlayer
          url="https://www.youtube.com/watch?v=vcBGj4R7Fo0"
          style={{ margin: 20 }}
          width={isPhoneScreen ? 320 : 640}
          height={isPhoneScreen ? 160 : 320}
          displayMode="reset"
        />
      </div>
    );
  }
}



class ImageCmp extends Component{

  render(){
    return (<img
    src={require("./images/GoldenGateBridge-001.jpg")}
    alt='GoldenGateBridge'
    height="100%"
    style={{ objectFit: "cover" }}
    />)
  }

}

export default class MyComponent extends Component {
  state = {
    navigationState: ''
  }
	static contextTypes = { theme: PropTypes.object };
  	context: { theme: ReactUWP.ThemeType };
	render(){

      const { theme } = this.context;
      const baseStyle = {
      		margin: 10
    	};
		  const navigationTopNodes = [
        <Button onClick={(e) => {
            let navigationState = 'Print'
            this.setState({navigationState: navigationState})
        }}>
          Change State
        </Button>
    	];

    	const navigationBottomNode = [
          <SplitViewCommand
          onClick={e =>
            alert('click Settings')
          }
          label="Settings" icon={"\uE713"} />,
      		<SplitViewCommand label="CalendarDay" icon={"\uE161"} />
    	];
      let cmpt;

      if(this.state.navigationState === 'Print'){
        cmpt = <MediaPlayerComponent/>
      } else{
        cmpt = <ImageCmp />
      }
      console.log(this.state)
	
    	return (
        


        <div>
          <NavigationView
            isControlled={false}
            style={{ width: 640, height: 640, ...baseStyle }}
            pageTitle="San Francisco"
            displayMode="compact"
            autoResize={false}
            initWidth={120}
            expandedWidth={480}
            defaultExpanded={false}
            navigationTopNodes={navigationTopNodes}
            navigationBottomNodes={navigationBottomNode}
            focusNavigationNodeIndex={2}
            autoResize={false}  
          >
            {cmpt}
          </NavigationView>
        </div>

    	);
	}
}
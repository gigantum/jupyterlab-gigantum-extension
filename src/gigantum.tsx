// This is a Typescript / JSX file
// Note that tsconfig.json needs to include compilerOptions.jsx = "react"
// for tsc (and thus jlpm) to work by default

import { Panel } from '@phosphor/widgets';
// These libs don't have default exports, so this grabs everything
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { ToolbarButton } from '@jupyterlab/apputils';

// import { URLExt } from '@jupyterlab/coreutils';

// import { ObservableValue } from '@jupyterlab/observables';


class GigantumWidget extends Panel {

  constructor(client_url: string = "https://localhost:10000") {
    super();

    // Set some basic styling
    this.title.iconClass = 'jp-Gigantum-icon jp-SideBar-tabIcon';
    this.title.caption = 'Gigantum';
    this.id = 'jp-GigantumWidget';
    this.addClass('jp-GigantumWidget');

    ReactDOM.render(<GigantumInfo client_url={client_url} />, this.node);
  }

}

type InfoProps = {
  client_url: string
};

class GigantumInfo extends React.Component {
  props: InfoProps;
  state: { activeCell?: any,
           activityMode: string };
  // Once we have state, we should also specify types here

  constructor(props: InfoProps) {
    super(props);
    this.state = { activityMode: 'auto' };
  }

  // Note that I couldn't figure out a better type for this
  setTag(event: any) {
    this.setState({activityMode: event.target.value})
    console.log(this.state);
  }

  render(): React.ReactElement<any> {
    // the radio buttons are "uncontrolled" because radio buttons are annoying */
    return(
      <div>
        <h1>gigantum!</h1>
        <p><a href={this.props.client_url}>Open client</a></p>
        <div onChange={event => this.setTag(event)}>
          <input type="radio" value="auto" defaultChecked name="gigTag"/> Auto
          <input type="radio" value="show" name="gigTag"/> Show
          <input type="radio" value="hide" name="gigTag"/> Hide
          <input type="radio" value="ignore" name="gigTag"/> Ignore
        </div>
      </div>
    );
  }
}

export default GigantumWidget;

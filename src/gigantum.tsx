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

  constructor(client_url="https://localhost:10000") {
    super();

    // Set some basic styling
    this.title.iconClass = 'jp-Gigantum-icon jp-SideBar-tabIcon';
    this.title.caption = 'Gigantum';
    this.id = 'jp-GigantumWidget';
    this.addClass('jp-GigantumWidget');

    ReactDOM.render(<GigantumInfo client_url={client_url} />, this.node);
  }

}

type InfoProps {
  client_url: string
};

class GigantumInfo extends React.Component {
  props: InfoProps;
  // Once we have state, we should also specify types here

  constructor(props: InfoProps) {
    super(props);
    // this.state = { };
  }

  render(): React.ReactElement<any> {
    return(
      <div>
        <h1>gigantum</h1>
        <p><a href={this.props.client_url}>Open client</a></p>
      </div>
    );
  }
}

export default GigantumWidget;

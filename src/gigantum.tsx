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


/**
 * Widget for hosting the GitHub filebrowser.
 */
class GigantumWidget extends Panel {
  client_url: string;

  constructor() {
    super();
    this.client_url = 'https://localhost:10000'
    this.title.iconClass = 'jp-Gigantum-icon jp-SideBar-tabIcon';
    this.title.caption = 'Gigantum';
    this.id = 'jp-GigantumWidget';

    this.addClass('jp-GigantumWidget');

    ReactDOM.render(<GigantumInfo />, this.node);
  }

}


class GigantumInfo extends React.Component {
  state: {
      client_url: string
  };

  constructor(props: object) {
    super(props);
    this.state = { client_url: 'https://localhost:10000' };
  }

  render(): React.ReactElement<any> {
    return(
      <div>
        <h1>gigantum</h1>
        <p><a href={this.state.client_url}>Open client</a></p>
      </div>
    );
  }
}

export default GigantumWidget;

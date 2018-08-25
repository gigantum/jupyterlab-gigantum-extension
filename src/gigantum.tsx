// import { find } from '@phosphor/algorithm';

import { Panel } from '@phosphor/widgets';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { ToolbarButton } from '@jupyterlab/apputils';

// import { URLExt } from '@jupyterlab/coreutils';

// import { ObservableValue } from '@jupyterlab/observables';


/**
 * Widget for hosting the GitHub filebrowser.
 */
export class GigantumWidget extends Panel {
  client_url: string;

  constructor() {
    super();
    this.client_url = 'https://localhost:10000'
    this.title.iconClass = 'jp-Gigantum-icon jp-SideBar-tabIcon';
    this.title.caption = 'Gigantum';
    this.id = 'jp-GigantumWidget';

    this.addClass('jp-GigantumWidget');

    ReactDOM.render(<GigantumContents />, this.node);
    // this.node.appendChild(document.createTextNode('You are using Gigantum'));
  }

}

interface ContentsState {
    client_url: string;
}

class GigantumContents extends React.Component {
  state: ContentsState;

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

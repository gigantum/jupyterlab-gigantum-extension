// import { find } from '@phosphor/algorithm';

import { Panel } from '@phosphor/widgets';

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
    this.node.appendChild(document.createTextNode('You are using Gigantum'));
  }
}

export default GigantumWidget;

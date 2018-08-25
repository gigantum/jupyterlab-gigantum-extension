// import { find } from '@phosphor/algorithm';
import {
  JupyterLab
} from '@jupyterlab/application';
import { Panel } from '@phosphor/widgets';
import { Cell } from '@jupyterlab/cells';

import { INotebookTracker } from '@jupyterlab/notebook';


// import { ToolbarButton } from '@jupyterlab/apputils';

// import { URLExt } from '@jupyterlab/coreutils';

// import { ObservableValue } from '@jupyterlab/observables';


/**
 * Widget for hosting the GitHub filebrowser.
 */
export class GigantumWidget extends Panel {
  client_url: string;
  notebookTracker: INotebookTracker;
  activeCell: Cell;

  constructor(app: JupyterLab, notebook_Tracker: INotebookTracker) {
    super();
    this.notebookTracker = notebook_Tracker;
    console.log(this.notebookTracker.currentWidget)
    this.notebookTracker.currentChanged.connect(() => { console.log('changed'); })
    this.notebookTracker.activeCellChanged.connect(this.selectCellHandler)


    this.client_url = 'https://localhost:10000'
    this.title.iconClass = 'jp-Gigantum-icon jp-SideBar-tabIcon';
    this.title.caption = 'Gigantum';
    this.id = 'jp-GigantumWidget';

    this.addClass('jp-GigantumWidget');
    this.node.appendChild(document.createTextNode('You are using Gigantum'));

  }

  protected selectCellHandler(notebook_Tracker: INotebookTracker, cell: Cell): void {
    console.log(cell.model.metadata.get('tags'))
  }

}

export default GigantumWidget;

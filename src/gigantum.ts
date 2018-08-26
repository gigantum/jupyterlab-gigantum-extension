// import { find } from '@phosphor/algorithm';
import {
  JupyterLab
} from '@jupyterlab/application';
import { Panel } from '@phosphor/widgets';
import { Cell } from '@jupyterlab/cells';

import {get_activity_mode} from "./cellutil"

import { INotebookTracker } from '@jupyterlab/notebook';


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
    this.notebookTracker.activeCellChanged.connect(this.selectCellHandler)

    this.client_url = 'https://localhost:10000'
    this.title.iconClass = 'jp-Gigantum-icon jp-SideBar-tabIcon';
    this.title.caption = 'Gigantum';
    this.id = 'jp-GigantumWidget';

    this.addClass('jp-GigantumWidget');
    this.node.appendChild(document.createTextNode('You are using Gigantum'));

  }

  protected selectCellHandler(notebook_Tracker: INotebookTracker, cell: Cell): void {
    console.log(get_activity_mode(cell))
  }

}

export default GigantumWidget;

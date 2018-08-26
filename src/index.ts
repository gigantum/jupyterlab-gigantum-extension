import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import { INotebookTracker } from '@jupyterlab/notebook';

import { GigantumWidget } from './gigantum';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab-gigantum-extension extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-gigantum-extension',
  autoStart: true,
  requires: [INotebookTracker],
  activate: (app: JupyterLab, notebook_Tracker: INotebookTracker) => {
    const gigantumWidget = new GigantumWidget(app, notebook_Tracker);
    app.shell.addToLeftArea(gigantumWidget, {rank: 5000});
  }
};

export default extension;

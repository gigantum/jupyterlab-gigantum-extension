import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import { ICellTools, INotebookTracker } from '@jupyterlab/notebook';

import GigantumWidget from './gigantum';
//import TagTest from './tags';


import '../style/index.css';


/**
 * Initialization data for the jupyterlab-gigantum-extension extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-gigantum-extension',
  autoStart: true,
  requires: [INotebookTracker],
  activate: (app: JupyterLab, notebook_Tracker: INotebookTracker,
    cellTools: ICellTools) => {
    const gigantumWidget = new GigantumWidget(app, notebook_Tracker);
    //const tagWidget = new TagTest(app, notebook_Tracker)
    app.shell.addToLeftArea(gigantumWidget, {rank: 5});
    console.log('UPDATED');
  }
};

export default extension;

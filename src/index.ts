import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import GigantumWidget from './gigantum';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab-gigantum-extension extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-gigantum-extension',
  autoStart: true,
  activate: (app: JupyterLab) => {
    const gigantumWidget = new GigantumWidget();
    app.shell.addToLeftArea(gigantumWidget, {rank: 102});
    console.log('JupyterLab extension jupyterlab-gigantum-extension is activated!');
  }
};

export default extension;

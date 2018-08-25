import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab-gigantum-extension extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-gigantum-extension',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab-gigantum-extension is activated!');
  }
};

export default extension;

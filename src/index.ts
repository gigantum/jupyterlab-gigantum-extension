import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette
} from '@jupyterlab/apputils';

//import { INotebookTracker } from '@jupyterlab/notebook';

import {
  Widget, PanelLayout
} from '@phosphor/widgets';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab-gigantum-extension extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-gigantum-extension',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterLab, palette: ICommandPalette) => {
    console.log('Updated');
    console.log('ICommandPalette:', palette);
    let widget: Widget = new Widget();
    widget.id = 'gigantum-jupyterlab';
    //let notebookTracker: INotebookTracker = notebook_Tracker;

    widget.title.iconClass = 'jp-Gigantum-icon jp-SideBar-tabIcon';
    widget.title.caption = 'Gigantum';
    widget.addClass("jp-Gigantum")

    let header = document.createElement('h1');
    header.textContent = "TEST"
    widget.node.appendChild(header);

    let dropdown = document.createElement('select');
    dropdown.id = "mySelect";
    var trackingOptions = ["Auto","Always Show","Always Hide","Ignore"];
    for (var i = 0; i < trackingOptions.length; i++) {
        var option = document.createElement("option");
        option.value = trackingOptions[i];
        option.text = trackingOptions[i];
        dropdown.appendChild(option);
    }
    widget.node.appendChild(dropdown);

    let layout = new PanelLayout();
    layout.addWidget(widget);

    app.shell.addToLeftArea(widget, { rank: 10 });

  }
};

export default extension;

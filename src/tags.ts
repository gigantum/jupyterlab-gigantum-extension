import { CellTools } from '@jupyterlab/notebook';
import { Message } from '@phosphor/messaging';
import { INotebookTracker } from '@jupyterlab/notebook';

import { JupyterLab } from '@jupyterlab/application';


export class TagTest extends CellTools.Tool {
  constructor(app: JupyterLab, notebook_Tracker: INotebookTracker) {
    super();
    this.notebookTracker = notebook_Tracker;
    this.id = "testing"
  }

  /**
   * Handle a change to the active cell.
   */
  protected onActiveCellChanged(msg: Message): void {
    console.log("here")
    console.log(msg)
    console.log(this.parent.activeCell);
  }

  public notebookTracker: INotebookTracker = null;
}
export default TagTest;

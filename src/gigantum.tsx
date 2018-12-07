// This is a Typescript / JSX file
// Note that tsconfig.json needs to include compilerOptions.jsx = "react"
// for tsc (and thus jlpm) to work by default

// These libs don't have default exports, so this grabs everything
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Widget } from '@phosphor/widgets';
import { INotebookTracker } from '@jupyterlab/notebook';
import { Cell } from '@jupyterlab/cells';

import {get_activity_mode, set_activity_mode} from "./cellutil"

import '../style/gigantum.css';



class GigantumWidget extends Widget {

  constructor(notebookTracker: INotebookTracker) {
    super();

    // Set some basic styling
    this.title.iconClass = 'jp-Gigantum-icon jp-SideBar-tabIcon';
    this.title.caption = 'Gigantum';
    this.id = 'jp-GigantumWidget';
    this.addClass('jp-GigantumWidget');

    // we'll eventually set this dynamically using logic from the app
    const clientUrl: string = "/";

    ReactDOM.render(<GigantumInfo clientUrl={clientUrl} notebookTracker={notebookTracker}/>,
                    this.node);
  }

}

type InfoProps = {
  clientUrl: string,
  notebookTracker: INotebookTracker
};

class GigantumInfo extends React.Component {
  props: InfoProps;
  state: { activityMode: string,
           currentCell: any };

  constructor(props: InfoProps) {
    super(props);

    this.state = {
      activityMode: 'auto',
      currentCell: null,
   };
    props.notebookTracker.activeCellChanged.connect(
        (notebookTracker, cell) => this.selectCellHandler(notebookTracker, cell) );
  }

  setTag(mode: string, cell: any) {
    set_activity_mode(cell, mode);
    this.setState({activityMode: mode})
  }

  render(): React.ReactElement<any> {
    const isAuto = this.state.activityMode === 'auto';
    const isShow = this.state.activityMode === 'show';
    const isHide = this.state.activityMode === 'hide';
    const isIgnore = this.state.activityMode === 'ignore';
    return(
      <div className="sideBar">
        <a
          className="logo"
          href={this.props.clientUrl}
        >
        </a>

        <div
          className={`activity__type${isAuto ? ' activity__type--selected' : ''}`}
          onClick={event => this.setTag('auto', this.state.currentCell)}
        >
          <label htmlFor="activity__label">
            <b>Auto</b>
          </label>

          <p className="activity__paragraph">Gigantum will determine how the cell will be displayed in the activity feed</p>

        </div>

        <div
          className={`activity__type${isShow ? ' activity__type--selected' : ''}`}
          onClick={event => this.setTag('show', this.state.currentCell)}
        >
          <label htmlFor="activity__label">
            <b>Show</b>
          </label>

          <p className="activity__paragraph">Ensures the cell will appear in the activity feed</p>

        </div>

        <div
          className={`activity__type${isHide ? ' activity__type--selected' : ''}`}
          onClick={event => this.setTag('hide', this.state.currentCell)}
        >

          <label htmlFor="activity__label">
            <b>Hide</b>
          </label>

          <p className="activity__paragraph">Marks the cell as a minor activity and will be grouped with other minor activities in the activity feed</p>

        </div>

        <div
          className={`activity__type${isIgnore ? ' activity__type--selected' : ''}`}
          onClick={event => this.setTag('ignore', this.state.currentCell)}
        >
          <label htmlFor="activity__label">
            <b>Ignore</b>
          </label>

          <p className="activity__paragraph">Cell will not appear in the gigantum activity feed</p>

        </div>
      </div>
    );
  }


  protected selectCellHandler(notebookTracker: INotebookTracker, cell: Cell): void {
    this.setState({ currentCell: cell, activityMode: get_activity_mode(cell) })
  }

}

export default GigantumWidget;

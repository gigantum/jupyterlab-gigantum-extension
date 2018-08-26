// This is a Typescript / JSX file
// Note that tsconfig.json needs to include compilerOptions.jsx = "react"
// for tsc (and thus jlpm) to work by default

// These libs don't have default exports, so this grabs everything
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Panel } from '@phosphor/widgets';
import { INotebookTracker } from '@jupyterlab/notebook';
import { Cell } from '@jupyterlab/cells';

import {get_activity_mode} from "./cellutil"


class GigantumWidget extends Panel {

  constructor(notebookTracker: INotebookTracker) {
    super();

    // Set some basic styling
    this.title.iconClass = 'jp-Gigantum-icon jp-SideBar-tabIcon';
    this.title.caption = 'Gigantum';
    this.id = 'jp-GigantumWidget';
    this.addClass('jp-GigantumWidget');

    // we'll eventually set this dynamically using logic from the app
    const clientUrl: string = "https://localhost:10000";

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
  state: { activeCell?: any,
           activityMode: string };
  // Once we have state, we should also specify types here

  constructor(props: InfoProps) {
    // Note that we'll keep *everything* we pass in to the component
    super(props);

    // TODO this should get tucked into a child widget for each cell, and be
    // freshly set each time we get a new cell.
    this.state = { activityMode: 'auto' };
    // XXX do we need to do antying addiitonal to set the initial cell?
    props.notebookTracker.activeCellChanged.connect(
        (notebookTracker, cell) => this.selectCellHandler(notebookTracker, cell) );
  }

  // Note that I couldn't figure out a better type for this
  setTag(event: any) {
    this.setState({activityMode: event.target.value})
    console.log(this.state);
  }

  render(): React.ReactElement<any> {
    // the radio buttons are "uncontrolled" because radio buttons are annoying */
    return(
      <div>
        <h1>gigantum!</h1>
        <p><a href={this.props.clientUrl}>Open client</a></p>
        <div onChange={event => this.setTag(event)}>
          <input type="radio" value="auto" defaultChecked name="gigTag"/> Auto
          <input type="radio" value="show" name="gigTag"/> Show
          <input type="radio" value="hide" name="gigTag"/> Hide
          <input type="radio" value="ignore" name="gigTag"/> Ignore
        </div>
      </div>
    );
  }


  protected selectCellHandler(notebookTracker: INotebookTracker, cell: Cell): void {
    // TODO set the active cell, check current state
    // we also need to hang onto a reference to the cell (or something) so we
    // can update the tags
    console.log(notebookTracker);
    console.log(cell);
    console.log(get_activity_mode(cell))
  }

}

export default GigantumWidget;

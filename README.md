# jupyterlab-gigantum-extension

Integration with the Gigantum Client.


## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install @gigantum/jupyterlab-extension
```

## Development

Currently, Jupyter Lab bundles and uses Yarn at installtion. There are some
issues that need to be addressed with Typescript + React + Yarn, so we also use
yarn here to keep things consistent.  For a development install, do the
following in the repository directory:

```bash
yarn install
yarn build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app (not tested):

```bash
yarn build
jupyter lab build
```


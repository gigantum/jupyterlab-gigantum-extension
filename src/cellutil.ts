import { Cell } from "@jupyterlab/cells";

export function set_activity_mode(cell: Cell, mode: string) {
  const allowed_modes: string[] = [ "auto", "show", "hide", "ignore"];
  if (allowed_modes.indexOf(mode) == -1) {
    throw "Unsupported activity mode";
  }
  // let current_tags = cell.model.metadata.get("tags") as string;
  let new_tags: string;
  new_tags = "gigantum:activity:" + mode;
  // commented out since we dont need array currently
  // if (current_tags === undefined) {
  //   new_tags.push("gigantum:activity:" + mode)
  // } else if (current_tags.indexOf("gigantum:activity:") !== -1) {
  //   // Update an existing activity mode tag
  //   for (let idx = 0; idx < current_tags.length; idx++) {
  //     if (current_tags[idx].indexOf("gigantum:activity:") !== -1) {
  //       new_tags.push("gigantum:activity:" + mode)
  //     } else {
  //       new_tags.push(current_tags[idx])
  //     }
  //   }

  // } else {
  //   new_tags = current_tags
  //   new_tags.push("gigantum:activity:" + mode);
  // }
  cell.model.metadata.set("tags", new_tags);
}

export function get_activity_mode(cell: Cell) {
  // If an activity tag is present, return it. If not, return 'auto'
  let current_tags = cell && cell.model && cell.model.metadata.get("tags") as string;
  let mode: string = "auto";
  if (current_tags === undefined) {
    mode = "auto";
  } else {
    if (current_tags && current_tags.indexOf("gigantum:activity:") !== -1){
      mode = current_tags.split(":")[2];
    }
  }

  return mode;
}

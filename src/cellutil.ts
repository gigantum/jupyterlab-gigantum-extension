import { Cell } from "@jupyterlab/cells";

export function set_activity_mode(cell: Cell, mode: string) {
  const allowed_modes: string[] = [ "auto", "show", "hide", "ignore"];
  if !allowed_modes.includes(mode){
    throw "Unsupported activity mode";
  }

  let current_tags = cell.model.metadata.get("tags") as string[];
  if (current_tags === undefined) {
    new_tags = ["gigantum:activity:" + mode];
  } else if current_tags.includes("gigantum:activity:") {
    // Update an existing activity mode tag
    let new_tags: string[] = [];
    for (let idx = 0; idx < current_tags.length; idx++) {
      if current_tags[idx].includes("gigantum:activity:"){
        new_tags.push("gigantum:activity:" + mode)
      } else{
        new_tags.push(current_tags[i])
      }
    }
  } else {
    new_tags = current_tags
    new_tags.push("gigantum:activity:" + mode)
  }

  cell.model.metadata.set("tags", new_tags);
}

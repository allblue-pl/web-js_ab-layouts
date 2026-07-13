import LayoutNode from "./LayoutNode";
import Parser from "./Parser";

export class abLayouts_Class {
    get LayoutNode() {
        return LayoutNode;
    }

    get Parser() {
        return Parser;
    }
}
const abLayouts = new abLayouts_Class();
export default abLayouts;

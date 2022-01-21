import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useRef, useState } from "react";
import { StoreContext } from "../store/Store";
import { TOGGLE_MENU_ACT } from "../store/storeActions";
import { doRedo, doUndo } from "../utils/utils";
const Dropdown = (props) => {
    //TODO make clicking on other elements close the modal
    const [state, dispatch] = useContext(StoreContext);
    const menuRef = useRef(null);
    const [timer, setTimer] = useState(setTimeout(() => null, 0));
    const handleMouseIn = () => {
        clearTimeout(timer);
    };
    const handleMouseOut = () => {
        setTimer(setTimeout(() => {
            if (state.dropMenu.isVisible)
                dispatch({ type: TOGGLE_MENU_ACT });
        }, 1000));
    };
    return (_jsxs("div", { onMouseEnter: handleMouseIn, onMouseLeave: handleMouseOut, ref: menuRef, className: `min-w-[120px] absolute right-3 top-10 w-max flex flex-col gap-2 font-textfont text-sneucolor-150 border border-fneucolor-300 px-2 py-2 rounded-lg bg-fneucolor-100 transition-all ${state.dropMenu.isVisible ? "block" : "hidden"}`, children: [_jsx("label", { htmlFor: "file-open", className: "text-sm text-left px-2 py-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200 cursor-pointer", children: "Open" }, void 0), _jsx("input", { type: "file", onChange: props.openFile, id: "file-open", className: "hidden" }, void 0), _jsx("a", { onClick: props.saveFile, download: props.nameFile == "" ? "New.txt" : `${props.nameFile}`, href: props.linkdownload, className: "text-sm text-left px-2 py-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200 cursor-pointer", children: "Save" }, void 0), _jsxs("button", { onClick: () => doUndo([state, dispatch]), className: "text-sm text-left px-2 py-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200", children: ["Undo ", _jsx("span", { className: "text-xs text-fneucolor-300 ml-2", children: "alt + z" }, void 0)] }, void 0), _jsxs("button", { onClick: () => doRedo([state, dispatch]), className: "text-sm text-left px-2 py-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200", children: ["Redo ", _jsx("span", { className: "text-xs text-fneucolor-300 ml-2", children: "alt + y" }, void 0)] }, void 0)] }, void 0));
};
export default Dropdown;

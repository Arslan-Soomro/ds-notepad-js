import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState, useRef, useLayoutEffect } from "react";
import Dropdown from "./Dropdown";
import { StoreContext } from "../store/Store";
import { TOGGLE_MENU_ACT, UPDATE_SEARCH_ACT, INITIALIZE_SEARCH_ACT, TOGGLE_REPLACE_ACT } from "../store/storeActions";
import { doRedo, doUndo } from "../utils/utils";
const Navbar = () => {
    const [state, dispatch] = useContext(StoreContext);
    const [timer, setTimer] = useState(setTimeout(() => null, 0)); //A Timer id is stored which is a number
    const [fileName, setFileName] = useState("");
    const [downloadLink, setDownloadLink] = useState("");
    const searchInputRef = useRef(null);
    let fileReader;
    //Updates Search State only when delayTime (ms) has passed after user has last typed
    const searchChangeHandler = (e) => {
        //Set delay to 500 for Optimized performance but slower response
        const delayTime = 50;
        clearTimeout(timer);
        setTimer(setTimeout(() => {
            dispatch({ type: UPDATE_SEARCH_ACT, payload: e.target.value });
        }, delayTime));
    };
    useLayoutEffect(() => {
        dispatch({ type: INITIALIZE_SEARCH_ACT, payload: searchInputRef.current });
    }, []);
    const handleFileRead = (e) => {
        const content = fileReader.result;
        //console.log("content: " + content);
        state.textRef.innerText = content;
    };
    const handleFileOpen = async (e) => {
        if (e.target.files) {
            //console.log(e.target?.files[0]);
            setFileName(e.target?.files[0].name);
            fileReader = new FileReader();
            fileReader.onloadend = handleFileRead;
            fileReader.readAsText(e.target.files[0]);
        }
    };
    const saveFileHandler = () => {
        const data = new Blob([state.textRef.innerText], { type: 'text/plain' });
        if (downloadLink != "")
            window.URL.revokeObjectURL(downloadLink);
        setDownloadLink(window.URL.createObjectURL(data));
    };
    //TODO make undo redo buttons change color to prime when ever undo and redo is possible
    return (_jsx("nav", { className: " bg-fneucolor-100  border-b border-fneucolor-200", children: _jsxs("div", { className: "flex flex-row px-4 py-2 h-full w-full max-w-[1280px] justify-around items-center", children: [_jsxs("div", { className: "flex justify-center items-center", children: [_jsx("h5", { className: `inline-block mr-5 mb-1 font-titlefont text-4xl tracking-tighter text-primecolor-100`, children: "ds" }, void 0), _jsx("button", { onClick: () => doUndo([state, dispatch]), className: "border border-fneucolor-200 py-2 px-2 border-r-0 rounded-tl-lg rounded-bl-lg bg-fneucolor-100 hover:bg-fneucolor-150 active:bg-fneucolor-200", children: _jsx("svg", { className: "w-4 h-4 fill-primecolor-100", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: _jsx("path", { d: "M18.885 3.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706 7.297-2.676 10.073.1 4.341 4.341 1.737 12.291-5.491 12.291v4.8c3.708 0 6.614-1.244 8.885-3.515 4.686-4.686 4.686-12.284 0-16.97z" }, void 0) }, void 0) }, void 0), _jsx("button", { onClick: () => doRedo([state, dispatch]), className: "border border-fneucolor-200 py-2 px-2 rounded-tr-lg rounded-br-lg bg-fneucolor-100 hover:bg-fneucolor-150 active:bg-fneucolor-200", children: _jsx("svg", { className: "w-4 h-4 fill-primecolor-100", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: _jsx("path", { d: "M5.115 3.515c4.617-4.618 12.056-4.676 16.756-.195l2.129-2.258v7.938h-7.484l2.066-2.191c-2.82-2.706-7.297-2.676-10.073.1-4.341 4.341-1.737 12.291 5.491 12.291v4.8c-3.708 0-6.614-1.244-8.885-3.515-4.686-4.686-4.686-12.284 0-16.97z" }, void 0) }, void 0) }, void 0)] }, void 0), _jsxs("div", { className: "hidden md:flex max-w-[500px] gap-2 items-center", children: [_jsx("input", { placeholder: "Search", onChange: searchChangeHandler, ref: searchInputRef, className: "text-base h-fit border border-fneucolor-200 py-1 px-3 rounded-lg w-full font-textfont text-sneucolor-200" }, void 0), _jsxs("button", { onClick: () => dispatch({ type: TOGGLE_REPLACE_ACT }), className: "m-2 py-1 px-3 transition rounded-lg bg-fneucolor-100 hover:bg-fneucolor-150 active:bg-fneucolor-200 border border-fneucolor-200 text-primecolor-100 font-textfont", children: ["R", _jsx("span", { className: "hidden lg:inline", children: "eplace" }, void 0)] }, void 0)] }, void 0), _jsxs("div", { className: "font-textfont", children: [_jsx("a", { onClick: saveFileHandler, download: fileName == "" ? "New.txt" : `${fileName}`, href: downloadLink, className: "hidden sm:inline-block m-2 py-1 px-3 transition rounded-lg bg-primecolor-100 hover:bg-primecolor-150 active:bg-primecolor-200 text-fneucolor-100 cursor-pointer", children: "Save" }, void 0), _jsx("label", { htmlFor: "open-file", className: "hidden sm:inline-block m-2 py-1 px-3 transition rounded-lg bg-fneucolor-100 hover:bg-fneucolor-150 active:bg-fneucolor-200 border border-fneucolor-250 text-sneucolor-200 cursor-pointer", children: "Open" }, void 0), _jsx("input", { type: "file", onChange: handleFileOpen, id: "open-file", className: "hidden" }, void 0), _jsxs("div", { className: "relative inline-block", children: [_jsx("svg", { onClick: () => dispatch({ type: TOGGLE_MENU_ACT }), xmlns: "http://www.w3.org/2000/svg", className: "m-2 h-7 w-7 cursor-pointer inline-block text-primecolor-100 hover:text-primecolor-150 active:text-primecolor-200", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" }, void 0) }, void 0), _jsx(Dropdown, { openFile: handleFileOpen, saveFile: saveFileHandler, nameFile: fileName, linkdownload: downloadLink }, void 0)] }, void 0)] }, void 0)] }, void 0) }, void 0));
};
export default Navbar;

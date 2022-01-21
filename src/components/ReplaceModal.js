import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useRef } from "react";
import { StoreContext } from "../store/Store";
import { TOGGLE_REPLACE_ACT, UPDATE_REPLACE_ACT } from "../store/storeActions";
const ReplaceModal = () => {
    const [state, dispatch] = useContext(StoreContext);
    const replaceInputRef = useRef(null);
    const replaceClickHandler = () => {
        dispatch({
            type: UPDATE_REPLACE_ACT,
            payload: replaceInputRef?.current?.value ? replaceInputRef.current.value : ""
        });
    };
    useEffect(() => {
        if (state.replace.val != undefined && state.search.dval != undefined) {
            const replaceVal = state.replace.val.trim();
            const searchVal = state.search.dval.trim();
            if (replaceVal != "" && searchVal != "" && state.textRef) {
                state.textRef.innerHTML = state.textRef.innerText.replaceAll(searchVal, replaceVal);
                if (state.search.ref?.value)
                    state.search.ref.value = "";
                dispatch({
                    type: TOGGLE_REPLACE_ACT
                });
                dispatch({
                    type: UPDATE_REPLACE_ACT,
                    payload: "",
                });
            }
        }
        ;
    }, [state.replace.val]);
    return (_jsx("div", { className: "w-full h-full absolute flex justify-center items-center bg-[#0000001f]", children: _jsxs("div", { className: "relative bg-fneucolor-100 overflow-hidden bg-fneucolor border border-fneucolor-250 max-w-[600px] max-h-[350px] font-textfont rounded-lg", children: [_jsxs("div", { className: "relative border-b flex justify-between px-5 py-3", children: [_jsx("p", { className: "font-textfont text-primecolor-100", children: "Replace" }, void 0), _jsx("button", { onClick: () => dispatch({ type: TOGGLE_REPLACE_ACT }), children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-primecolor-100 hover:text-primecolor-150 active:text-primecolor-200", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }, void 0) }, void 0) }, void 0)] }, void 0), _jsx("div", { className: "p-8", children: _jsx("input", { ref: replaceInputRef, placeholder: "replace with", className: "text-base h-fit border border-fneucolor-200 py-3 px-3 rounded-lg w-full font-textfont text-sneucolor-200" }, void 0) }, void 0), _jsx("button", { onClick: replaceClickHandler, className: "border-t border-fneucolor-250 w-full p-3 font-headingfont text-primecolor-100 text-lg hover:bg-fneucolor-150 active:bg-fneucolor-200", children: "Replace" }, void 0)] }, void 0) }, void 0));
};
export default ReplaceModal;

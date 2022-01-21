import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import ReplaceModal from "./components/ReplaceModal";
import Textbox from "./components/Textbox";
import { StoreContext } from "./store/Store";
function App() {
    const [state, dispatch] = useContext(StoreContext);
    return (_jsxs("div", { className: "App flex flex-col h-full w-full relative", children: [state.replace.isVisible ? _jsx(ReplaceModal, {}, void 0) : null, _jsx(Navbar, {}, void 0), _jsx(Textbox, {}, void 0)] }, void 0));
}
export default App;

/* @refresh reload */
import { render } from "solid-js/web";
import "virtual:windi.css";
import "virtual:windi-devtools";

import ActionBar from "./components/ActionBar";

import Editor from "./components/Editor";
import Output from "./components/Output";


function App() {
    return (
        <div class="h-screen w-screen flex flex-col">
            <ActionBar />
            <div class="font-medium bg-primary text-text flex md:flex-row <md:flex-col flex-auto flex-grow flex-shrink">
                <Editor />
                <Output />
            </div>
        </div>
    );
};

render(() => <App/>, document.getElementById("root") as HTMLElement);
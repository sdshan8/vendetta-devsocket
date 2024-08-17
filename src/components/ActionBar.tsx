import { JSX, createSignal } from "solid-js";

import Icon from "./Icon";
import Button from "./Button";
import ServerConnect from "./ServerConnect";

import sendCode from "../lib/sendCode";

import { code } from "./Editor"
import { setRecieved } from "./Output";

export default () => {
    return (
        <div class="h-fit p-2 flex flex-row items-center gap-2 <md:items-center <md:self-center bg-primary text-text <md:flex-wrap flex-auto flex-grow-0 flex-shrink-1">
            <Icon />
            <div class="m-auto"></div>
            <ServerConnect />
            <div class="md:m-auto"></div>
            <Button
                onClick={() => {
                    setRecieved([]);
                }}
            >
                Clear Console
            </Button>
                <div class="<md:m-auto"></div>
            <Button
                onClick={() => {
                    sendCode(code());
                }}
            >
                Send Code
            </Button>
        </div>
    );
};
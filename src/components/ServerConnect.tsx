import { JSX, createSignal } from "solid-js";

import connect from "../lib/connect";


export const [serverUrl, setServerUrl] = createSignal("");

export default () => {
    return (
        <div class="flex flex-row">
            <textarea
                onChange={(e: Event) => {
                        setServerUrl((e.target as HTMLTextAreaElement).value);
                    }}
                placeholder="Server URL"
                class="transition-colors w-auto h-10 block resize-none p-2 self-center rounded-l-[3px] focus:outline-none bg-secondary focus:bg-tertiary"
            ></textarea>
            <button
                onClick={() => {
                    try {
                        connect(new URL(serverUrl()));
                    } catch (err: any) {
                        alert(err.message)
                    }
                }}
                class="transition-colors w-auto bg-accent font-medium leading-tight h-10 p-2 items-center content-center hover:(bg-accent-dimmed) rounded-r-[3px]"
            >
                Connect
            </button>
        </div>
    );
};
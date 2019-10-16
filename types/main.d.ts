declare type Listener = ((...payload: any) => void) & {
    isOnce?: boolean;
};
export default class MiniEvent {
    private _listenersMap;
    constructor();
    on(evnetName: string, linstener: Listener): MiniEvent;
    once(evnetName: string, listener: Listener): MiniEvent;
    off(evnetName: string, linstener?: Listener): MiniEvent;
    emit(evnetName: string, ...payload: any): boolean;
    has(eventName: string): boolean;
    eventNames(): string[];
    destory(): void;
}
export {};

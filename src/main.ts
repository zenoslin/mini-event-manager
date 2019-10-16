type Listener = (...payload: any) => void;

interface ListenersMap {
  [propName: string]: Listener[];
}

export default class MiniEvent {
  private _listenersMap: ListenersMap;

  constructor() {
    this._listenersMap = {};
  }

  on(evnetName: string, linstener: Listener): MiniEvent {
    if (undefined === this._listenersMap[evnetName]) {
      this._listenersMap[evnetName] = [];
    }
    this._listenersMap[evnetName].push(linstener);
    return this;
  }

  off(evnetName: string, linstener?: Listener): MiniEvent {
    const listenerList: Listener[] = this._listenersMap[evnetName];
    // has this event
    if (listenerList !== undefined) {
      if (linstener === undefined) {
        // clear all listener
        delete this._listenersMap[evnetName];
      } else {
        // clear this event
        const index = listenerList.findIndex(
          (fn: Listener) => fn === linstener
        );
        listenerList.splice(index, 1);
      }
    }
    return this;
  }

  emit(evnetName: string, ...payload: any): boolean {
    const linstenerList: Listener[] = this._listenersMap[evnetName];
    if (undefined !== linstenerList && 0 < linstenerList.length) {
      for (let [index, listener] of linstenerList.entries()) {
        listener(...payload);
      }
      return true;
    } else {
      return false;
    }
  }
}

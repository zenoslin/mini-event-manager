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

  emit(evnetName: string, ...payload: any): boolean {
    const linsteners: Listener[] = this._listenersMap[evnetName];
    if (undefined !== linsteners && 0 < linsteners.length) {
      for (let [index, listener] of linsteners.entries()) {
        listener(...payload);
      }
      return true;
    } else {
      return false;
    }
  }
}

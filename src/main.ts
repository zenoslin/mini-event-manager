type Listener = ((...payload: any) => void) & { isOnce?: boolean };

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

  once(evnetName: string, listener: Listener): MiniEvent {
    listener.isOnce = true;
    this.on(evnetName, listener);
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
    const listenerList: Listener[] = this._listenersMap[evnetName];
    if (undefined !== listenerList && 0 < listenerList.length) {
      for (let [index, listener] of listenerList.entries()) {
        if (listener.isOnce) {
          let listenerClone = listener;
          listenerList.splice(index, 1);
          listenerClone(...payload);
        } else {
          listener(...payload);
        }
      }
      return true;
    } else {
      return false;
    }
  }

  has(eventName: string): boolean {
    return (
      this._listenersMap[eventName] !== undefined &&
      this._listenersMap[eventName].length > 0
    );
  }
}

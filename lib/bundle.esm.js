/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var EventManager = (function () {
    function EventManager() {
        this._listenersMap = {};
    }
    EventManager.prototype.on = function (evnetName, linstener) {
        if (undefined === this._listenersMap[evnetName]) {
            this._listenersMap[evnetName] = [];
        }
        this._listenersMap[evnetName].push(linstener);
        return this;
    };
    EventManager.prototype.once = function (evnetName, listener) {
        listener.isOnce = true;
        this.on(evnetName, listener);
        return this;
    };
    EventManager.prototype.off = function (evnetName, linstener) {
        var listenerList = this._listenersMap[evnetName];
        if (listenerList !== undefined) {
            if (linstener === undefined) {
                delete this._listenersMap[evnetName];
            }
            else {
                var index = listenerList.findIndex(function (fn) { return fn === linstener; });
                listenerList.splice(index, 1);
            }
        }
        return this;
    };
    EventManager.prototype.emit = function (evnetName) {
        var e_1, _a;
        var payload = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            payload[_i - 1] = arguments[_i];
        }
        var listenerList = this._listenersMap[evnetName];
        if (undefined !== listenerList && 0 < listenerList.length) {
            try {
                for (var _b = __values(listenerList.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), index = _d[0], listener = _d[1];
                    if (listener.isOnce) {
                        var listenerClone = listener;
                        listenerList.splice(index, 1);
                        listenerClone.apply(void 0, __spread(payload));
                    }
                    else {
                        listener.apply(void 0, __spread(payload));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return true;
        }
        else {
            return false;
        }
    };
    EventManager.prototype.has = function (eventName) {
        return (this._listenersMap[eventName] !== undefined &&
            this._listenersMap[eventName].length > 0);
    };
    EventManager.prototype.eventNames = function () {
        var eventNameList = [];
        for (var eventName in this._listenersMap) {
            eventNameList.push(eventName);
        }
        return eventNameList;
    };
    EventManager.prototype.destory = function () {
        this._listenersMap = {};
    };
    return EventManager;
}());

export default EventManager;
//# sourceMappingURL=bundle.esm.js.map

# mini-event-manager

:satellite: A mini event manager.

## Get start

```bash
git clone https://github.com/zenoslin/mini-event-manager.git
cd mini-event-manager
npm run build
```

## Method 

### on(event, listener)

Bind event listener.

| name         | type   | data type       | need | description       |
| ------------ | ------ | --------------- | ---- | ----------------- |
| event        | param  | `String/Symbol` | yes  | event name        |
| listener     | param  | `Function`      | yes  | callback function |
| eventManager | return | `EventManager`  |      | instantiation     |

### off(event, listener)

Clear event listener. if  `listener === undefined` , it will clear all listener which bind this event.

| name         | type   | data type       | need | description       |
| ------------ | ------ | --------------- | ---- | ----------------- |
| event        | param  | `String/Symbol` | yes  | event name        |
| listener     | param  | `Function`      | yes  | callback function |
| eventManager | return | `EventManager`  |      | instantiation     |

### once(event, listener)

Bind event listener, only trigger once.

| name         | type   | data type       | need | description       |
| ------------ | ------ | --------------- | ---- | ----------------- |
| event        | param  | `String/Symbol` | yes  | event name        |
| listener     | param  | `Function`      | yes  | callback function |
| eventManager | return | `EventManager`  |      | instantiation     |

### emit(event[, ...args])

Trigger event listener.

| name         | type   | data type       | need | description   |
| ------------ | ------ | --------------- | ---- | ------------- |
| event        | param  | `String/Symbol` | yes  | event name    |
| ...args      | param  | `Any`           | yes  | params        |
| eventManager | return | `EventManager`  |      | instantiation |

### has(event)

Check if the event has a listener

| name  | type   | data type       | need | description |
| ----- | ------ | --------------- | ---- | ----------- |
| event | param  | `String/Symbol` | yes  | event name  |
|       | return | `Boolean`       |      | has         |

### destory()

Destory event manager instantiation.

## LICENSE
[MIT](LICENSE)
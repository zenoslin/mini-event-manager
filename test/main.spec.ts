import EventManager from "../src/main";

test("on&emit is regular?", () => {
  const manager = new EventManager();
  const mockCallback = jest.fn();
  manager.on("add", mockCallback);
  expect(manager.emit("add")).toBeTruthy();
});

test("can emit multiple parameters ?", () => {
  const manager = new EventManager();
  const add = (n: number[]): number =>
    n.reduce((prev: number, current: number) => {
      return prev + current;
    });
  manager.on("add", (...n: number[]) => {
    let result = add(n);
    expect(result).toBe(10);
  });
  manager.emit("add", 1, 2, 3, 4);
});

test("off is regular?", () => {
  const manager = new EventManager();
  const mockCallback = jest.fn();
  manager.on("add", mockCallback);
  manager.off("add", mockCallback);
  manager.off("next", mockCallback);
  manager.emit("add");
  expect(mockCallback.mock.calls.length).toBe(0);
});

test("clear all listener?", () => {
  const manager = new EventManager();
  const mockCallback = jest.fn();
  manager.on("add", mockCallback);
  manager.on("add", mockCallback);
  manager.off("add");
  manager.emit("add");
  expect(mockCallback.mock.calls.length).toBe(0);
});

test("once is regular?", () => {
  const manager = new EventManager();
  const mockCallback = jest.fn();
  manager.once("add", mockCallback);
  manager.emit("add");
  manager.emit("add");
  expect(mockCallback.mock.calls.length).toBe(1);
});

test("can bind multiple listener by the same event ?", () => {
  const manager = new EventManager();
  const mockCallback = jest.fn();
  manager.on("add", mockCallback);
  manager.on("add", mockCallback);
  manager.emit("add");
  expect(mockCallback.mock.calls.length).toBe(2);
});

test("has is regular?", () => {
  const manager = new EventManager();
  const mockCallback = jest.fn();
  manager.on("add", mockCallback);
  expect(manager.has("add")).toBeTruthy();
  expect(manager.has("next")).toBeFalsy();
});

test("get all eventName?", () => {
  const manager = new EventManager();
  const mockCallback = jest.fn();
  manager.on("add", mockCallback);
  manager.on("next", mockCallback);
  manager.on("last", mockCallback);
  expect(manager.eventNames().length).toBe(3);
  expect(manager.eventNames()).toContain("add");
  expect(manager.eventNames()).toContain("next");
  expect(manager.eventNames()).toContain("last");
});

test("destory is regular?", () => {
  const manager = new EventManager();
  const mockCallback = jest.fn();
  manager.on("add", mockCallback);
  manager.destory();
  manager.emit("add");
  expect(mockCallback.mock.calls.length).toBe(0);
});

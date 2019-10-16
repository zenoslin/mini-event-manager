import EventManager from "../src/main";
import MiniEvent from "../src/main";

test("on&emit is regular?", () => {
  const manager = new EventManager();
  const mockCallback = jest.fn();
  manager.on("add", mockCallback);
  expect(manager.emit("add")).toBeTruthy();
});

test("off is regular?", () => {
  const manager = new MiniEvent();
  const mockCallback = jest.fn();
  manager.on("add", mockCallback);
  manager.off("add", mockCallback);
  manager.off("next", mockCallback);
  manager.emit("add");
  expect(mockCallback.mock.calls.length).toBe(0);
});

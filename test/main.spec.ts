import EventManager from "../src/main";

test("on和emit是否正常?", () => {
  const manager = new EventManager();
  const mockCallback = jest.fn();
  manager.on("add", mockCallback);
  expect(manager.emit("add")).toBeTruthy();
});

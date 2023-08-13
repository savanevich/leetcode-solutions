import { EventEmitter } from "./event-emitter";

describe("EventEmitter", () => {
  it("should subscribe to an event and emit with correct values", () => {
    const emitter = new EventEmitter();
    let receivedValue = null;

    function onClickCallback(value) {
      receivedValue = value;
    }

    const sub = emitter.subscribe("onClick", onClickCallback);
    emitter.emit("onClick", [42]);

    expect(receivedValue).toBe(42);

    sub.unsubscribe();
  });

  it("should unsubscribe from an event", () => {
    const emitter = new EventEmitter();
    let receivedValue = null;

    function onClickCallback(value) {
      receivedValue = value;
    }

    const sub = emitter.subscribe("onClick", onClickCallback);
    sub.unsubscribe();
    emitter.emit("onClick", [99]);

    expect(receivedValue).toBe(null);
  });

  it("should emit to multiple listeners", () => {
    const emitter = new EventEmitter();
    const results = [];

    function callback1() {
      return 1;
    }

    function callback2() {
      return 2;
    }

    emitter.subscribe("event1", callback1);
    emitter.subscribe("event1", callback2);

    const emittedResults = emitter.emit("event1");
    expect(emittedResults).toEqual([1, 2]);
  });

  it("should handle non-existent events", () => {
    const emitter = new EventEmitter();
    const emittedResults = emitter.emit("nonExistentEvent");
    expect(emittedResults).toEqual([]);
  });

  it("should handle multiple events", () => {
    const emitter = new EventEmitter();
    let counter = 0;

    function callback1() {
      counter++;
    }

    function callback2() {
      counter += 2;
    }

    emitter.subscribe("event1", callback1);
    emitter.subscribe("event2", callback2);

    emitter.emit("event1");
    expect(counter).toBe(1);

    emitter.emit("event2");
    expect(counter).toBe(3);
  });
});

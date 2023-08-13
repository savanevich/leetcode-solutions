/**
 * 2694. Event Emitter
 * https://leetcode.com/problems/event-emitter/
 */

type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

export class EventEmitter {
  private events: Map<string, Callback[]> = new Map();

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const listeners = this.events.get(eventName);
    listeners.push(callback);

    return {
      unsubscribe: () => {
        const index = listeners.indexOf(callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (!this.events.has(eventName)) {
      return [];
    }

    const listeners = this.events.get(eventName);
    const results = [];

    for (const listener of listeners) {
      results.push(listener(...args));
    }

    return results;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

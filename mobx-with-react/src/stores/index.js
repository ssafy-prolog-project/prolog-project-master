import CounterStore from './counter';
import PostStore from './postStore';
import TestStore from './testStore';

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.postStore = new PostStore(this);
    this.testStore = new TestStore(this);
  }
}

export default RootStore;
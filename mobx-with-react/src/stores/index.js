import CounterStore from './counter';
import PostStore from './postStore';

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.postStore = new PostStore(this);
  }
}

export default RootStore;
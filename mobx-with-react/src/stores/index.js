import CounterStore from './counter';
import PostStore from './post';

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.post = new PostStore(this);
  }
}

export default RootStore;
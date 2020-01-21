import CounterStore from './counter';
import MarketStore from './market';
import PostStore from './post';

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.market = new MarketStore(this);
    this.post = new PostStore(this);
  }
}

export default RootStore;
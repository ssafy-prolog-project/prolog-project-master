import {observable, action} from 'mobx';

export default class TestStore {
    @observable quillbody = "";
    @observable draftbody = "";

    constructor(root) {
        this.root = root;
    }
}
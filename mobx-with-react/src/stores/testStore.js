import {observable, action} from 'mobx';

export default class TestStore {
    constructor(root) {
        this.root = root;
    }

    @observable editorState = "";

    
}
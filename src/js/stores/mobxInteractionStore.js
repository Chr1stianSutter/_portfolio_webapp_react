import { observable, action } from 'mobx';
import config from "../../config/main.config";

class MobxInteractionStore {
    @observable rabbit = ''; // legt rabbit als observable fest


    @action selectRabbit(rabbit) {
        console.log("selectRabbit Action: " + rabbit);
        this.rabbit = rabbit;
    }
}

const store = new MobxInteractionStore();

export default store;

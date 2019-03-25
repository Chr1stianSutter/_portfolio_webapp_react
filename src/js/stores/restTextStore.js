import { observable, action } from 'mobx';
import config from "../../config/main.config";

class RestTextStore {
    @observable theTextFromRest = "Hello World";
    @observable error = '';
    @action fetchRandomText() {
        return fetch(config.BASE_URL + 'posts/2', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {
                        this.theTextFromRest = json.title;
                    });

                } else {
                    this.error = "Error on fetching";
                }
            })
            .catch(
                error => {
                    this.error = "Error on fetching";
                    throw error;
                }
            );
    }
}

const store = new RestTextStore();

export default store;
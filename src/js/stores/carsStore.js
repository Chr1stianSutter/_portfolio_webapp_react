import { observable, action } from 'mobx';
import config from "../../config/main.config";

class CarsStore {
    @observable selectedCar = {}; 
    @action selectCar(car) {

        this.selectedCar = car; 
    }

    @observable carsFromServer = '';
    @observable error = '';
    @action fetchCars() {
        return fetch('http://localhost:3000/cars', {
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
                        this.carsFromServer = json.cars;
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

    @action addNewCar(newCar) {
        return fetch('http://localhost:3000/cars/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }, 
            body: JSON.stringify({
                name : newCar.name,
                type : newCar.type, 
                powerPs : newCar.powerPs, 
                fin : newCar.fin
            })
          }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {
                        console.log(json);
                        this.fetchCars(); 
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

    @action deleteCar(carId) {
        return fetch('http://localhost:3000/cars/delete/' + carId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {
                        console.log("car deleted");
                         this.fetchCars(); 
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

const store = new CarsStore();

export default store;
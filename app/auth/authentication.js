import { config } from "../config.js";

export default class Authentication {
    static #instance = null;

    constructor() {
        if (Authentication.#instance) {
            throw new Error('Use instance');
        }
        this._callbacks = [];
        Authentication.#instance = this;
    }

    get instance() {
        return Authentication.#instance || new Authentication();
    }

    get auth() {
        return JSON.parse(localStorage.getItem('auth'));
    }

    set auth(value) {
        localStorage.setItem('auth', JSON.stringify(value));
    }

    onAuthenticate(callback) {
        this._callbacks.push(callback);
    }

    async doAuthentication(email, password) {
        const user = { user: { email, password } };
        try {
            const response = await fetch(config.rest_url + 'auth/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const res = await response.json();
            if (res.user) {
                this.auth = res.user;
                this._callbacks.forEach(callback => callback(res.user));
                return res.user;
            } else {
                throw new Error(res.errors);
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            throw error;
        }
    }
}

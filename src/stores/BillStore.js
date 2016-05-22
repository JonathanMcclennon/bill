import _ from 'underscore';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';
import BillConstants from '../constants/bill';

const CHANGE_EVENT = 'change';

let _billReady = false;
let _timings;
let _subscriptions;
let _subscriptionTotal;
let _callCharges;
let _rentals;
let _buyAndKeep;
let _statementTotal;
let _callTotal;
let _storeTotal;

const BillStore = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    /**
    * @param {function} callback
    */
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
    * @param {function} callback
    */
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    },

    /**
     * Sets up the data in the store for easy access
     */
    init(data) {
        if (data.total) {
            _statementTotal = data.total
        }

        if (data.statement) {
            _timings = data.statement;
        }

        if (data.package) {
            if (data.package.subscriptions) {
                _subscriptions = data.package.subscriptions;
            }

            _subscriptionTotal = data.package.total;
        }

        if (data.callCharges) {
            if (data.callCharges.total) {
                _callTotal = data.callCharges.total;
            }

            if (data.callCharges.calls) {
                _callCharges = data.callCharges.calls;
            }
        }

        if (data.skyStore) {
            if (data.skyStore.total) {
                _storeTotal = data.skyStore.total;
            }

            if (data.skyStore.rentals) {
                _rentals = data.skyStore.rentals;
            }

            if (data.skyStore.buyAndKeep) {
                _buyAndKeep = data.skyStore.buyAndKeep;
            }
        }
    },

    isBillReady() {
        return _billReady;
    },

    getStatementTotal() {
        return _statementTotal;
    },

    getStatementTimings() {
        return _timings;
    },

    getSubscriptions() {
        return _subscriptions;
    },

    getSubscriptionTotal() {
        return _subscriptionTotal;
    },

    getCallCharges() {
        return _callCharges;
    },

    getCallTotal() {
        return _callTotal;
    },

    getRentals() {
        return _rentals;
    },

    getBuyAndKeep() {
        return _buyAndKeep;
    },

    getStoreTotal() {
        return _storeTotal;
    }
});

AppDispatcher.register((payload) => {
    const action = payload.action;
    switch(action.actionType) {
        case(BillConstants.RECIEVE_BILL):
            BillStore.init(action.data.body)
            _billReady = true;
            BillStore.emitChange();
            return;
        default:
            return true;
    }
});

module.exports = BillStore;

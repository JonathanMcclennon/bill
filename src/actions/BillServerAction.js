import BillConstants from '../constants/Bill';
import AppDispatcher from '../dispatcher/appDispatcher';

module.exports = {
    recieveBill(data) {
        AppDispatcher.dispatch({
            type: BillConstants.RECIEVE_BILL_SERVER,
            data: data
        });
    }
};

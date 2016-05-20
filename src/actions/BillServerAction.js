import BillConstants from '../constants/Bill';
import AppDispatcher from '../dispatcher/appDispatcher';

module.exports = {
    recieveBill(data) {
        AppDispatcher.handleServerAction({
            actionType: BillConstants.RECIEVE_BILL,
            data: data
        });
    }
};

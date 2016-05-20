import AppDispatcher from '../../src/dispatcher/appDispatcher';
import BillServerAction from '../../src/actions/BillServerAction';
import BillConstants from '../../src/constants/Bill';

describe('BillServerAction', () => {
    describe('.recieveBill', () => {
        let data = {
            attr1: true
        };
        spyOn(AppDispatcher, 'dispatch');
        BillServerAction.recieveBill(data);
        expect(AppDispatcher.dispatch).toHaveBeenCalledWith({
            type: BillConstants.RECIEVE_BILL_SERVER,
            data: data
        });
    });
});

import AppDispatcher from '../../src/dispatcher/appDispatcher';
import BillServerAction from '../../src/actions/BillServerAction';
import BillConstants from '../../src/constants/Bill';

describe('BillServerAction', () => {
    describe('.recieveBill', () => {
        it('should dispatch the correct params', () => {
            let data = {
                attr1: true
            };
            spyOn(AppDispatcher, 'handleServerAction');
            BillServerAction.recieveBill(data);
            expect(AppDispatcher.handleServerAction).toHaveBeenCalledWith({
                actionType: BillConstants.RECIEVE_BILL,
                data: data
            });
        });
    });
});

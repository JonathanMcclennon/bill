import dispatcher from '../../src/dispatcher/appDispatcher';

describe('dispatcher', () => {
    let action;
    beforeEach(() => {
        action = {
            attr1: 'attr one',
            attr2: 'attr two'
        };
    });

    describe('.handleViewAction', () => {
        it('should dispatch the correct attributes', () => {
            spyOn(dispatcher, 'dispatch');
            dispatcher.handleViewAction(action);
            expect(dispatcher.dispatch).toHaveBeenCalledWith({
                source: 'VIEW_ACTION',
                action: action
            })
        });
    });

    describe('.handleServerAction', () => {
        it('should dispatch the correct attributes', () => {
            spyOn(dispatcher, 'dispatch');
            dispatcher.handleServerAction(action);
            expect(dispatcher.dispatch).toHaveBeenCalledWith({
                source: 'SERVER_ACTION',
                action: action
            })
        });
    })
});

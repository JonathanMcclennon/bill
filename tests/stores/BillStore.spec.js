import BillStore from '../../src/stores/BillStore';

describe('BillStore', () => {
    describe('.register', () => {
        let registerCallback;

        beforeEach(() => {
            spyOn(BillStore, 'register');
            registerCallback = BillStore.register.calls.mostRecent().args[0];
        });

        describe('case:RECIEVE_BILL', () => {
            it('should set the statement details', () => {
                let timings = {
                    generated: '19-05-2015'
                };

                registerCallback({
                    actionType: 'RECIEVE_BILL',
                    response: {
                        data: {
                            statement: timings
                        }
                    }
                });

                let statementTimings = BillStore.getStatementTimings();

                expect(statementTimings).toEqual(timings);
            });

            it('should set the packages subscription details', () => {
                let subscriptionData = [{
                    type: "tv",
                    name: "Checking",
                    cost: 50
                }];

                registerCallback({
                    actionType: 'RECIEVE_BILL',
                    response: {
                        data: {
                            packages: {
                                subscriptions: subscriptionData
                            }
                        }
                    }
                });

                let subscriptions = BillStore.getSubscriptions();

                expect(subscriptions).toEqual(subscriptions);
            });

            it('should set the call charges', () => {
                let callChargeData = {
                    calls: [{
                        called: '123123123123',
                        duration: '00:23:00',
                        cost: 2.12
                    }]
                };

                registerCallback({
                    actionType: 'RECIEVE_BILL',
                    response: {
                        data: {
                            callCharges: callChargeData
                        }
                    }
                });

                let callCharges = BillStore.getCallCharges();

                expect(callCharges).toEqual(subscriptions);
            });

            it('should set the rentals details', () => {
                let rentalData = {
                    title: 'Movie',
                    cost: 4.99
                };

                registerCallback({
                    actionType: 'RECIEVE_BILL',
                    response: {
                        data: {
                            skyStore: {
                                rentals: rentalData
                            }
                        }
                    }
                });

                let rentals = BillStore.getRentals();

                expect(rentals).toEqual(subscriptions);
            });

            it('should set the buy and keep details', () => {
                let buyAndKeep = {
                    title: 'Movie',
                    cost: 4.99
                };

                registerCallback({
                    actionType: 'RECIEVE_BILL',
                    response: {
                        data: {
                            skyStore: {
                                buyAndKeep: buyAndKeep
                            }
                        }
                    }
                });

                let buyAndKeep = BillStore.getBuyAndKeep();

                expect(buyAndKeep).toEqual(buyAndKeep);
            });
        });
    });
});

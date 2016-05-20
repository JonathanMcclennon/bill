import BillStore from '../../src/stores/BillStore';
import AppDispatcher from '../../src/dispatcher/appDispatcher';

describe('BillStore', () => {
    describe('.register', () => {
        let registerCallback;

        beforeEach(() => {
            spyOn(AppDispatcher, 'register');
            registerCallback = AppDispatcher.register.calls.mostRecent().args[0];
        });

        xdescribe('case:RECIEVE_BILL', () => {
            it('should set the statement total', () => {
                let total = 123.23;

                registerCallback({
                    actionType: 'RECIEVE_BILL',
                    response: {
                        data: {
                            total: statementTotal
                        }
                    }
                });

                let statementTotal = BillStore.getStatementTotal();

                expect(statementTotal).toEqual(total);

            });

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

            it('should set the call total', () => {
                let callChargeTotal = 123.44;

                registerCallback({
                    actionType: 'RECIEVE_BILL',
                    response: {
                        data: {
                            callCharges: callChargeData
                        }
                    }
                });

                let callTotal = BillStore.getCallTotal();

                expect(callTotal).toEqual(callChargeTotal);
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
                let buyAndKeepData = [{
                    title: 'Movie',
                    cost: 4.99
                }];

                registerCallback({
                    actionType: 'RECIEVE_BILL',
                    response: {
                        data: {
                            skyStore: {
                                buyAndKeep: buyAndKeepData
                            }
                        }
                    }
                });

                let buyAndKeep = BillStore.getBuyAndKeep();

                expect(buyAndKeep).toEqual(buyAndKeepData);
            });

            it('should set the store total', () => {
                let storeTotalData = 123.32;

                registerCallback({
                    actionType: 'RECIEVE_BILL',
                    response: {
                        data: {
                            skyStore: {
                                total: storeTotalData
                            }
                        }
                    }
                });

                let storeTotal = BillStore.getStoreTotal();

                expect(storeTotal).toEqual(storeTotalData);
            });
        });
    });
});

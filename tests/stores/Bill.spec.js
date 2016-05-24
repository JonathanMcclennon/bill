import BillStore from '../../src/stores/BillStore';
import AppDispatcher from '../../src/dispatcher/appDispatcher';

describe('BillStore', () => {
    describe('.register', () => {
        let registerCallback;

        describe('case:RECIEVE_BILL', () => {
            it('should set the statement total', () => {
                let total = 123.23;

                AppDispatcher.dispatch({
                    source: 'TEST_ACTION',
                    action: {
                        actionType: 'RECIEVE_BILL',
                        data: {
                            body: {
                                total: total
                            }
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

                AppDispatcher.dispatch({
                    source: 'TEST_ACTION',
                    action: {
                        actionType: 'RECIEVE_BILL',
                        data: {
                            body: {
                                statement: timings
                            }
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


                AppDispatcher.dispatch({
                    source: 'TEST_ACTION',
                    action: {
                        actionType: 'RECIEVE_BILL',
                        data: {
                            body: {
                                package: {
                                    subscriptions: subscriptionData
                                }
                            }
                        }
                    }
                });

                let subscriptions = BillStore.getSubscriptions();

                expect(subscriptions).toEqual(subscriptionData);
            });

            it('should set the call charges', () => {
                let callChargeData = {
                    calls: [{
                        called: '123123123123',
                        duration: '00:23:00',
                        cost: 2.12
                    }],
                    total: 2.12
                };

                AppDispatcher.dispatch({
                    source: 'TEST_ACTION',
                    action: {
                        actionType: 'RECIEVE_BILL',
                        data: {
                            body: {
                                callCharges: callChargeData
                            }
                        }
                    }
                });

                let callCharges = BillStore.getCallCharges();

                expect(callCharges).toEqual(callChargeData.calls);
            });

            it('should set the call total', () => {
                let callChargeData = {
                    calls: [{
                        called: '123123123123',
                        duration: '00:23:00',
                        cost: 2.12
                    }],
                    total: 123.23
                };

                AppDispatcher.dispatch({
                    source: 'TEST_ACTION',
                    action: {
                        actionType: 'RECIEVE_BILL',
                        data: {
                            body: {
                                callCharges: callChargeData
                            }
                        }
                    }
                });

                let callTotal = BillStore.getCallTotal();

                expect(callTotal).toEqual(123.23);
            });

            it('should set the rentals details', () => {
                let rentalData = [{
                    title: 'Movie',
                    cost: 4.99
                }];

                AppDispatcher.dispatch({
                    source: 'TEST_ACTION',
                    action: {
                        actionType: 'RECIEVE_BILL',
                        data: {
                            body: {
                                skyStore: {
                                    rentals: rentalData
                                }
                            }
                        }
                    }
                });

                let rentals = BillStore.getRentals();

                expect(rentals).toEqual(rentalData);
            });

            it('should set the buy and keep details', () => {
                let buyAndKeepData = [{
                    title: 'Movie',
                    cost: 4.99
                }];

                AppDispatcher.dispatch({
                    source: 'TEST_ACTION',
                    action: {
                        actionType: 'RECIEVE_BILL',
                        data: {
                            body: {
                                skyStore: {
                                    buyAndKeep: buyAndKeepData
                                }
                            }
                        }
                    }
                });

                let buyAndKeep = BillStore.getBuyAndKeep();

                expect(buyAndKeep).toEqual(buyAndKeepData);
            });

            it('should set the store total', () => {
                let storeTotalData = 123.32;

                AppDispatcher.dispatch({
                    source: 'TEST_ACTION',
                    action: {
                        actionType: 'RECIEVE_BILL',
                        data: {
                            body: {
                                skyStore: {
                                    total: storeTotalData
                                }
                            }
                        }
                    }
                });

                let storeTotal = BillStore.getStoreTotal();

                expect(storeTotal).toEqual(storeTotalData);
            });

            it('should create store information data adding both rentals and bought data', () => {
                let buyAndKeepData = [{
                    title: 'Movie',
                    cost: 4.99
                }];

                let rentalData = [{
                    title: 'Movie',
                    cost: 4.99
                }];


                AppDispatcher.dispatch({
                    source: 'TEST_ACTION',
                    action: {
                        actionType: 'RECIEVE_BILL',
                        data: {
                            body: {
                                skyStore: {
                                    buyAndKeep: buyAndKeepData,
                                    rentals: rentalData
                                }
                            }
                        }
                    }
                });

                let getAllStoreData = BillStore.getAllStoreData();
                expect(getAllStoreData).toEqual([ {
                    title: 'Movie',
                    cost: 4.99,
                    type: 'Rent'
                },{
                    title: 'Movie',
                    cost: 4.99,
                    type: 'Buy'
                }]);
            });
        });
    });
});

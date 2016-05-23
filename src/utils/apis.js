import request from 'superagent';
import BillServerAction from '../actions/BillServerAction';

module.exports = {
    getBill() {
        // request.get('https://still-scrubland-9880.herokuapp.com/bill.json')
        request.get('./fake.json')
            .set('Accept', 'application/json')
            .end(function(err, response) {
                if (err) {
                    console.info(err);
                    return;
                }
                BillServerAction.recieveBill(response);
            });
    }
}

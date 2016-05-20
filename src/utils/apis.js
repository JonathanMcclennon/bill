import request from 'superagent';

module.exports = {
    getBill() {
        request.get('https://still-scrubland-9880.herokuapp.com/bill.json')
            .set('Accept', 'application/json')
            .end(function(err, response) {
                if (err) {
                    console.info(err);
                    return;
                }
                console.info(response);
            });
    }
}

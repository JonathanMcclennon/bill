import settings from '../settings'

module.exports = {
    getFormattedCurrency(value) {
        return settings.currency + String(value.toFixed(2));
    }
}

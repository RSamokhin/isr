class Deal {
    constructor(customerId, item, count, date) {
        this.customerId = customerId;
        this.item = item;
        this.count = parseInt(count);
        this.date = date;
    }

    toJson () {
        return {
            customerId: this.customerId,
            item: this.item,
            count: this.count,
            date: this.date,
        };
    }
};

module.exports = Deal;
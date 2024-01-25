//Flow: createOrder => proceedToPayment => OrderSummary => updateWallet

const cart= ['pant', 'kurta', 'shoes'];

function createOrder(cart) {
    const promise = new Promise(function(resolve, reject) {
        if(!validateCart(cart)) {
            const err = new Error('Cart is not valid!');
            reject(err);
        }
        const orderId = '12345';
        if(orderId) {
            setTimeout(function() {
                resolve(orderId)
            },5000);
        }
    })
    return promise;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        resolve('Payment Successful for Order: '+ orderId);
    });
}

function createOrderSummary() {
    return new Promise(function(resolve, reject) {
        resolve({
            orderId: '12345',
            totalItems: 3,
            paymentStatus: 'successful'
        })
    })
}

function updateWallet() {
    return new Promise(function(resolve, reject) {
        resolve('200 coins');
    })
}

function validateCart(cart) {
    if(cart.length) {
        return true;
    }
    return false;
}

createOrder(cart)
    .then(function(orderId){
        console.log(orderId);
        return orderId;
    })
    .catch(function(err) {
        console.log(err.message);
    })
    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(paymentMsg) {
        console.log(paymentMsg);
        return createOrderSummary();
    })
    .then(function(orderSummary) {
        console.log(orderSummary);
        return updateWallet();
    })
    .then(function(wallet) {
        console.log(wallet);
    });
    
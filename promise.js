var successObj = {
    user: 'Florian Fackler',
    email: 'florian.fackler@ergodirekt.de',
    age: 16
};

var ajaxSuccess = true;

// Middleware
function proxy(obj) { return obj };
function validate(obj) { if (obj.age < 18) { throw "Too young"; } return obj };
function merge(obj) { return Object.assign(obj, {anotherProp: 'heheh'}) };

///////////////////////////////////////////////////////////////////
///////////////// PROMISE BASED SOLUTION //////////////////////////
///////////////////////////////////////////////////////////////////
function ajaxPromise() {
    return dst() && new Promise(function (resolve, reject) {
        setTimeout(function () {
            ajaxSuccess ? resolve(successObj) : reject('Timeout in connection');
        }, 2000)
    });
}

///////////////////////////////////////////////////////////////////
// Das gleiche als Promise
///////////////////////////////////////////////////////////////////
ajaxPromise()
    .then(function (response) {
        console.log('I received', response);
    })
    .catch(function (err) {
        console.log('OMG OMG !!! An error occured', err);
    });

///////////////////////////////////////////////////////////////////
// Ajax callback mit middleware
///////////////////////////////////////////////////////////////////
// ajaxPromise()
//     .then(proxy)
//     .then(validate)
//     .then(merge)
//     .then(function (response) {
//         console.log('I received', response);
//     })
//     .catch(function (err) {
//         console.log('OMG OMG !!! An error occured =>', err);
//     });









///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////// JUST HELPER FUNCTIONS HERE //////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
function dst() {
    console.log('Making a long distance ajax call.');
    return true;
}


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
function ajaxPromise(idx) {
    console.log('Making a long distance ajax call. ' + (idx || ''));
    const waitFor = parseInt(Math.random() * 2000, 0);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            ajaxSuccess ? resolve(Object.assign({
                id:  + (idx || ''),
                waitFor: `${waitFor / 1000} seconds` 
            }, successObj)) : reject('Timeout in connection');
        }, waitFor)
    });
}

///////////////////////////////////////////////////////////////////
// Das gleiche als Promise
///////////////////////////////////////////////////////////////////
//ajaxPromise()
//    .then(function (response) {
//        console.log('I received', response);
//    })
//    .catch(function (err) {
//        console.log('OMG OMG !!! An error occured', err);
//    });

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
// Armada of ajax calls. Triggering multiple async calls symultaniously
///////////////////////////////////////////////////////////////////
//Promise.all([ajaxPromise(1), ajaxPromise(2), ajaxPromise(3)])
//.then(responses => {
//    responses.map(response => {
//    console.log(response);  
//    })
//})

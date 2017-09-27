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
///////// SIMPLE CALLBACK SOLUTION ////////////////////////////////
///////////////////////////////////////////////////////////////////
function ajaxCall(cbSuccess, cbError) {
    console.log('Making a long distance ajax call.');
    setTimeout(function () {
        ajaxSuccess ? cbSuccess(successObj) : cbError('Access denied.');
    }, 2000)
}

///////////////////////////////////////////////////////////////////
// Ajax call mit callbacks ////////////////////////////////////////
///////////////////////////////////////////////////////////////////
ajaxCall(function(msg) {
  console.log('Simple callback reponse', msg);
}, function (err) {
  console.log('An error occured', err);
});

///////////////////////////////////////////////////////////////////
// Ajax call mit callbacks und middleware /////////////////////////
///////////////////////////////////////////////////////////////////
// ajaxCall(function(msg) {
//     var newMsg = proxy(msg);
//     try {
//         validate(newMsg);
//         var mergedObj = merge(newMsg);
//         console.log('I received', mergedObj);
//     } catch (err) {
//         console.log('OMG OMG !!! An error occured =>', err);
//     }
// }, function (error) {
//     console.log('OMG OMG !!! An error occured', err);
// });

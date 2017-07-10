function saveOnClick() {
  /*var firebaseRef=firebase.database().ref();
  firebaseRef.child("Admin").set("Root");*/
/*  var firebaseRef=firebase.database().ref("Admin");
  //firebaseRef.child("name").set("Root");
  firebaseRef.child("name/fname").set("Root");
  firebaseRef.child("name/lname").set("Firename"); */
  var flname =document.getElementById('flname');
  var student =document.getElementById('student');
  var fbr =document.getElementById('fbr');
  var email =document.getElementById('email');
  var interest =document.getElementById('interest');
  //console.log(email.value);
  insertData(flname.value,student.value,fbr.value,email.value,interest.value);
}
window.onload=function() {
/*  var firebaseRef=firebase.database().ref("User");
  firebaseRef.once('value').then(function(dataSnapshot) {
    console.log(dataSnapshot.val());
    //console.log(dataSnapshot.key);
  }); */

  showData();
}

function showData() {
//  var firebaseRef=firebase.database().ref("User");
// var firebaseRef=firebase.database().ref("User").orderByKey();
  var firebaseRef=firebase.database().ref("User").orderByChild("interest");
  firebaseRef.once('value').then(function(dataSnapshot) {
  //  console.log(dataSnapshot.val());
  dataSnapshot.forEach(function(childSnapshot){
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
  //  console.log(childKey);
    console.log(childData);
    });
  });
}

function insertData(flname,student,fbr,email,interest) {
  var firebaseRef=firebase.database().ref("User");
  firebaseRef.push({
    flname:flname,
    student:student,
    fbr:fbr,
    email:email,
    interest:interest
  });
  console.log("Insert Success");
  showData();
}
/*
function delOnClick() {
  var firebaseRef=firebase.database().ref("User/User2");
  firebaseRef.remove().then(function() {
  console.log("Remove Successed");
  }).catch(function() {
  console.log("Remove failed: " + error.message)
  })
}

function updateOnClick() {
  var firebaseRef=firebase.database().ref("User/User1");
  firebaseRef.update({ address: 'Nu', email: 'eiei@g'});
  console.log("Success");

}
*/
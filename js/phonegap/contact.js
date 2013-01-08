(function () {
   var Pgap = this.Pgap || {};

    Pgap.contacts = function () {
         console.log("create contacts object success!");
    }

    Pgap.contacts.prototype.find = function (name, scuess, error) {
              console.log("find function running!");
            var onSuccess=scuess||{},onError=error||{};
            var options = new ContactFindOptions();
            options.filter = name;
            var fields = ["displayName", "name"];
            navigator.contacts.find(fields, onSuccess, onError, options);


     };
//    function onSuccess(contacts) {
//        alert('Found ' + contacts.length + ' contacts.');
//    }
//
//    function onError() {
//        alert('onError!');
//    }
     this.Pgap=Pgap;
}).call(this);

(function () {
    Pgap = this.Pgap || {};

    Pgap.contacts = function () {
    }

    Pgap.contacts.prototype.find = function (name, scuess, error) {
        // 从所有联系人中查找任意名字字段中包含“Bob”的联系人
        var onSuccess=scuess||{},onError=error||{};
        var options = new ContactFindOptions();
        options.filter = name;
        var fields = ["displayName", "name"];
        navigator.service.contacts.find(fields, onSuccess, onError, options);
    }
//    function onSuccess(contacts) {
//        alert('Found ' + contacts.length + ' contacts.');
//    }
//
//    function onError() {
//        alert('onError!');
//    }
     this.Pgap=Pgap;
}).call(this);

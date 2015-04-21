Polymer({
    currentTabIndex: 0,
    requestMirrorPolished: false,
    responseMirrorPolished: false,
    searchExpanded: false,
    endpoint: 'http://www.google.com/q?="This is a search query, no less"',
    operations: [],

    ready: function () {
        for (var i = 0; i < 50; i++) {
            this.operations.push({
                name: 'Operation ' + i,
                url: 'http://www.google.com/q?="This is a search query, no less"' + i
            });
        }
    },

    filterOperations: function (operations, searchText) {
        var lowercaseSearchText = searchText.trim().toLowerCase();
        var matchingOperations = operations;

        if (lowercaseSearchText) {
            matchingOperations = operations.filter(function (operation) {
                return operation.name.toLowerCase().indexOf(lowercaseSearchText) > -1;
            });
        }

        return matchingOperations;
    },

    operationSelected: function () {
        if (this.currentTabIndex == 0) {
            this.moveNextOrRun();
        }
    },

    openFileClicked: function () {
        this.$.fileUploadDialog.open();
    },

    moveBack: function () {
        this.currentTabIndex = this.currentTabIndex - 1;
    },

    moveNextOrRun: function () {
        if (this.currentTabIndex < 2) {
            this.currentTabIndex = this.currentTabIndex + 1;
        } else {
            this.run();
        }
    },

    searchButtonClicked: function() {
        this.searchExpanded = !this.searchExpanded;
    },

    run: function () {
        // *********Sample Request:********************
        //POST http://localhost:63777/Service1.svc HTTP/1.1
        //    Accept-Encoding: gzip,deflate
        //Content-Type: text/xml;charset=UTF-8
        //SOAPAction: "http://tempuri.org/IService1/GetData"
        //Content-Length: 295
        //Host: localhost:63777
        //Connection: Keep-Alive
        //User-Agent: Apache-HttpClient/4.1.1 (java 1.5)

        this.$.contentType = "text/xml;charset=UTF-8";
        this.$.soapAjax.headers = {
            SOAPAction: "http://tempuri.org/IService1/GetData"
        };
        this.$.soapAjax.go();


        var breakme = "here";
    },

    soapResponse: function () {
        var breakme = "here";
    },

    soapError: function () {
        var breakme = "here";
    },

    pageTransitioned: function () {
        if (this.currentTabIndex === 1 && !this.requestMirrorPolished) {
            this.requestMirrorPolished = true;
            this.$.requestMirror.refresh();
        } else if (this.currentTabIndex === 2 && !this.responseMirrorPolished) {
            this.responseMirrorPolished = true;
            this.$.responseMirror.refresh();
        }
    }
});
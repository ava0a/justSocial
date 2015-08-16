var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		//====================================================================================
		//FALSE DEVICE-READY SEND
		setTimeout(function(){app.receivedEvent('deviceready');}, 1000);
		//FALSE DEVICE-READY SEND
		//====================================================================================
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
		if(parentElement){
			parentElement.innerHTML="<p>Device Ready</p>";
		}
        console.log('Received Event: ' + id);
		
		//remove deviceready div
		setTimeout(function(){handleDOM.remove("deviceready"); page.entry();}, 500);
		
    }
};

var handleDOM ={
	create: function(id, element, parent){
		var temp = document.createElement(element);
		temp.id=id;
		parent.appendChild(temp);
	},
	remove: function(id){
		var element = document.getElementById(id);
		element.parentNode.removeChild(element);
	},
	
	br: function(){
		document.createElement('br');
	}
};
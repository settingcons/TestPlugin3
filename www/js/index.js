/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


function test1() {
    try {

        // To know if the location is turned ON/OFF and if the app is allowed to use it.
        Diagnostic.prototype.isLocationEnabled(locationEnabledSuccessCallback, locationEnabledErrorCallback);

        function locationEnabledSuccessCallback(result) {
            if (result) {
                //alert("Location ON");
                document.getElementById('location').innerHTML = 'ON';

                //alert("Location Setting ON");
                document.getElementById('locationSetting').innerHTML = 'ON';

                //alert("Auth Location ON");
                document.getElementById('locationAuthorization').innerHTML = 'ON';

                function locationAuthorizedErrorCallback(error) {
                    alert("locationAuthorizedErrorCallback error: #" + error);
                }
            }
            else {
                //alert("Location OFF");
                document.getElementById('location').innerHTML = 'OFF';
                // To know if the location is turned ON/OFF.
                Diagnostic.prototype.isLocationEnabledSetting(locationEnabledSettingSuccessCallback, locationEnabledSettingErrorCallback);

                function locationEnabledSettingSuccessCallback(result) {
                    if (result) {
                        //alert("Location Setting ON");
                        document.getElementById('locationSetting').innerHTML = 'ON';
                    }
                    else {
                        //alert("Location Setting OFF");
                        document.getElementById('locationSetting').innerHTML = 'OFF';
                    }
                }

                function locationEnabledSettingErrorCallback(error) {
                    alert("locationEnabledSettingErrorCallback error: #" + error);
                }

                // To know if the app is allowed to use it.
                Diagnostic.prototype.isLocationAuthorized(locationAuthorizedSuccessCallback, locationAuthorizedErrorCallback);

                function locationAuthorizedSuccessCallback(result) {
                    if (result) {
                        //alert("Auth Location ON");
                        document.getElementById('locationAuthorization').innerHTML = 'ON';
                    }
                    else {
                        //alert("Auth Location OFF");
                        document.getElementById('locationAuthorization').innerHTML = 'OFF';
                    }
                }

                function locationAuthorizedErrorCallback(error) {
                    alert("locationAuthorizedErrorCallback error: #" + error);
                }
            }
        }

        function locationEnabledErrorCallback(error) {
            alert("locationEnabledErrorCallback error: #" + error);
        }


        // To know if the WiFi is turned ON/OFF.
        Diagnostic.prototype.isWifiEnabled(wifiEnabledSuccessCallback, wifiEnabledErrorCallback);

        function wifiEnabledSuccessCallback(result) {
            if (result) {
                //alert("WiFi ON");
                document.getElementById('wifi').innerHTML = 'ON';
            }
            else {
                //alert("WiFi OFF");
                document.getElementById('wifi').innerHTML = 'OFF';
            }
        }

        function wifiEnabledErrorCallback(error) {
            alert("wifiEnabledErrorCallback error: #" + error);
        }

        // To know if the camera is enabled.
        Diagnostic.prototype.isCameraEnabled(cameraEnabledSuccessCallback, cameraEnabledErrorCallback);

        function cameraEnabledSuccessCallback(result) {
            if (result) {
                //alert("Camera ON");
                document.getElementById('camera').innerHTML = 'ON';
            }
            else {
                //alert("Camera OFF");
                document.getElementById('camera').innerHTML = 'OFF';
            }
        }

        function cameraEnabledErrorCallback(error) {
            alert("cameraEnabledErrorCallback error: #" + error);
        }
    }
    catch(ex) {
        alert("test error: #" +ex.message);
    }

}

function switchToLocationSettings1(){
    try{
        // To know if the WiFi is turned ON/OFF.
        Diagnostic.prototype.switchToLocationSettings();

        alert("hola");

    }
    catch (ex){
        alert("switchToLocationSettings1"+ex.message);
    }
}
function isCameraEnabled1(){
    try{
        // To know if the camera is enabled.
        Diagnostic.prototype.isCameraEnabled(cameraEnabledSuccessCallback, cameraEnabledErrorCallback);

        function cameraEnabledSuccessCallback(result) {
            if (result) {
                //alert("Camera ON");
                document.getElementById('camera').innerHTML = 'ON';
            }
            else {
                //alert("Camera OFF");
                document.getElementById('camera').innerHTML = 'OFF';
            }
        }

        function cameraEnabledErrorCallback(error) {
            alert("cameraEnabledErrorCallback error: #" + error);
        }
    }
    catch (ex){
        alert("isCameraEnabled1"+ex.message);
    }
}



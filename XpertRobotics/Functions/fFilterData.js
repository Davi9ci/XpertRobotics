// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.393/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var XpertRobotics;
        (function (XpertRobotics) {
            function fFilterData(aBox) {
                let updatedData = [];
                for (let i = 0; i < aBox.length ; i++) {
                    if (aBox[i].id > 0) {
                        updatedData.push(aBox[i]);
                    }
                }
                return updatedData;
            }
            XpertRobotics.fFilterData = fFilterData;
        })(XpertRobotics = Functions.XpertRobotics || (Functions.XpertRobotics = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('fFilterData', 'TcHmi.Functions.XpertRobotics', TcHmi.Functions.XpertRobotics.fFilterData);
/**
 * @NScriptType ClientScript
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 */

 define([], function() {
    
    function showMessage(){
        alert("Test message");
    }

    return {
        pageInit: showMessage
    }
 });
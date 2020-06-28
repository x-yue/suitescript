/**
 * @NScriptType ClientScript
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 */

define(['N/currentRecord'], function(record) {

    function allowPaymentOnHold(record){

        // console.log(record);
        // console.log(record.currentRecord);
      	var paymentOnHoldValue = record.currentRecord.getField({
          	fieldId : 'paymenthold'
        })
      	//console.log(paymentOnHoldValue)
      	//console.log(paymentOnHoldValue.isDisabled);
      	if(paymentOnHoldValue.isDisabled == true){
          // console.log('IsDisabled')
          paymentOnHoldValue.isDisabled = false;
          // console.log('Enabled field paymenthold')
        }
		return ;
    }
    return {
        pageInit: allowPaymentOnHold
    }
});

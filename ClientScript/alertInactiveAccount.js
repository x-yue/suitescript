/**
 * @NScriptType ClientScript
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 */

define(['N/currentRecord'], function(record) {

    function alertInactiveAccount(record){

        // console.log(record);
        // console.log(record.currentRecord);

        var accountingBook = record.currentRecord.getValue({
        	fieldId: 'accountingbook',
      	})
		// console.log(accountingBook);

        // if the journal entry is on the Primary Accounting Book internal ID is 1 / normal journal entry shows undefined
        if(accountingBook == 1 || !accountingBook){

            // those are internal IDs of Accounts which do not have Primary Account Availability - it will need to be updated whenever we remove Primary Book for an account
            const inactiveAccounts = ['3382', '3383', '3558', '3559', '3612', '3384', '3385', '3386', '3387', '3388', '3389', '3390', '3391', '3392', '3393', '3038', '3062', '1184', '2536', '2737', '2735', '3085', '3141', '1730', '1185', '1186', '1187', '1188', '1189', '1190', '1737', '2871', '1903', '1191', '2544', '1760', '1761', '1790', '1762', '2545', '1870', '1734', '1192', '2535', '1193', '1194', '1195', '1196', '1197', '1198', '1199', '2538', '1907', '2624', '1201', '1908', '2669', '2638', '2670', '2716', '2717', '2718', '2636', '1202', '1203', '2653', '2540', '2542', '2539', '2747', '3045', '3096', '2820', '3050', '2537', '2543', '2541', '2677', '2843', '2888', '2889', '2996', '2908', '1892', '1763', '1792', '1765', '3027', '3042', '2869', '1876', '1204', '1205', '3028', '3030', '3029', '3033', '3034', '1206', '1207', '1711', '1208', '2725', '1209', '2720', '1767', '1766', '1210', '2947', '3019', '3024', '3025', '3170', '3234', '3235', '3236', '3237', '3245', '3233', '3238', '3243', '3244', '3239', '3240', '3242', '3256', '3264', '3394']

            var lineCount = record.currentRecord.getLineCount({
                sublistId: 'line'
            });
            // console.log(lineCount);
            var alertMessage = "";
            for(i = 0; i + 1 <= lineCount; i++){
                var sublistValue = record.currentRecord.getSublistValue({
                    sublistId: 'line',
                    fieldId: "account",
                    line: i
                });
                //	console.log(i);
                //	console.log(sublistValue)
                if (inactiveAccounts.includes(sublistValue) == true){
                    var sublistText = record.currentRecord.getSublistText({
                        sublistId: 'line',
                        fieldId: 'account',
                        line: i
                    });
                  	var lineNum = i + 1;
                  	alertMessage += "Line " + lineNum + ": Account " + sublistText + "\n";
                    // console.log(sublistText);
                }
            }
          	if (alertMessage != ""){
                alert("Attention: One or more accounts you copied from previous journal entry are no longer available in the Primary Accounting Book.\n\nPlease check and choose another account for this journal entry:\n\n" + alertMessage);
            }
        } else {
          return;
        }
    }
    return {
        pageInit: alertInactiveAccount
    }
 });
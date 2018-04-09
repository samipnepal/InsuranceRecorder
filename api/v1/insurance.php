<?php
$app->post('/addInsurance', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
    $db = new DbHandler();
    $policyNumber = $r->Insurance->policyNumber;
    $insurance = $db->getOneRecord("select policyNumber from insurance where policyNumber=$policyNumber");
    if(!$insurance){
        $tabble_name = "insurance";
        $column_names = array('ownerName', 'vehicleNumber','mobileNumber', 'policyNumber', 'expiryDate', 'policyCompany', 'rcImage', 'policyImage' );
        $result = $db->insertIntoTable($r->Insurance, $column_names, $tabble_name);
        if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "Insurance added successfully";
            $response["id"] = $result;
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to add insurance. Please try again";
            echoResponse(201, $response);
        }            
    }else{
        $response["status"] = "error";
        $response["message"] = "An insurance with the provided policy number already exists!";
        echoResponse(201, $response);
    }
});

$app->get('/listInsurance', function() {
    $response = array();
    $db = new DbHandler();
    $user = $db->getMultipleRecords("select * from insurance where expiryDate >= CURDATE() ORDER BY expiryDate ASC");
    echoResponse(200, $user);
});

$app->get('/listFullInsurance', function() {
    $response = array();
    $db = new DbHandler();
    $user = $db->getMultipleRecords("select * from insurance");
    echoResponse(200, $user);
});

$app->post('/deleteInsurance', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
    $db = new DbHandler();
    $policyNumber = $r->Insurance->policyNumber;
	$result = $db->deleteRecord("delete from insurance where policyNumber='$policyNumber'");
	if ($result != NULL) {
		$response["status"] = "success";
		$response["message"] = "Insurance Record deleted successfully";
		$response["id"] = $result;
		echoResponse(200, $response);
	} else {
		$response["status"] = "error";
		$response["message"] = "Failed to delete Insurance Record. Please try again";
		echoResponse(201, $response);
	}            
});




?>
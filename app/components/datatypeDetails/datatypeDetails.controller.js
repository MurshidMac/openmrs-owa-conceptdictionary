/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
DatatypeDetailsController.$inject = 
	['$scope', 'loadDataType', '$routeParams', 'openmrsRest']

export default function DatatypeDetailsController($scope, loadDataType, $routeParams, openmrsRest){
	
	var vm = this;
	
    vm.links = {};
	vm.links["Concept Dictionary"] = "";
    vm.links["Concept Datatypes"] = "datatype/";
    vm.links["Concept Datatype Form"] = "datatype/"+loadDataType.uuid;
	
	vm.singleDataType = loadDataType;
}
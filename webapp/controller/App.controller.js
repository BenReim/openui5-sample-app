sap.ui.loader.config({
	'shim': {
		'sap/ui/demo/todo/3rdparty/libs/moment-with-locales.min': {
			amd: true,
			exports: 'moment'
		}
	}
});

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/todo/3rdparty/libs/moment-with-locales.min"
], function (Controller, JSONModel, moment) {
	"use strict";

	return Controller.extend("sap.ui.demo.todo.controller.App", {

		onInit: function () {
			this.getView().setModel(new JSONModel({ "time": moment().format('lll') }));
		}
	});

});

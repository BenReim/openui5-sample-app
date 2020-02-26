const oURLParams = new URLSearchParams(window.location.search);
const isMockMode = oURLParams.get("run-with-mock");

if (isMockMode) {

	sap.ui.require([
		"sap/ui/core/util/MockServer",
		"sap/ui/core/Core"
	], function (MockServer, Core) {
		// etc
	});
}

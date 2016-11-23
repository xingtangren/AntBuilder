if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
cn.com.easy.util = {
	invokeEasyService : function(data, callback) {
		return $.ajax({
			type : "post",
			url : "/frame/cn/com/easy/service/invokeEasyService.e",
			data : data,
			success : function(data) {
				callback(data.easyReturnValueData,
						data.easyReturnValueException);
			},
			dataType : "json"
		});
	},
	wrapEasyParameter : function(easy_service, easy_method, service_parameters) {
		var easy_wrapper = {};
		easy_wrapper.serviceName = easy_service;
		easy_wrapper.serviceMethod = easy_method;
		easy_wrapper.parameters = $.toJSON(service_parameters);
		return easy_wrapper;
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.kpi == null)
	cn.com.easy.kpi = {};
if (cn.com.easy.kpi.service == null)
	cn.com.easy.kpi.service = {};
cn.com.easy.kpi.service.AcctTypeSubService = {
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.AcctTypeSubService", "equals",
				parameters), callback);
	},
	subType : function(code, condCode, callback) {
		var parameters = {
			code : code,
			condCode : condCode
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.AcctTypeSubService", "subType",
				parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.AcctTypeSubService", "toString",
				parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.AcctTypeSubService", "wait",
				parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.kpi == null)
	cn.com.easy.kpi = {};
if (cn.com.easy.kpi.service == null)
	cn.com.easy.kpi.service = {};
cn.com.easy.kpi.service.DimDbService = {
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.DimDbService", "equals", parameters),
				callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(
				cn.com.easy.util.wrapEasyParameter(
						"cn.com.easy.kpi.service.DimDbService", "toString",
						parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.DimDbService", "wait", parameters),
				callback);
	},
	vaildName : function(value, callback) {
		var parameters = {
			value : value
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util
				.wrapEasyParameter("cn.com.easy.kpi.service.DimDbService",
						"vaildName", parameters), callback);
	},
	sourceTable : function(dataBase1, table, dataSourceName, callback) {
		var parameters = {
			dataBase1 : dataBase1,
			table : table,
			dataSourceName : dataSourceName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.DimDbService", "sourceTable",
				parameters), callback);
	},
	doSeachSql : function(value, dataSourceName, callback) {
		var parameters = {
			value : value,
			dataSourceName : dataSourceName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.DimDbService", "doSeachSql",
				parameters), callback);
	},
	dimTabSeach : function(value, callback) {
		var parameters = {
			value : value
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.DimDbService", "dimTabSeach",
				parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.kpi == null)
	cn.com.easy.kpi = {};
if (cn.com.easy.kpi.service == null)
	cn.com.easy.kpi.service = {};
cn.com.easy.kpi.service.FormulaService = {
	setCondValue : function(value, callback) {
		var parameters = {
			value : value
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.FormulaService", "setCondValue",
				parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(
				cn.com.easy.util.wrapEasyParameter(
						"cn.com.easy.kpi.service.FormulaService", "equals",
						parameters), callback);
	},
	vaildConds : function(parameter, callback) {
		var parameters = {
			parameter : parameter
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.FormulaService", "vaildConds",
				parameters), callback);
	},
	condValue : function(value, callback) {
		var parameters = {
			value : value
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.FormulaService", "condValue",
				parameters), callback);
	},
	vaildName : function(value, type, code, callback) {
		var parameters = {
			value : value,
			type : type,
			code : code
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.FormulaService", "vaildName",
				parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.FormulaService", "wait", parameters),
				callback);
	},
	acctTypeSub : function(kpiCode, version, acctType, callback) {
		var parameters = {
			kpiCode : kpiCode,
			version : version,
			acctType : acctType
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.FormulaService", "acctTypeSub",
				parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.FormulaService", "toString",
				parameters), callback);
	},
	validAudit : function(value, callback) {
		var parameters = {
			value : value
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.FormulaService", "validAudit",
				parameters), callback);
	},
	kpiAttr : function(value, callback) {
		var parameters = {
			value : value
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util
				.wrapEasyParameter("cn.com.easy.kpi.service.FormulaService",
						"kpiAttr", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.kpi == null)
	cn.com.easy.kpi = {};
if (cn.com.easy.kpi.service == null)
	cn.com.easy.kpi.service = {};
cn.com.easy.kpi.service.KpiDbService = {
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.KpiDbService", "equals", parameters),
				callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(
				cn.com.easy.util.wrapEasyParameter(
						"cn.com.easy.kpi.service.KpiDbService", "toString",
						parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.KpiDbService", "wait", parameters),
				callback);
	},
	kpiAdd2Db : function(infoList, sourceList, runner, callback) {
		var parameters = {
			infoList : infoList,
			sourceList : sourceList,
			runner : runner
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util
				.wrapEasyParameter("cn.com.easy.kpi.service.KpiDbService",
						"kpiAdd2Db", parameters), callback);
	},
	kpiUpdate2Db : function(ki, ks, runner, callback) {
		var parameters = {
			ki : ki,
			ks : ks,
			runner : runner
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.KpiDbService", "kpiUpdate2Db",
				parameters), callback);
	},
	main : function(args, callback) {
		var parameters = {
			args : args
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.kpi.service.KpiDbService", "main", parameters),
				callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.ebuilder == null)
	cn.com.easy.ebuilder = {};
if (cn.com.easy.ebuilder.action == null)
	cn.com.easy.ebuilder.action = {};
cn.com.easy.ebuilder.action.PgdesigerXmlService = {
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.ebuilder.action.PgdesigerXmlService", "equals",
				parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.ebuilder.action.PgdesigerXmlService", "wait",
				parameters), callback);
	},
	dimsion : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.ebuilder.action.PgdesigerXmlService", "dimsion",
				parameters), callback);
	},
	main : function(args, callback) {
		var parameters = {
			args : args
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.ebuilder.action.PgdesigerXmlService", "main",
				parameters), callback);
	},
	component : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.ebuilder.action.PgdesigerXmlService", "component",
				parameters), callback);
	},
	layout : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.ebuilder.action.PgdesigerXmlService", "layout",
				parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.ebuilder.action.PgdesigerXmlService", "toString",
				parameters), callback);
	},
	getStringValue : function(obj, callback) {
		var parameters = {
			obj : obj
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.ebuilder.action.PgdesigerXmlService",
				"getStringValue", parameters), callback);
	},
	getXmlFilePath : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.ebuilder.action.PgdesigerXmlService",
				"getXmlFilePath", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.mbuilder == null)
	cn.com.easy.mbuilder = {};
if (cn.com.easy.mbuilder.service == null)
	cn.com.easy.mbuilder.service = {};
if (cn.com.easy.mbuilder.service.component == null)
	cn.com.easy.mbuilder.service.component = {};
cn.com.easy.mbuilder.service.component.ColumnLineService = {
	validateComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"validateComponent", parameters), callback);
	},
	setDataSourceId : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"setDataSourceId", parameters), callback);
	},
	showSetHW : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"showSetHW", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"wait", parameters), callback);
	},
	readFromXmlByReportId : function(reportId, isFormal, callback) {
		var parameters = {
			reportId : reportId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"readFromXmlByReportId", parameters), callback);
	},
	setDimField : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"setDimField", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"getOrCreateKpiList", parameters), callback);
	},
	setWidth : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"setWidth", parameters), callback);
	},
	getOrCreateComponet : function(reportId, componentId, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"getOrCreateComponet", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"getOrCreateYaxisList", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"getOrCreateXaxis", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"validateAllChartComponent", parameters), callback);
	},
	setKpi : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"setKpi", parameters), callback);
	},
	setYaxis : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"setYaxis", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"equals", parameters), callback);
	},
	getComponentJsonData : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"getComponentJsonData", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"validateDatasourceField", parameters), callback);
	},
	saveToXmlByObj : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"saveToXmlByObj", parameters), callback);
	},
	getComponentTagCode : function(reportId, componentId, actionUrl, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			actionUrl : actionUrl
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"getComponentTagCode", parameters), callback);
	},
	setTitle : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"setTitle", parameters), callback);
	},
	setHeight : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"setHeight", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"toString", parameters), callback);
	},
	setSortField : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnLineService",
				"setSortField", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.mbuilder == null)
	cn.com.easy.mbuilder = {};
if (cn.com.easy.mbuilder.service == null)
	cn.com.easy.mbuilder.service = {};
if (cn.com.easy.mbuilder.service.component == null)
	cn.com.easy.mbuilder.service.component = {};
cn.com.easy.mbuilder.service.component.ColumnService = {
	validateComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"validateComponent", parameters), callback);
	},
	setDataSourceId : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"setDataSourceId", parameters), callback);
	},
	showSetHW : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"showSetHW", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService", "wait",
				parameters), callback);
	},
	readFromXmlByReportId : function(reportId, isFormal, callback) {
		var parameters = {
			reportId : reportId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"readFromXmlByReportId", parameters), callback);
	},
	setDimField : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"setDimField", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"getOrCreateKpiList", parameters), callback);
	},
	setWidth : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"setWidth", parameters), callback);
	},
	getOrCreateComponet : function(reportId, componentId, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"getOrCreateComponet", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"getOrCreateYaxisList", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"getOrCreateXaxis", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"validateAllChartComponent", parameters), callback);
	},
	setKpi : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"setKpi", parameters), callback);
	},
	setYaxis : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"setYaxis", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"equals", parameters), callback);
	},
	getComponentJsonData : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"getComponentJsonData", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"validateDatasourceField", parameters), callback);
	},
	saveToXmlByObj : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"saveToXmlByObj", parameters), callback);
	},
	getComponentTagCode : function(reportId, componentId, actionUrl, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			actionUrl : actionUrl
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"getComponentTagCode", parameters), callback);
	},
	setTitle : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"setTitle", parameters), callback);
	},
	setHeight : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"setHeight", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"toString", parameters), callback);
	},
	setSortField : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.ColumnService",
				"setSortField", parameters), callback);
	}
};
datagridService = {
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "getOrCreateXaxis", parameters), callback);
	},
	saveHeadui : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "saveHeadui", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "validateAllChartComponent", parameters),
				callback);
	},
	getDatacol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "getDatacol", parameters), callback);
	},
	clickCell : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "clickCell", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "equals", parameters), callback);
	},
	saveToXmlByObj : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "saveToXmlByObj", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "validateDatasourceField", parameters),
				callback);
	},
	saveDatacol : function(nodeData, nodeKey, callback) {
		var parameters = {
			nodeData : nodeData,
			nodeKey : nodeKey
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "saveDatacol", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "wait", parameters), callback);
	},
	main : function(args, callback) {
		var parameters = {
			args : args
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "main", parameters), callback);
	},
	readFromXmlByReportId : function(reportId, isFormal, callback) {
		var parameters = {
			reportId : reportId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "readFromXmlByReportId", parameters),
				callback);
	},
	getComponent : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "getComponent", parameters), callback);
	},
	saveComponent : function(nodeData, nodeKey, callback) {
		var parameters = {
			nodeData : nodeData,
			nodeKey : nodeKey
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "saveComponent", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "toString", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "getOrCreateKpiList", parameters), callback);
	},
	checkDgComp : function(r, c, callback) {
		var parameters = {
			r : r,
			c : c
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "checkDgComp", parameters), callback);
	},
	resetDatacol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "resetDatacol", parameters), callback);
	},
	getOrCreateComponet : function(reportId, componentId, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId
		};
		cn.com.easy.util
				.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
						"datagridService", "getOrCreateComponet", parameters),
						callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"datagridService", "getOrCreateYaxisList", parameters),
				callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.mbuilder == null)
	cn.com.easy.mbuilder = {};
if (cn.com.easy.mbuilder.service == null)
	cn.com.easy.mbuilder.service = {};
if (cn.com.easy.mbuilder.service.component == null)
	cn.com.easy.mbuilder.service.component = {};
cn.com.easy.mbuilder.service.component.LineService = {
	validateComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"validateComponent", parameters), callback);
	},
	setDataSourceId : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"setDataSourceId", parameters), callback);
	},
	showSetHW : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"showSetHW", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService", "wait",
				parameters), callback);
	},
	readFromXmlByReportId : function(reportId, isFormal, callback) {
		var parameters = {
			reportId : reportId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"readFromXmlByReportId", parameters), callback);
	},
	setDimField : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"setDimField", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"getOrCreateKpiList", parameters), callback);
	},
	setWidth : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"setWidth", parameters), callback);
	},
	getOrCreateComponet : function(reportId, componentId, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"getOrCreateComponet", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"getOrCreateYaxisList", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"getOrCreateXaxis", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"validateAllChartComponent", parameters), callback);
	},
	setKpi : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService", "setKpi",
				parameters), callback);
	},
	setYaxis : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"setYaxis", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService", "equals",
				parameters), callback);
	},
	getComponentJsonData : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"getComponentJsonData", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"validateDatasourceField", parameters), callback);
	},
	saveToXmlByObj : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"saveToXmlByObj", parameters), callback);
	},
	getComponentTagCode : function(reportId, componentId, actionUrl, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			actionUrl : actionUrl
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"getComponentTagCode", parameters), callback);
	},
	setTitle : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"setTitle", parameters), callback);
	},
	setHeight : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"setHeight", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"toString", parameters), callback);
	},
	setSortField : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.LineService",
				"setSortField", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.mbuilder == null)
	cn.com.easy.mbuilder = {};
if (cn.com.easy.mbuilder.service == null)
	cn.com.easy.mbuilder.service = {};
if (cn.com.easy.mbuilder.service.component == null)
	cn.com.easy.mbuilder.service.component = {};
cn.com.easy.mbuilder.service.component.PieService = {
	validateComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"validateComponent", parameters), callback);
	},
	setDataSourceId : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"setDataSourceId", parameters), callback);
	},
	showSetHW : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"showSetHW", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService", "wait",
				parameters), callback);
	},
	setUnit : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService", "setUnit",
				parameters), callback);
	},
	readFromXmlByReportId : function(reportId, isFormal, callback) {
		var parameters = {
			reportId : reportId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"readFromXmlByReportId", parameters), callback);
	},
	setDimField : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"setDimField", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"getOrCreateKpiList", parameters), callback);
	},
	setWidth : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"setWidth", parameters), callback);
	},
	getOrCreateComponet : function(reportId, componentId, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"getOrCreateComponet", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"getOrCreateYaxisList", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"getOrCreateXaxis", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"validateAllChartComponent", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService", "equals",
				parameters), callback);
	},
	getComponentJsonData : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"getComponentJsonData", parameters), callback);
	},
	setKpiName : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"setKpiName", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"validateDatasourceField", parameters), callback);
	},
	saveToXmlByObj : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"saveToXmlByObj", parameters), callback);
	},
	getComponentTagCode : function(reportId, componentId, actionUrl, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			actionUrl : actionUrl
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"getComponentTagCode", parameters), callback);
	},
	setTitle : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"setTitle", parameters), callback);
	},
	setHeight : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"setHeight", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"toString", parameters), callback);
	},
	setKpiField : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"setKpiField", parameters), callback);
	},
	setSortField : function(reportId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.component.PieService",
				"setSortField", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.mbuilder == null)
	cn.com.easy.mbuilder = {};
if (cn.com.easy.mbuilder.service == null)
	cn.com.easy.mbuilder.service = {};
cn.com.easy.mbuilder.service.CompTreeService = {
	getIsCompExist : function(reportId, compId, callback) {
		var parameters = {
			reportId : reportId,
			compId : compId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.CompTreeService",
				"getIsCompExist", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.CompTreeService",
				"getOrCreateXaxis", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.CompTreeService",
				"validateAllChartComponent", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.CompTreeService", "equals",
				parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.CompTreeService",
				"validateDatasourceField", parameters), callback);
	},
	saveToXmlByObj : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.CompTreeService",
				"saveToXmlByObj", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.CompTreeService", "wait",
				parameters), callback);
	},
	readFromXmlByReportId : function(reportId, isFormal, callback) {
		var parameters = {
			reportId : reportId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.CompTreeService",
				"readFromXmlByReportId", parameters), callback);
	},
	getComponentTreeData : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.CompTreeService",
				"getComponentTreeData", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.CompTreeService", "toString",
				parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.CompTreeService",
				"getOrCreateKpiList", parameters), callback);
	},
	getOrCreateComponet : function(reportId, componentId, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.CompTreeService",
				"getOrCreateComponet", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.CompTreeService",
				"getOrCreateYaxisList", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.mbuilder == null)
	cn.com.easy.mbuilder = {};
if (cn.com.easy.mbuilder.service == null)
	cn.com.easy.mbuilder.service = {};
cn.com.easy.mbuilder.service.DataSetService = {
	addDimsion : function(reportId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "addDimsion",
				parameters), callback);
	},
	getTreeData : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "getTreeData",
				parameters), callback);
	},
	addQueryLink : function(reportId, dimsionId, callback) {
		var parameters = {
			reportId : reportId,
			dimsionId : dimsionId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "addQueryLink",
				parameters), callback);
	},
	getEditDimsion : function(reportId, dimVarName, callback) {
		var parameters = {
			reportId : reportId,
			dimVarName : dimVarName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService",
				"getEditDimsion", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "wait",
				parameters), callback);
	},
	getParentDims : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "getParentDims",
				parameters), callback);
	},
	validate : function(report, callback) {
		var parameters = {
			report : report
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "validate",
				parameters), callback);
	},
	getRestrain : function(dataSql, callback) {
		var parameters = {
			dataSql : dataSql
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "getRestrain",
				parameters), callback);
	},
	readFromXmlByReportId : function(reportId, isFormal, callback) {
		var parameters = {
			reportId : reportId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService",
				"readFromXmlByReportId", parameters), callback);
	},
	getChildDimsion : function(report, dimVarname, callback) {
		var parameters = {
			report : report,
			dimVarname : dimVarname
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService",
				"getChildDimsion", parameters), callback);
	},
	getAllReports : function(reportId, reportName, datasetName, callback) {
		var parameters = {
			reportId : reportId,
			reportName : reportName,
			datasetName : datasetName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "getAllReports",
				parameters), callback);
	},
	getParamString : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService",
				"getParamString", parameters), callback);
	},
	removeDataSet : function(reportId, datasetId, callback) {
		var parameters = {
			reportId : reportId,
			datasetId : datasetId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "removeDataSet",
				parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "equals",
				parameters), callback);
	},
	addDataSet : function(reportId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "addDataSet",
				parameters), callback);
	},
	getDimsion : function(report, dimsionId, callback) {
		var parameters = {
			report : report,
			dimsionId : dimsionId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "getDimsion",
				parameters), callback);
	},
	validateSql : function(datasetName, dataSql, databaseName, callback) {
		var parameters = {
			datasetName : datasetName,
			dataSql : dataSql,
			databaseName : databaseName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "validateSql",
				parameters), callback);
	},
	getParentDimsion : function(report, dimVarname, callback) {
		var parameters = {
			report : report,
			dimVarname : dimVarname
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService",
				"getParentDimsion", parameters), callback);
	},
	saveToXmlByObj : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService",
				"saveToXmlByObj", parameters), callback);
	},
	getTreeDataObj : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService",
				"getTreeDataObj", parameters), callback);
	},
	removeQueryLink : function(reportId, dimsionId, callback) {
		var parameters = {
			reportId : reportId,
			dimsionId : dimsionId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService",
				"removeQueryLink", parameters), callback);
	},
	validateDimSql : function(dim, callback) {
		var parameters = {
			dim : dim
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService",
				"validateDimSql", parameters), callback);
	},
	getTreeRestrain : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService",
				"getTreeRestrain", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "toString",
				parameters), callback);
	},
	getfield : function(dataSql, databaseName, callback) {
		var parameters = {
			dataSql : dataSql,
			databaseName : databaseName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.mbuilder.service.DataSetService", "getfield",
				parameters), callback);
	}
};
mbuilderDsgnService = {
	reportToInvalid : function(compMap, callback) {
		var parameters = {
			compMap : compMap
		};
		cn.com.easy.util
				.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
						"mbuilderDsgnService", "reportToInvalid", parameters),
						callback);
	},
	setComponentLayout : function(reportId, compId, layoutId, callback) {
		var parameters = {
			reportId : reportId,
			compId : compId,
			layoutId : layoutId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderDsgnService", "setComponentLayout", parameters),
				callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderDsgnService", "equals", parameters), callback);
	},
	reportSetInfo : function(reportMap, callback) {
		var parameters = {
			reportMap : reportMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderDsgnService", "reportSetInfo", parameters), callback);
	},
	saveToXmlByObj : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderDsgnService", "saveToXmlByObj", parameters), callback);
	},
	reportInit : function(reportMap, callback) {
		var parameters = {
			reportMap : reportMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderDsgnService", "reportInit", parameters), callback);
	},
	reportReset : function(reportMap, callback) {
		var parameters = {
			reportMap : reportMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderDsgnService", "reportReset", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderDsgnService", "wait", parameters), callback);
	},
	reportAddComp : function(compMap, callback) {
		var parameters = {
			compMap : compMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderDsgnService", "reportAddComp", parameters), callback);
	},
	readFromXmlByReportId : function(reportId, isFormal, callback) {
		var parameters = {
			reportId : reportId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderDsgnService", "readFromXmlByReportId", parameters),
				callback);
	},
	removeComponent : function(reportId, compId, callback) {
		var parameters = {
			reportId : reportId,
			compId : compId
		};
		cn.com.easy.util
				.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
						"mbuilderDsgnService", "removeComponent", parameters),
						callback);
	},
	layout : function(layoutMap, callback) {
		var parameters = {
			layoutMap : layoutMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderDsgnService", "layout", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderDsgnService", "toString", parameters), callback);
	},
	reportValidate : function(report, callback) {
		var parameters = {
			report : report
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderDsgnService", "reportValidate", parameters), callback);
	}
};
mbuilderEditService = {
	getQueryString : function(reportId, dimsionId, callback) {
		var parameters = {
			reportId : reportId,
			dimsionId : dimsionId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderEditService", "getQueryString", parameters), callback);
	},
	getDimsions : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderEditService", "getDimsions", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderEditService", "equals", parameters), callback);
	},
	saveToXmlByObj : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderEditService", "saveToXmlByObj", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderEditService", "wait", parameters), callback);
	},
	readFromXmlByReportId : function(reportId, isFormal, callback) {
		var parameters = {
			reportId : reportId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderEditService", "readFromXmlByReportId", parameters),
				callback);
	},
	getCompList : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderEditService", "getCompList", parameters), callback);
	},
	getLayout : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderEditService", "getLayout", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderEditService", "toString", parameters), callback);
	},
	getReportInfo : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderEditService", "getReportInfo", parameters), callback);
	},
	getReport : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"mbuilderEditService", "getReport", parameters), callback);
	}
};
treegridService = {
	getSubdrills : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "getSubdrills", parameters), callback);
	},
	saveHeadui : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "saveHeadui", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "wait", parameters), callback);
	},
	saveSubdrills : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "saveSubdrills", parameters), callback);
	},
	addCol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "addCol", parameters), callback);
	},
	readFromXmlByReportId : function(reportId, isFormal, callback) {
		var parameters = {
			reportId : reportId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "readFromXmlByReportId", parameters),
				callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "getOrCreateKpiList", parameters), callback);
	},
	addRow : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "addRow", parameters), callback);
	},
	getOrCreateComponet : function(reportId, componentId, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId
		};
		cn.com.easy.util
				.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
						"treegridService", "getOrCreateComponet", parameters),
						callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "getOrCreateYaxisList", parameters),
				callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "getOrCreateXaxis", parameters), callback);
	},
	getDatacol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "getDatacol", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "validateAllChartComponent", parameters),
				callback);
	},
	deleteCol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "deleteCol", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "equals", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "validateDatasourceField", parameters),
				callback);
	},
	saveToXmlByObj : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "saveToXmlByObj", parameters), callback);
	},
	validateAllTreegridComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "validateAllTreegridComponent", parameters),
				callback);
	},
	saveDatacol : function(nodeData, nodeKey, callback) {
		var parameters = {
			nodeData : nodeData,
			nodeKey : nodeKey
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "saveDatacol", parameters), callback);
	},
	deleteRow : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "deleteRow", parameters), callback);
	},
	saveComponent : function(nodeData, nodeKey, callback) {
		var parameters = {
			nodeData : nodeData,
			nodeKey : nodeKey
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "saveComponent", parameters), callback);
	},
	getComponent : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "getComponent", parameters), callback);
	},
	destoryComponent : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "destoryComponent", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"treegridService", "toString", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.cusview == null)
	cn.com.easy.cusview = {};
if (cn.com.easy.cusview.service == null)
	cn.com.easy.cusview.service = {};
cn.com.easy.cusview.service.ComponentService = {
	getFirstComponent : function(viewId, containerId, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"getFirstComponent", parameters), callback);
	},
	addComponentWithoutType : function(viewId, containerId, param, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId,
			param : param
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"addComponentWithoutType", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService", "equals",
				parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"readFromXmlByViewId", parameters), callback);
	},
	saveToXmlByObj : function(ViewId, callback) {
		var parameters = {
			ViewId : ViewId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"saveToXmlByObj", parameters), callback);
	},
	getContainerAllInfoById : function(viewId, containerId, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"getContainerAllInfoById", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService", "wait",
				parameters), callback);
	},
	getContainerById : function(viewObj, containerId, callback) {
		var parameters = {
			viewObj : viewObj,
			containerId : containerId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"getContainerById", parameters), callback);
	},
	parseComponent : function(param, callback) {
		var parameters = {
			param : param
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"parseComponent", parameters), callback);
	},
	setContainerType : function(viewId, containerId, containerType, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId,
			containerType : containerType
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"setContainerType", parameters), callback);
	},
	replaceComponent : function(viewId, containerId, component, replaceType,
			callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId,
			component : component,
			replaceType : replaceType
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"replaceComponent", parameters), callback);
	},
	checkComponent : function(param, callback) {
		var parameters = {
			param : param
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"checkComponent", parameters), callback);
	},
	getComponentList : function(viewObj, containerId, callback) {
		var parameters = {
			viewObj : viewObj,
			containerId : containerId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"getComponentList", parameters), callback);
	},
	clearContainer : function(viewId, containerId, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"clearContainer", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService", "toString",
				parameters), callback);
	},
	saveContainerProperty : function(viewId, containerId, jsonString, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"saveContainerProperty", parameters), callback);
	},
	addComponent : function(viewId, containerId, component, isPop, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId,
			component : component,
			isPop : isPop
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService", "addComponent",
				parameters), callback);
	},
	checkComponentExist : function(viewId, containerId, compId, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId,
			compId : compId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ComponentService",
				"checkComponentExist", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.cusview == null)
	cn.com.easy.cusview = {};
if (cn.com.easy.cusview.service == null)
	cn.com.easy.cusview.service = {};
cn.com.easy.cusview.service.ViewService = {
	setView : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ViewService", "setView",
				parameters), callback);
	},
	removeLayoutLi : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ViewService", "removeLayoutLi",
				parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util
				.wrapEasyParameter("cn.com.easy.cusview.service.ViewService",
						"equals", parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ViewService",
				"readFromXmlByViewId", parameters), callback);
	},
	saveToXmlByObj : function(ViewId, callback) {
		var parameters = {
			ViewId : ViewId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ViewService", "saveToXmlByObj",
				parameters), callback);
	},
	setModifyUser : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ViewService", "setModifyUser",
				parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ViewService", "wait", parameters),
				callback);
	},
	addLayoutLi : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ViewService", "addLayoutLi",
				parameters), callback);
	},
	setLHtml : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ViewService", "setLHtml",
				parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ViewService", "toString",
				parameters), callback);
	},
	setName : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ViewService", "setName",
				parameters), callback);
	},
	setTheme : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.cusview.service.ViewService", "setTheme",
				parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
if (cn.com.easy.xbuilder.service.component == null)
	cn.com.easy.xbuilder.service.component = {};
cn.com.easy.xbuilder.service.component.BarService = {
	validateComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"validateComponent", parameters), callback);
	},
	setDataSourceId : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"setDataSourceId", parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"readFromXmlByViewId", parameters), callback);
	},
	showSetHW : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"showSetHW", parameters), callback);
	},
	setComponentSqlString : function(reportObj, containerId, componentId,
			callback) {
		var parameters = {
			reportObj : reportObj,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"setComponentSqlString", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService", "wait",
				parameters), callback);
	},
	removeExtKpi : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"removeExtKpi", parameters), callback);
	},
	setLegend : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"setLegend", parameters), callback);
	},
	setDimField : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"setDimField", parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"readFromXml", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"getOrCreateKpiList", parameters), callback);
	},
	setWidth : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"setWidth", parameters), callback);
	},
	getOrCreateComponet : function(report, containerId, componentId, callback) {
		var parameters = {
			report : report,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"getOrCreateComponet", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"getOrCreateYaxisList", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"getOrCreateXaxis", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"validateAllChartComponent", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService", "equals",
				parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"readFromXmlNoCatch", parameters), callback);
	},
	setKpi : function(reportId, containerId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService", "setKpi",
				parameters), callback);
	},
	setYaxis : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"setYaxis", parameters), callback);
	},
	getComponentJsonData : function(reportId, containerId, componentId,
			jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"getComponentJsonData", parameters), callback);
	},
	setColors : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"setColors", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"validateDatasourceField", parameters), callback);
	},
	getComponentKpiColMap : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"getComponentKpiColMap", parameters), callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"saveToXmlByObj", parameters), callback);
	},
	checkCaculateColumnReference : function(reportId, containerId, componentId,
			extcolumnid, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			extcolumnid : extcolumnid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"checkCaculateColumnReference", parameters), callback);
	},
	getComponentTagCode : function(reportId, containerId, componentId,
			actionUrl, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			actionUrl : actionUrl
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"getComponentTagCode", parameters), callback);
	},
	setTitle : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"setTitle", parameters), callback);
	},
	setHeight : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"setHeight", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"toString", parameters), callback);
	},
	setSortField : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.BarService",
				"setSortField", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
if (cn.com.easy.xbuilder.service.component == null)
	cn.com.easy.xbuilder.service.component = {};
cn.com.easy.xbuilder.service.component.ColumnLineService = {
	validateComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"validateComponent", parameters), callback);
	},
	setDataSourceId : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"setDataSourceId", parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"readFromXmlByViewId", parameters), callback);
	},
	showSetHW : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"showSetHW", parameters), callback);
	},
	setComponentSqlString : function(reportObj, containerId, componentId,
			callback) {
		var parameters = {
			reportObj : reportObj,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"setComponentSqlString", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"wait", parameters), callback);
	},
	removeExtKpi : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"removeExtKpi", parameters), callback);
	},
	setLegend : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"setLegend", parameters), callback);
	},
	setDimField : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"setDimField", parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"readFromXml", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"getOrCreateKpiList", parameters), callback);
	},
	setWidth : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"setWidth", parameters), callback);
	},
	setStacking : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"setStacking", parameters), callback);
	},
	getOrCreateComponet : function(report, containerId, componentId, callback) {
		var parameters = {
			report : report,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"getOrCreateComponet", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"getOrCreateYaxisList", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"getOrCreateXaxis", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"validateAllChartComponent", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"equals", parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"readFromXmlNoCatch", parameters), callback);
	},
	setKpi : function(reportId, containerId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"setKpi", parameters), callback);
	},
	setYaxis : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"setYaxis", parameters), callback);
	},
	getComponentJsonData : function(reportId, containerId, componentId,
			jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"getComponentJsonData", parameters), callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"saveToXmlByObj", parameters), callback);
	},
	setColors : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"setColors", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"validateDatasourceField", parameters), callback);
	},
	getComponentKpiColMap : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"getComponentKpiColMap", parameters), callback);
	},
	checkCaculateColumnReference : function(reportId, containerId, componentId,
			extcolumnid, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			extcolumnid : extcolumnid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"checkCaculateColumnReference", parameters), callback);
	},
	getComponentTagCode : function(reportId, containerId, componentId,
			actionUrl, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			actionUrl : actionUrl
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"getComponentTagCode", parameters), callback);
	},
	setTitle : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"setTitle", parameters), callback);
	},
	setHeight : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"setHeight", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"toString", parameters), callback);
	},
	setSortField : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnLineService",
				"setSortField", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
if (cn.com.easy.xbuilder.service.component == null)
	cn.com.easy.xbuilder.service.component = {};
cn.com.easy.xbuilder.service.component.ColumnService = {
	validateComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"validateComponent", parameters), callback);
	},
	setDataSourceId : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"setDataSourceId", parameters), callback);
	},
	checkExtColRef : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"checkExtColRef", parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"readFromXmlByViewId", parameters), callback);
	},
	showSetHW : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"showSetHW", parameters), callback);
	},
	setComponentSqlString : function(reportObj, containerId, componentId,
			callback) {
		var parameters = {
			reportObj : reportObj,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"setComponentSqlString", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService", "wait",
				parameters), callback);
	},
	removeExtKpi : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"removeExtKpi", parameters), callback);
	},
	setLegend : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"setLegend", parameters), callback);
	},
	setDimField : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"setDimField", parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"readFromXml", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"getOrCreateKpiList", parameters), callback);
	},
	setWidth : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"setWidth", parameters), callback);
	},
	setStacking : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"setStacking", parameters), callback);
	},
	getOrCreateComponet : function(report, containerId, componentId, callback) {
		var parameters = {
			report : report,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"getOrCreateComponet", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"getOrCreateYaxisList", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"getOrCreateXaxis", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"validateAllChartComponent", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"equals", parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"readFromXmlNoCatch", parameters), callback);
	},
	setKpi : function(reportId, containerId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"setKpi", parameters), callback);
	},
	setYaxis : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"setYaxis", parameters), callback);
	},
	getComponentJsonData : function(reportId, containerId, componentId,
			jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"getComponentJsonData", parameters), callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"saveToXmlByObj", parameters), callback);
	},
	setColors : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"setColors", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"validateDatasourceField", parameters), callback);
	},
	getComponentKpiColMap : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"getComponentKpiColMap", parameters), callback);
	},
	checkCaculateColumnReference : function(reportId, containerId, componentId,
			extcolumnid, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			extcolumnid : extcolumnid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"checkCaculateColumnReference", parameters), callback);
	},
	getComponentTagCode : function(reportId, containerId, componentId,
			actionUrl, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			actionUrl : actionUrl
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"getComponentTagCode", parameters), callback);
	},
	setTitle : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"setTitle", parameters), callback);
	},
	setHeight : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"setHeight", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"toString", parameters), callback);
	},
	setSortField : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ColumnService",
				"setSortField", parameters), callback);
	}
};
crossTableService = {
	setMoreEventStoreMoreEvent : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "setMoreEventStoreMoreEvent", parameters),
				callback);
	},
	saveCrossDimColumns : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "saveCrossDimColumns", parameters),
				callback);
	},
	validateComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util
				.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
						"crossTableService", "validateComponent", parameters),
						callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "readFromXmlByViewId", parameters),
				callback);
	},
	setDataColDesc : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "setDataColDesc", parameters), callback);
	},
	removeExtcolumn : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "removeExtcolumn", parameters), callback);
	},
	setComponentSqlString : function(reportObj, containerId, componentId,
			callback) {
		var parameters = {
			reportObj : reportObj,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "setComponentSqlString", parameters),
				callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "wait", parameters), callback);
	},
	addExtcolumn : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "addExtcolumn", parameters), callback);
	},
	setClearRowDimEvent : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "setClearRowDimEvent", parameters),
				callback);
	},
	setRowDimEvents : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "setRowDimEvents", parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "readFromXml", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "getOrCreateKpiList", parameters),
				callback);
	},
	getOrCreateComponet : function(report, containerId, componentId, callback) {
		var parameters = {
			report : report,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "getOrCreateComponet", parameters),
				callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "getOrCreateYaxisList", parameters),
				callback);
	},
	editExtcolumn : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "editExtcolumn", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "getOrCreateXaxis", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "validateAllChartComponent", parameters),
				callback);
	},
	setMoreDimColumnMoreAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "setMoreDimColumnMoreAttrs", parameters),
				callback);
	},
	setHeadui : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "setHeadui", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "equals", parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "readFromXmlNoCatch", parameters),
				callback);
	},
	saveCrossKpiColumns : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "saveCrossKpiColumns", parameters),
				callback);
	},
	getComponentJsonData : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "getComponentJsonData", parameters),
				callback);
	},
	setComponentAttr : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "setComponentAttr", parameters), callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "saveToXmlByObj", parameters), callback);
	},
	getComponentKpiColMap : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "getComponentKpiColMap", parameters),
				callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "validateDatasourceField", parameters),
				callback);
	},
	checkCaculateColumnReference : function(reportId, containerId, componentId,
			extcolumnid, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			extcolumnid : extcolumnid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util
				.wrapEasyParameter("crossTableService",
						"checkCaculateColumnReference", parameters), callback);
	},
	setClearMoreEvent : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util
				.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
						"crossTableService", "setClearMoreEvent", parameters),
						callback);
	},
	setComponentAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util
				.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
						"crossTableService", "setComponentAttrs", parameters),
						callback);
	},
	saveCrossSortColumns : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "saveCrossSortColumns", parameters),
				callback);
	},
	getExtcolumn : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "getExtcolumn", parameters), callback);
	},
	addMoreKpiStoreCols : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "addMoreKpiStoreCols", parameters),
				callback);
	},
	setMoreDatacolMoreAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "setMoreDatacolMoreAttrs", parameters),
				callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"crossTableService", "toString", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
if (cn.com.easy.xbuilder.service.component == null)
	cn.com.easy.xbuilder.service.component = {};
cn.com.easy.xbuilder.service.component.DatagridService = {
	setMoreEventStoreMoreEvent : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"setMoreEventStoreMoreEvent", parameters), callback);
	},
	removeMoreDatacol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"removeMoreDatacol", parameters), callback);
	},
	validateComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"validateComponent", parameters), callback);
	},
	setMoreSortcolMoreAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"setMoreSortcolMoreAttrs", parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"readFromXmlByViewId", parameters), callback);
	},
	removeExtcolumn : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"removeExtcolumn", parameters), callback);
	},
	setComponentSqlString : function(reportObj, containerId, componentId,
			callback) {
		var parameters = {
			reportObj : reportObj,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"setComponentSqlString", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"wait", parameters), callback);
	},
	addExtcolumn : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"addExtcolumn", parameters), callback);
	},
	removeDatacol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"removeDatacol", parameters), callback);
	},
	validateComponentById : function(reportId, containerId, componentId,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"validateComponentById", parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"readFromXml", parameters), callback);
	},
	moveDatacolColPosition : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"moveDatacolColPosition", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"getOrCreateKpiList", parameters), callback);
	},
	removeMoreDynheadcol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"removeMoreDynheadcol", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"getOrCreateYaxisList", parameters), callback);
	},
	getOrCreateComponet : function(report, containerId, componentId, callback) {
		var parameters = {
			report : report,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"getOrCreateComponet", parameters), callback);
	},
	editExtcolumn : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"editExtcolumn", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"getOrCreateXaxis", parameters), callback);
	},
	overWriteSortcols : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"overWriteSortcols", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"validateAllChartComponent", parameters), callback);
	},
	setHeadui : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"setHeadui", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"equals", parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"readFromXmlNoCatch", parameters), callback);
	},
	setMoreDynheadcolMoreAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"setMoreDynheadcolMoreAttrs", parameters), callback);
	},
	getComponentJsonData : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"getComponentJsonData", parameters), callback);
	},
	setComponentAttr : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"setComponentAttr", parameters), callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"saveToXmlByObj", parameters), callback);
	},
	getComponentKpiColMap : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"getComponentKpiColMap", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"validateDatasourceField", parameters), callback);
	},
	checkCaculateColumnReference : function(reportId, containerId, componentId,
			extcolumnid, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			extcolumnid : extcolumnid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"checkCaculateColumnReference", parameters), callback);
	},
	setClearMoreEvent : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"setClearMoreEvent", parameters), callback);
	},
	removeMoreSortcol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"removeMoreSortcol", parameters), callback);
	},
	main : function(args, callback) {
		var parameters = {
			args : args
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"main", parameters), callback);
	},
	setDatacolAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"setDatacolAttrs", parameters), callback);
	},
	setComponentAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"setComponentAttrs", parameters), callback);
	},
	getExtcolumn : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"getExtcolumn", parameters), callback);
	},
	addMoreKpiStoreCols : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"addMoreKpiStoreCols", parameters), callback);
	},
	setMoreDatacolMoreAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"setMoreDatacolMoreAttrs", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.DatagridService",
				"toString", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
if (cn.com.easy.xbuilder.service.component == null)
	cn.com.easy.xbuilder.service.component = {};
cn.com.easy.xbuilder.service.component.LineService = {
	validateComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"validateComponent", parameters), callback);
	},
	setDataSourceId : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"setDataSourceId", parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"readFromXmlByViewId", parameters), callback);
	},
	showSetHW : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"showSetHW", parameters), callback);
	},
	setComponentSqlString : function(reportObj, containerId, componentId,
			callback) {
		var parameters = {
			reportObj : reportObj,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"setComponentSqlString", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService", "wait",
				parameters), callback);
	},
	removeExtKpi : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"removeExtKpi", parameters), callback);
	},
	setLegend : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"setLegend", parameters), callback);
	},
	setDimField : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"setDimField", parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"readFromXml", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"getOrCreateKpiList", parameters), callback);
	},
	setWidth : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"setWidth", parameters), callback);
	},
	getOrCreateComponet : function(report, containerId, componentId, callback) {
		var parameters = {
			report : report,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"getOrCreateComponet", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"getOrCreateYaxisList", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"getOrCreateXaxis", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"validateAllChartComponent", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService", "equals",
				parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"readFromXmlNoCatch", parameters), callback);
	},
	setKpi : function(reportId, containerId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService", "setKpi",
				parameters), callback);
	},
	setYaxis : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"setYaxis", parameters), callback);
	},
	getComponentJsonData : function(reportId, containerId, componentId,
			jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"getComponentJsonData", parameters), callback);
	},
	setColors : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"setColors", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"validateDatasourceField", parameters), callback);
	},
	getComponentKpiColMap : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"getComponentKpiColMap", parameters), callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"saveToXmlByObj", parameters), callback);
	},
	checkCaculateColumnReference : function(reportId, containerId, componentId,
			extcolumnid, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			extcolumnid : extcolumnid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"checkCaculateColumnReference", parameters), callback);
	},
	getComponentTagCode : function(reportId, containerId, componentId,
			actionUrl, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			actionUrl : actionUrl
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"getComponentTagCode", parameters), callback);
	},
	setTitle : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"setTitle", parameters), callback);
	},
	setHeight : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"setHeight", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"toString", parameters), callback);
	},
	setSortField : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.LineService",
				"setSortField", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
if (cn.com.easy.xbuilder.service.component == null)
	cn.com.easy.xbuilder.service.component = {};
cn.com.easy.xbuilder.service.component.PieService = {
	validateComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"validateComponent", parameters), callback);
	},
	setDataSourceId : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"setDataSourceId", parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"readFromXmlByViewId", parameters), callback);
	},
	showSetHW : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"showSetHW", parameters), callback);
	},
	setComponentSqlString : function(reportObj, containerId, componentId,
			callback) {
		var parameters = {
			reportObj : reportObj,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"setComponentSqlString", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService", "wait",
				parameters), callback);
	},
	validateComponentById : function(reportId, containerId, componentId,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"validateComponentById", parameters), callback);
	},
	removeExtKpi : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"removeExtKpi", parameters), callback);
	},
	setLegend : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"setLegend", parameters), callback);
	},
	setUnit : function(reportId, containerId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService", "setUnit",
				parameters), callback);
	},
	setDimField : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"setDimField", parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"readFromXml", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"getOrCreateKpiList", parameters), callback);
	},
	setWidth : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"setWidth", parameters), callback);
	},
	getOrCreateComponet : function(report, containerId, componentId, callback) {
		var parameters = {
			report : report,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"getOrCreateComponet", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"getOrCreateYaxisList", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"getOrCreateXaxis", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"validateAllChartComponent", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService", "equals",
				parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"readFromXmlNoCatch", parameters), callback);
	},
	getComponentJsonData : function(reportId, containerId, componentId,
			jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"getComponentJsonData", parameters), callback);
	},
	setKpiName : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"setKpiName", parameters), callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"saveToXmlByObj", parameters), callback);
	},
	setColors : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"setColors", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"validateDatasourceField", parameters), callback);
	},
	getComponentKpiColMap : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"getComponentKpiColMap", parameters), callback);
	},
	checkCaculateColumnReference : function(reportId, containerId, componentId,
			extcolumnid, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			extcolumnid : extcolumnid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"checkCaculateColumnReference", parameters), callback);
	},
	getComponentTagCode : function(reportId, componentId, actionUrl, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			actionUrl : actionUrl
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"getComponentTagCode", parameters), callback);
	},
	setTitle : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"setTitle", parameters), callback);
	},
	setHeight : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"setHeight", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"toString", parameters), callback);
	},
	setKpiField : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"setKpiField", parameters), callback);
	},
	setSortField : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.PieService",
				"setSortField", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
if (cn.com.easy.xbuilder.service.component == null)
	cn.com.easy.xbuilder.service.component = {};
cn.com.easy.xbuilder.service.component.ScatterService = {
	validateComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"validateComponent", parameters), callback);
	},
	setDataSourceId : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"setDataSourceId", parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"readFromXmlByViewId", parameters), callback);
	},
	setComponentSqlString : function(reportObj, containerId, componentId,
			callback) {
		var parameters = {
			reportObj : reportObj,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"setComponentSqlString", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"wait", parameters), callback);
	},
	removeExtKpi : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"removeExtKpi", parameters), callback);
	},
	setLegend : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"setLegend", parameters), callback);
	},
	setDimField : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"setDimField", parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"readFromXml", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"getOrCreateKpiList", parameters), callback);
	},
	getOrCreateComponet : function(report, containerId, componentId, callback) {
		var parameters = {
			report : report,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"getOrCreateComponet", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"getOrCreateYaxisList", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"getOrCreateXaxis", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"validateAllChartComponent", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"equals", parameters), callback);
	},
	setKpi : function(reportId, containerId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"setKpi", parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"readFromXmlNoCatch", parameters), callback);
	},
	getComponentJsonData : function(reportId, containerId, componentId,
			jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"getComponentJsonData", parameters), callback);
	},
	setColors : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"setColors", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"validateDatasourceField", parameters), callback);
	},
	getComponentKpiColMap : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"getComponentKpiColMap", parameters), callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"saveToXmlByObj", parameters), callback);
	},
	checkCaculateColumnReference : function(reportId, containerId, componentId,
			extcolumnid, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			extcolumnid : extcolumnid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"checkCaculateColumnReference", parameters), callback);
	},
	setMinDimField : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"setMinDimField", parameters), callback);
	},
	getComponentTagCode : function(reportId, componentId, actionUrl, callback) {
		var parameters = {
			reportId : reportId,
			componentId : componentId,
			actionUrl : actionUrl
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"getComponentTagCode", parameters), callback);
	},
	setTitle : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"setTitle", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.ScatterService",
				"toString", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
if (cn.com.easy.xbuilder.service.component == null)
	cn.com.easy.xbuilder.service.component = {};
cn.com.easy.xbuilder.service.component.TreegridService = {
	setMoreEventStoreMoreEvent : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"setMoreEventStoreMoreEvent", parameters), callback);
	},
	validateComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"validateComponent", parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"readFromXmlByViewId", parameters), callback);
	},
	setComponentSqlString : function(reportObj, containerId, componentId,
			callback) {
		var parameters = {
			reportObj : reportObj,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"setComponentSqlString", parameters), callback);
	},
	addExtcolumn : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"addExtcolumn", parameters), callback);
	},
	removeDatacol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"removeDatacol", parameters), callback);
	},
	validateComponentById : function(reportId, containerId, componentId,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"validateComponentById", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"wait", parameters), callback);
	},
	moveDatacolColPosition : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"moveDatacolColPosition", parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"readFromXml", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"getOrCreateKpiList", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"getOrCreateYaxisList", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"getOrCreateXaxis", parameters), callback);
	},
	overWriteSortcols : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"overWriteSortcols", parameters), callback);
	},
	setHeadui : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"setHeadui", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"validateAllChartComponent", parameters), callback);
	},
	setMoreDynheadcolMoreAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"setMoreDynheadcolMoreAttrs", parameters), callback);
	},
	overWriteDrillcols : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"overWriteDrillcols", parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"readFromXmlNoCatch", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"equals", parameters), callback);
	},
	getComponentJsonData : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"getComponentJsonData", parameters), callback);
	},
	setComponentAttr : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"setComponentAttr", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"validateDatasourceField", parameters), callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"saveToXmlByObj", parameters), callback);
	},
	setOneSubdrillOneAttr : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"setOneSubdrillOneAttr", parameters), callback);
	},
	setComponentAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"setComponentAttrs", parameters), callback);
	},
	getExtcolumn : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"getExtcolumn", parameters), callback);
	},
	addMoreKpiStoreCols : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"addMoreKpiStoreCols", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"toString", parameters), callback);
	},
	removeMoreDatacol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"removeMoreDatacol", parameters), callback);
	},
	setMoreSortcolMoreAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"setMoreSortcolMoreAttrs", parameters), callback);
	},
	setMoreSubdrillMoreAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"setMoreSubdrillMoreAttrs", parameters), callback);
	},
	removeExtcolumn : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"removeExtcolumn", parameters), callback);
	},
	needGenerateSqlFlag : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"needGenerateSqlFlag", parameters), callback);
	},
	removeMoreDrillcol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"removeMoreDrillcol", parameters), callback);
	},
	removeMoreDynheadcol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"removeMoreDynheadcol", parameters), callback);
	},
	getOrCreateComponet : function(report, containerId, componentId, callback) {
		var parameters = {
			report : report,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"getOrCreateComponet", parameters), callback);
	},
	editExtcolumn : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"editExtcolumn", parameters), callback);
	},
	getComponentKpiColMap : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"getComponentKpiColMap", parameters), callback);
	},
	checkCaculateColumnReference : function(reportId, containerId, componentId,
			extcolumnid, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			extcolumnid : extcolumnid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"checkCaculateColumnReference", parameters), callback);
	},
	setClearMoreEvent : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"setClearMoreEvent", parameters), callback);
	},
	removeMoreSortcol : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"removeMoreSortcol", parameters), callback);
	},
	main : function(args, callback) {
		var parameters = {
			args : args
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"main", parameters), callback);
	},
	setDatacolAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"setDatacolAttrs", parameters), callback);
	},
	setMoreDatacolMoreAttrs : function(nodeData, callback) {
		var parameters = {
			nodeData : nodeData
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.TreegridService",
				"setMoreDatacolMoreAttrs", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
if (cn.com.easy.xbuilder.service.component == null)
	cn.com.easy.xbuilder.service.component = {};
cn.com.easy.xbuilder.service.component.WebLateService = {
	validateWebLate : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"validateWebLate", parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"readFromXmlByViewId", parameters), callback);
	},
	getConditionValue : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"getConditionValue", parameters), callback);
	},
	setComponentSqlString : function(reportObj, containerId, componentId,
			callback) {
		var parameters = {
			reportObj : reportObj,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"setComponentSqlString", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"wait", parameters), callback);
	},
	getWeblinkValue : function(vlist, callback) {
		var parameters = {
			vlist : vlist
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"getWeblinkValue", parameters), callback);
	},
	setVarname : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"setVarname", parameters), callback);
	},
	setUrl : function(reportId, containerId, componentId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"setUrl", parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"readFromXml", parameters), callback);
	},
	getOrCreateKpiList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"getOrCreateKpiList", parameters), callback);
	},
	getOrCreateYaxisList : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"getOrCreateYaxisList", parameters), callback);
	},
	getOrCreateComponet : function(report, containerId, componentId, callback) {
		var parameters = {
			report : report,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"getOrCreateComponet", parameters), callback);
	},
	addWeblinkOrCondition : function(reportId, containerId, componentId,
			jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"addWeblinkOrCondition", parameters), callback);
	},
	getOrCreateXaxis : function(component, callback) {
		var parameters = {
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"getOrCreateXaxis", parameters), callback);
	},
	validateAllChartComponent : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"validateAllChartComponent", parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"readFromXmlNoCatch", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"equals", parameters), callback);
	},
	getWeblinkJsonData : function(reportId, containerId, componentId,
			jsonString, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"getWeblinkJsonData", parameters), callback);
	},
	getWebLinkUserUrl : function(reportId, containerId, componentId, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"getWebLinkUserUrl", parameters), callback);
	},
	validateDatasourceField : function(dataSetModel, field, callback) {
		var parameters = {
			dataSetModel : dataSetModel,
			field : field
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"validateDatasourceField", parameters), callback);
	},
	getComponentKpiColMap : function(report, component, callback) {
		var parameters = {
			report : report,
			component : component
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"getComponentKpiColMap", parameters), callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"saveToXmlByObj", parameters), callback);
	},
	checkCaculateColumnReference : function(reportId, containerId, componentId,
			extcolumnid, callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			extcolumnid : extcolumnid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"checkCaculateColumnReference", parameters), callback);
	},
	setTitle : function(reportId, containerId, componentId, jsonString,
			callback) {
		var parameters = {
			reportId : reportId,
			containerId : containerId,
			componentId : componentId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"setTitle", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.component.WebLateService",
				"toString", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
cn.com.easy.xbuilder.service.DataSetService = {
	addDimsion : function(reportId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "addDimsion",
				parameters), callback);
	},
	getTreeData : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "getTreeData",
				parameters), callback);
	},
	addQueryLink : function(reportId, dimsionId, callback) {
		var parameters = {
			reportId : reportId,
			dimsionId : dimsionId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "addQueryLink",
				parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"readFromXmlByViewId", parameters), callback);
	},
	getEditDimsion : function(reportId, dimVarName, callback) {
		var parameters = {
			reportId : reportId,
			dimVarName : dimVarName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"getEditDimsion", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "wait",
				parameters), callback);
	},
	getParentDims : function(reportId, varName, callback) {
		var parameters = {
			reportId : reportId,
			varName : varName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "getParentDims",
				parameters), callback);
	},
	getResString : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "getResString",
				parameters), callback);
	},
	validate : function(report, callback) {
		var parameters = {
			report : report
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "validate",
				parameters), callback);
	},
	getRestrain : function(dataSql, callback) {
		var parameters = {
			dataSql : dataSql
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "getRestrain",
				parameters), callback);
	},
	addTmpDataSource : function(reportId, dsMap, callback) {
		var parameters = {
			reportId : reportId,
			dsMap : dsMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"addTmpDataSource", parameters), callback);
	},
	getChildDimsion : function(report, dimVarname, callback) {
		var parameters = {
			report : report,
			dimVarname : dimVarname
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"getChildDimsion", parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "readFromXml",
				parameters), callback);
	},
	getResObj : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "getResObj",
				parameters), callback);
	},
	getAllReports : function(reportId, reportName, datasetName, callback) {
		var parameters = {
			reportId : reportId,
			reportName : reportName,
			datasetName : datasetName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "getAllReports",
				parameters), callback);
	},
	getParamString : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"getParamString", parameters), callback);
	},
	removeDataSet : function(reportId, datasetId, callback) {
		var parameters = {
			reportId : reportId,
			datasetId : datasetId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "removeDataSet",
				parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "equals",
				parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"readFromXmlNoCatch", parameters), callback);
	},
	addDataSet : function(reportId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "addDataSet",
				parameters), callback);
	},
	getDimsion : function(report, dimsionId, callback) {
		var parameters = {
			report : report,
			dimsionId : dimsionId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "getDimsion",
				parameters), callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"saveToXmlByObj", parameters), callback);
	},
	validateSql : function(datasetName, dataSql, databaseName, callback) {
		var parameters = {
			datasetName : datasetName,
			dataSql : dataSql,
			databaseName : databaseName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "validateSql",
				parameters), callback);
	},
	getParentDimsion : function(report, dimVarname, callback) {
		var parameters = {
			report : report,
			dimVarname : dimVarname
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"getParentDimsion", parameters), callback);
	},
	getTreeDataObj : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"getTreeDataObj", parameters), callback);
	},
	removeQueryLink : function(reportId, dimsionId, callback) {
		var parameters = {
			reportId : reportId,
			dimsionId : dimsionId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"removeQueryLink", parameters), callback);
	},
	delTmpDataSource : function(id, reportId, callback) {
		var parameters = {
			id : id,
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"delTmpDataSource", parameters), callback);
	},
	addDataSource : function(reportId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "addDataSource",
				parameters), callback);
	},
	validateDimSql : function(dim, callback) {
		var parameters = {
			dim : dim
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"validateDimSql", parameters), callback);
	},
	removeTmpDataSet : function(reportId, datasetId, callback) {
		var parameters = {
			reportId : reportId,
			datasetId : datasetId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"removeTmpDataSet", parameters), callback);
	},
	getTreeRestrain : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"getTreeRestrain", parameters), callback);
	},
	beforeUptDataSet : function(reportId, datasetId, callback) {
		var parameters = {
			reportId : reportId,
			datasetId : datasetId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService",
				"beforeUptDataSet", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "toString",
				parameters), callback);
	},
	getfield : function(dataSql, databaseName, callback) {
		var parameters = {
			dataSql : dataSql,
			databaseName : databaseName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DataSetService", "getfield",
				parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
cn.com.easy.xbuilder.service.DimensionService = {
	getDimsions : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService", "getDimsions",
				parameters), callback);
	},
	addDimsion : function(reportId, jsonString, callback) {
		var parameters = {
			reportId : reportId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService", "addDimsion",
				parameters), callback);
	},
	addQueryLink : function(reportId, dimsionId, callback) {
		var parameters = {
			reportId : reportId,
			dimsionId : dimsionId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"addQueryLink", parameters), callback);
	},
	getEditDimsion : function(reportId, dimVarName, callback) {
		var parameters = {
			reportId : reportId,
			dimVarName : dimVarName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"getEditDimsion", parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"readFromXmlByViewId", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService", "wait",
				parameters), callback);
	},
	getParentDims : function(reportId, varName, callback) {
		var parameters = {
			reportId : reportId,
			varName : varName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"getParentDims", parameters), callback);
	},
	getRestrain : function(dataSql, callback) {
		var parameters = {
			dataSql : dataSql
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService", "getRestrain",
				parameters), callback);
	},
	getChildDimsion : function(report, dimVarname, callback) {
		var parameters = {
			report : report,
			dimVarname : dimVarname
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"getChildDimsion", parameters), callback);
	},
	addDimsionForKpi : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"addDimsionForKpi", parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService", "readFromXml",
				parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService", "equals",
				parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"readFromXmlNoCatch", parameters), callback);
	},
	getDimsion : function(report, dimsionId, callback) {
		var parameters = {
			report : report,
			dimsionId : dimsionId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService", "getDimsion",
				parameters), callback);
	},
	getParentDimsion : function(report, dimVarname, callback) {
		var parameters = {
			report : report,
			dimVarname : dimVarname
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"getParentDimsion", parameters), callback);
	},
	validateSql : function(datasetName, dataSql, databaseName, callback) {
		var parameters = {
			datasetName : datasetName,
			dataSql : dataSql,
			databaseName : databaseName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService", "validateSql",
				parameters), callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"saveToXmlByObj", parameters), callback);
	},
	getSelectValue : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"getSelectValue", parameters), callback);
	},
	autoInitDimsionForKpi : function(cube_id, callback) {
		var parameters = {
			cube_id : cube_id
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"autoInitDimsionForKpi", parameters), callback);
	},
	getDimsionForKpi : function(jsonString, cube_id, callback) {
		var parameters = {
			jsonString : jsonString,
			cube_id : cube_id
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"getDimsionForKpi", parameters), callback);
	},
	removeQueryLink : function(reportId, dimsionId, callback) {
		var parameters = {
			reportId : reportId,
			dimsionId : dimsionId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"removeQueryLink", parameters), callback);
	},
	main : function(args, callback) {
		var parameters = {
			args : args
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService", "main",
				parameters), callback);
	},
	validateDimSql : function(dim, callback) {
		var parameters = {
			dim : dim
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"validateDimSql", parameters), callback);
	},
	delDimsion : function(reportId, var_name, callback) {
		var parameters = {
			reportId : reportId,
			var_name : var_name
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService", "delDimsion",
				parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService", "toString",
				parameters), callback);
	},
	removeAllDimsion : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"removeAllDimsion", parameters), callback);
	},
	listSort : function(resultList, callback) {
		var parameters = {
			resultList : resultList
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService", "listSort",
				parameters), callback);
	},
	getStringValue : function(string, callback) {
		var parameters = {
			string : string
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"getStringValue", parameters), callback);
	},
	getRestrainVar : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.DimensionService",
				"getRestrainVar", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
cn.com.easy.xbuilder.service.FormulateVaildata = {
	adjacentVail : function(formula, callback) {
		var parameters = {
			formula : formula
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.FormulateVaildata",
				"adjacentVail", parameters), callback);
	},
	isOperator : function(formula, callback) {
		var parameters = {
			formula : formula
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.FormulateVaildata", "isOperator",
				parameters), callback);
	},
	formulateVerification : function(formula, callback) {
		var parameters = {
			formula : formula
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.FormulateVaildata",
				"formulateVerification", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.FormulateVaildata", "equals",
				parameters), callback);
	},
	isDividendZero : function(formula, callback) {
		var parameters = {
			formula : formula
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.FormulateVaildata",
				"isDividendZero", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.FormulateVaildata", "toString",
				parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.FormulateVaildata", "wait",
				parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
cn.com.easy.xbuilder.service.GlobalDataSetService = {
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.GlobalDataSetService", "equals",
				parameters), callback);
	},
	addGlobalDataSet : function(uuid, sql, dataSourceName, dataSetName, state,
			callback) {
		var parameters = {
			uuid : uuid,
			sql : sql,
			dataSourceName : dataSourceName,
			dataSetName : dataSetName,
			state : state
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.GlobalDataSetService",
				"addGlobalDataSet", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.GlobalDataSetService",
				"toString", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.GlobalDataSetService", "wait",
				parameters), callback);
	},
	insertGlbSql : function(uuid, base64Sql, glbDataSourceName, dataSetName,
			create_user, create_time, state, callback) {
		var parameters = {
			uuid : uuid,
			base64Sql : base64Sql,
			glbDataSourceName : glbDataSourceName,
			dataSetName : dataSetName,
			create_user : create_user,
			create_time : create_time,
			state : state
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.GlobalDataSetService",
				"insertGlbSql", parameters), callback);
	}
};
kpiSelectorService = {
	sort : function(cubeId, letter, keywords, category, sortType, callback) {
		var parameters = {
			cubeId : cubeId,
			letter : letter,
			keywords : keywords,
			category : category,
			sortType : sortType
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"kpiSelectorService", "sort", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"kpiSelectorService", "equals", parameters), callback);
	},
	getMyKpiList : function(cubeId, callback) {
		var parameters = {
			cubeId : cubeId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"kpiSelectorService", "getMyKpiList", parameters), callback);
	},
	addFavorite : function(cubeId, kpiMap, callback) {
		var parameters = {
			cubeId : cubeId,
			kpiMap : kpiMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"kpiSelectorService", "addFavorite", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"kpiSelectorService", "wait", parameters), callback);
	},
	main : function(args, callback) {
		var parameters = {
			args : args
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"kpiSelectorService", "main", parameters), callback);
	},
	getDataFromKpiLibrary : function(cubeId, categories, callback) {
		var parameters = {
			cubeId : cubeId,
			categories : categories
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"kpiSelectorService", "getDataFromKpiLibrary", parameters),
				callback);
	},
	removeFavorite : function(cubeId, kpiId, callback) {
		var parameters = {
			cubeId : cubeId,
			kpiId : kpiId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"kpiSelectorService", "removeFavorite", parameters), callback);
	},
	getCubeList : function(userId, callback) {
		var parameters = {
			userId : userId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"kpiSelectorService", "getCubeList", parameters), callback);
	},
	queryData : function(cubeId, keywords, letter, queryType, category,
			callback) {
		var parameters = {
			cubeId : cubeId,
			keywords : keywords,
			letter : letter,
			queryType : queryType,
			category : category
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"kpiSelectorService", "queryData", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"kpiSelectorService", "toString", parameters), callback);
	},
	reload : function(cubeId, categories, callback) {
		var parameters = {
			cubeId : cubeId,
			categories : categories
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"kpiSelectorService", "reload", parameters), callback);
	}
};
sqlSelectorService = {
	isDataSources : function(xid, callback) {
		var parameters = {
			xid : xid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"sqlSelectorService", "isDataSources", parameters), callback);
	},
	getMetadataDataSource : function(xid, callback) {
		var parameters = {
			xid : xid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"sqlSelectorService", "getMetadataDataSource", parameters),
				callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"sqlSelectorService", "equals", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"sqlSelectorService", "wait", parameters), callback);
	},
	getRestrain : function(dataSql, callback) {
		var parameters = {
			dataSql : dataSql
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"sqlSelectorService", "getRestrain", parameters), callback);
	},
	getListColumn : function(mapSource, callback) {
		var parameters = {
			mapSource : mapSource
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"sqlSelectorService", "getListColumn", parameters), callback);
	},
	getMeasuresInFormula : function(formula, callback) {
		var parameters = {
			formula : formula
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"sqlSelectorService", "getMeasuresInFormula", parameters),
				callback);
	},
	replaceBlank : function(sql, callback) {
		var parameters = {
			sql : sql
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"sqlSelectorService", "replaceBlank", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"sqlSelectorService", "toString", parameters), callback);
	},
	listSort : function(resultList, callback) {
		var parameters = {
			resultList : resultList
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"sqlSelectorService", "listSort", parameters), callback);
	},
	getStringValue : function(string, callback) {
		var parameters = {
			string : string
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"sqlSelectorService", "getStringValue", parameters), callback);
	},
	getRestrainVar : function(reportId, callback) {
		var parameters = {
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"sqlSelectorService", "getRestrainVar", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
cn.com.easy.xbuilder.service.SQLVaildata = {
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata", "equals",
				parameters), callback);
	},
	addTmpDataSourceXml : function(dataSourceName, sql, uid, name, reportId,
			callback) {
		var parameters = {
			dataSourceName : dataSourceName,
			sql : sql,
			uid : uid,
			name : name,
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata",
				"addTmpDataSourceXml", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(
				cn.com.easy.util.wrapEasyParameter(
						"cn.com.easy.xbuilder.service.SQLVaildata", "wait",
						parameters), callback);
	},
	thirdSqlExeucte : function(dataSourceName, sql, page, jsonString, callback) {
		var parameters = {
			dataSourceName : dataSourceName,
			sql : sql,
			page : page,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata", "thirdSqlExeucte",
				parameters), callback);
	},
	getSqlKenizer : function(sql, callback) {
		var parameters = {
			sql : sql
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata", "getSqlKenizer",
				parameters), callback);
	},
	addDataSourceXml : function(tmp, id, dataSourceName, sql, reference, name,
			reportId, callback) {
		var parameters = {
			tmp : tmp,
			id : id,
			dataSourceName : dataSourceName,
			sql : sql,
			reference : reference,
			name : name,
			reportId : reportId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata", "addDataSourceXml",
				parameters), callback);
	},
	getMeasuresInFormula : function(formula, callback) {
		var parameters = {
			formula : formula
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata",
				"getMeasuresInFormula", parameters), callback);
	},
	analysisSql : function(formula, paramMap, callback) {
		var parameters = {
			formula : formula,
			paramMap : paramMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata", "analysisSql",
				parameters), callback);
	},
	getMeasuresInFormulaByFirst : function(formula, callback) {
		var parameters = {
			formula : formula
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata",
				"getMeasuresInFormulaByFirst", parameters), callback);
	},
	replaceWhere : function(sql, jsonString, callback) {
		var parameters = {
			sql : sql,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata", "replaceWhere",
				parameters), callback);
	},
	firstSqlVail : function(dataSourceName, sql, callback) {
		var parameters = {
			dataSourceName : dataSourceName,
			sql : sql
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata", "firstSqlVail",
				parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata", "toString",
				parameters), callback);
	},
	replaceBlank : function(sql, callback) {
		var parameters = {
			sql : sql
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata", "replaceBlank",
				parameters), callback);
	},
	insReportSql : function(reportMap, callback) {
		var parameters = {
			reportMap : reportMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata", "insReportSql",
				parameters), callback);
	},
	secondSqlVail : function(dataSourceName, sql, callback) {
		var parameters = {
			dataSourceName : dataSourceName,
			sql : sql
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.SQLVaildata", "secondSqlVail",
				parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
cn.com.easy.xbuilder.service.XComponentService = {
	getFirstComponent : function(viewId, containerId, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"getFirstComponent", parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"readFromXmlByViewId", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService", "wait",
				parameters), callback);
	},
	removeKpiRow : function(paramMap, callback) {
		var parameters = {
			paramMap : paramMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"removeKpiRow", parameters), callback);
	},
	getContainerById : function(viewObj, containerId, callback) {
		var parameters = {
			viewObj : viewObj,
			containerId : containerId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"getContainerById", parameters), callback);
	},
	setContainerType : function(viewId, containerId, containerType, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId,
			containerType : containerType
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"setContainerType", parameters), callback);
	},
	removeCacheComment : function(viewId, componentId, callback) {
		var parameters = {
			viewId : viewId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"removeCacheComment", parameters), callback);
	},
	getComponentList : function(viewObj, containerId, callback) {
		var parameters = {
			viewObj : viewObj,
			containerId : containerId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"getComponentList", parameters), callback);
	},
	addKpiStoreCol : function(paramMap, callback) {
		var parameters = {
			paramMap : paramMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"addKpiStoreCol", parameters), callback);
	},
	saveContainerProperty : function(viewId, containerId, jsonString, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId,
			jsonString : jsonString
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"saveContainerProperty", parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"readFromXml", parameters), callback);
	},
	addComponent : function(viewId, containerId, component, isPop, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId,
			component : component,
			isPop : isPop
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"addComponent", parameters), callback);
	},
	addComponentWithoutType : function(viewId, containerId, param, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId,
			param : param
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"addComponentWithoutType", parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"readFromXmlNoCatch", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService", "equals",
				parameters), callback);
	},
	getContainerAllInfoById : function(viewId, containerId, compId, check,
			callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId,
			compId : compId,
			check : check
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"getContainerAllInfoById", parameters), callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"saveToXmlByObj", parameters), callback);
	},
	parseComponent : function(param, callback) {
		var parameters = {
			param : param
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"parseComponent", parameters), callback);
	},
	removeComponent : function(viewId, componentId, callback) {
		var parameters = {
			viewId : viewId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"removeComponent", parameters), callback);
	},
	replaceComponent : function(viewId, containerId, component, replaceType,
			callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId,
			component : component,
			replaceType : replaceType
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"replaceComponent", parameters), callback);
	},
	checkComponent : function(param, callback) {
		var parameters = {
			param : param
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"checkComponent", parameters), callback);
	},
	clearContainer : function(viewId, containerId, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"clearContainer", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService", "toString",
				parameters), callback);
	},
	checkComponentExist : function(viewId, containerId, componentId, callback) {
		var parameters = {
			viewId : viewId,
			containerId : containerId,
			componentId : componentId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XComponentService",
				"checkComponentExist", parameters), callback);
	}
};
xbuilderEditService = {
	getQueryString : function(viewId, dimsionId, callback) {
		var parameters = {
			viewId : viewId,
			dimsionId : dimsionId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"xbuilderEditService", "getQueryString", parameters), callback);
	},
	getDimsions : function(viewId, callback) {
		var parameters = {
			viewId : viewId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"xbuilderEditService", "getDimsions", parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"xbuilderEditService", "readFromXmlNoCatch", parameters),
				callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"xbuilderEditService", "equals", parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"xbuilderEditService", "readFromXmlByViewId", parameters),
				callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"xbuilderEditService", "saveToXmlByObj", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"xbuilderEditService", "wait", parameters), callback);
	},
	main : function(args, callback) {
		var parameters = {
			args : args
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"xbuilderEditService", "main", parameters), callback);
	},
	getComponentList : function(viewId, callback) {
		var parameters = {
			viewId : viewId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"xbuilderEditService", "getComponentList", parameters),
				callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"xbuilderEditService", "readFromXml", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"xbuilderEditService", "toString", parameters), callback);
	},
	getReport : function(viewId, callback) {
		var parameters = {
			viewId : viewId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"xbuilderEditService", "getReport", parameters), callback);
	}
};
if (cn == null)
	var cn = {};
if (cn.com == null)
	cn.com = {};
if (cn.com.easy == null)
	cn.com.easy = {};
if (cn.com.easy.xbuilder == null)
	cn.com.easy.xbuilder = {};
if (cn.com.easy.xbuilder.service == null)
	cn.com.easy.xbuilder.service = {};
cn.com.easy.xbuilder.service.XService = {
	setView : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(
				cn.com.easy.util.wrapEasyParameter(
						"cn.com.easy.xbuilder.service.XService", "setView",
						parameters), callback);
	},
	readFromXmlByViewId : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "readFromXmlByViewId",
				parameters), callback);
	},
	removeComponentsAndDimsions : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService",
				"removeComponentsAndDimsions", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "wait", parameters),
				callback);
	},
	getCubeId : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "getCubeId",
				parameters), callback);
	},
	addLayoutLi : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "addLayoutLi",
				parameters), callback);
	},
	setLHtml : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util
				.wrapEasyParameter("cn.com.easy.xbuilder.service.XService",
						"setLHtml", parameters), callback);
	},
	setNameSave : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "setNameSave",
				parameters), callback);
	},
	readFromXml : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "readFromXml",
				parameters), callback);
	},
	setTheme : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util
				.wrapEasyParameter("cn.com.easy.xbuilder.service.XService",
						"setTheme", parameters), callback);
	},
	removeLayoutLi : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "removeLayoutLi",
				parameters), callback);
	},
	setCubeId : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "setCubeId",
				parameters), callback);
	},
	hasEvents : function(xid, contid, compid, callback) {
		var parameters = {
			xid : xid,
			contid : contid,
			compid : compid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "hasEvents",
				parameters), callback);
	},
	seacherComp : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "seacherComp",
				parameters), callback);
	},
	readFromXmlNoCatch : function(ViewId, isFormal, callback) {
		var parameters = {
			ViewId : ViewId,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "readFromXmlNoCatch",
				parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "equals", parameters),
				callback);
	},
	saveToXmlByObj : function(View, isFormal, callback) {
		var parameters = {
			View : View,
			isFormal : isFormal
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "saveToXmlByObj",
				parameters), callback);
	},
	setModifyUser : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "setModifyUser",
				parameters), callback);
	},
	setLType : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util
				.wrapEasyParameter("cn.com.easy.xbuilder.service.XService",
						"setLType", parameters), callback);
	},
	addLayoutMultiLi : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "addLayoutMultiLi",
				parameters), callback);
	},
	getComponentsListSize : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService",
				"getComponentsListSize", parameters), callback);
	},
	removeAllLayoutLi : function(xid, callback) {
		var parameters = {
			xid : xid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"cn.com.easy.xbuilder.service.XService", "removeAllLayoutLi",
				parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util
				.wrapEasyParameter("cn.com.easy.xbuilder.service.XService",
						"toString", parameters), callback);
	},
	setName : function(data, callback) {
		var parameters = {
			data : data
		};
		cn.com.easy.util.invokeEasyService(
				cn.com.easy.util.wrapEasyParameter(
						"cn.com.easy.xbuilder.service.XService", "setName",
						parameters), callback);
	}
};
tableEditorService = {
	getDataSource : function(dataSourceName, callback) {
		var parameters = {
			dataSourceName : dataSourceName
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableEditorService", "getDataSource", parameters), callback);
	},
	getWhereSql : function(paramObjList, callback) {
		var parameters = {
			paramObjList : paramObjList
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableEditorService", "getWhereSql", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableEditorService", "equals", parameters), callback);
	},
	getTableData : function(paramMap, callback) {
		var parameters = {
			paramMap : paramMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableEditorService", "getTableData", parameters), callback);
	},
	getHistoryExcelList : function(tid, callback) {
		var parameters = {
			tid : tid
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableEditorService", "getHistoryExcelList", parameters),
				callback);
	},
	deleteHistoryExcel : function(excelId, callback) {
		var parameters = {
			excelId : excelId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableEditorService", "deleteHistoryExcel", parameters),
				callback);
	},
	getColumnInfo : function(datasourceName, tableName, owner, callback) {
		var parameters = {
			datasourceName : datasourceName,
			tableName : tableName,
			owner : owner
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableEditorService", "getColumnInfo", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableEditorService", "wait", parameters), callback);
	},
	getExcelSql : function(paramMap, callback) {
		var parameters = {
			paramMap : paramMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableEditorService", "getExcelSql", parameters), callback);
	},
	getUnApprovalData : function(paramMap, callback) {
		var parameters = {
			paramMap : paramMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableEditorService", "getUnApprovalData", parameters),
				callback);
	},
	getTableColumns : function(datasourceName, tableName, owner, callback) {
		var parameters = {
			datasourceName : datasourceName,
			tableName : tableName,
			owner : owner
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableEditorService", "getTableColumns", parameters), callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableEditorService", "toString", parameters), callback);
	}
};
tableService = {
	getTable : function(extds, owner, tablename, callback) {
		var parameters = {
			extds : extds,
			owner : owner,
			tablename : tablename
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "getTable", parameters), callback);
	},
	saveFileTable : function(map, callback) {
		var parameters = {
			map : map
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "saveFileTable", parameters), callback);
	},
	insertAuthTableLog : function(paramMap, callback) {
		var parameters = {
			paramMap : paramMap
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "insertAuthTableLog", parameters), callback);
	},
	wait : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "wait", parameters), callback);
	},
	insertAuthTable : function(map, callback) {
		var parameters = {
			map : map
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "insertAuthTable", parameters), callback);
	},
	saveTable : function(map, callback) {
		var parameters = {
			map : map
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "saveTable", parameters), callback);
	},
	dragTree : function(targetId, soruceId, callback) {
		var parameters = {
			targetId : targetId,
			soruceId : soruceId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "dragTree", parameters), callback);
	},
	updateFileAuthTableById : function(map, callback) {
		var parameters = {
			map : map
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "updateFileAuthTableById", parameters),
				callback);
	},
	deleteAuthTableByPid : function(id, callback) {
		var parameters = {
			id : id
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "deleteAuthTableByPid", parameters), callback);
	},
	insAuthTree : function(param, callback) {
		var parameters = {
			param : param
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "insAuthTree", parameters), callback);
	},
	equals : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "equals", parameters), callback);
	},
	OnlyFileName : function(name, callback) {
		var parameters = {
			name : name
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "OnlyFileName", parameters), callback);
	},
	insAuthTreeById : function(tableId, userId, callback) {
		var parameters = {
			tableId : tableId,
			userId : userId
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "insAuthTreeById", parameters), callback);
	},
	delAuthTreeAll : function(param, callback) {
		var parameters = {
			param : param
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "delAuthTreeAll", parameters), callback);
	},
	deleteAuthTableById : function(id, callback) {
		var parameters = {
			id : id
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "deleteAuthTableById", parameters), callback);
	},
	getTableColumn : function(map, callback) {
		var parameters = {
			map : map
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "getTableColumn", parameters), callback);
	},
	updateTableAuthTableById : function(map, callback) {
		var parameters = {
			map : map
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "updateTableAuthTableById", parameters),
				callback);
	},
	toString : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "toString", parameters), callback);
	},
	getExtdsDataSource : function(callback) {
		var parameters = {};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "getExtdsDataSource", parameters), callback);
	},
	delAuthTreeByTableId : function(tableList, callback) {
		var parameters = {
			tableList : tableList
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "delAuthTreeByTableId", parameters), callback);
	},
	selectAuthTableById : function(id, callback) {
		var parameters = {
			id : id
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "selectAuthTableById", parameters), callback);
	},
	delDirTable : function(id, callback) {
		var parameters = {
			id : id
		};
		cn.com.easy.util.invokeEasyService(cn.com.easy.util.wrapEasyParameter(
				"tableService", "delDirTable", parameters), callback);
	}
};
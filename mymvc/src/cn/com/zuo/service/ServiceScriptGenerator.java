package cn.com.zuo.service;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import cn.com.zuo.mvc.Context;

public class ServiceScriptGenerator {
	public static String genServiceScript() {
		StringBuffer script = new StringBuffer();
		script.append("if (cn == null) var cn = {};");
		script.append("if (cn.com == null) cn.com = {};");
		script.append("if (cn.com.zuo == null) cn.com.zuo = {};");
		script.append("cn.com.zuo.util = {");
		script.append("invokeService: function(data, callback) {");
		script.append("return $.ajax({");
		script.append("type: \"post\",");
		script.append("url: \"" + Context.contextPath + "/cn/com/zuo/service/invokeService.action\",");
		script.append(" data: data,");
		script.append("success: function(data) {");
		script.append("callback(data.returnValueData, data.returnValueException);");
		script.append("},");
		script.append("dataType: \"json\"");
		script.append(" });");
		script.append("},");
		script.append(" wrapParameter: function(serviceName, methodName, parameters) {");
		script.append("var paramObjWrapper = {};");
		script.append("paramObjWrapper.serviceName = serviceName;");
		script.append("paramObjWrapper.serviceMethod = methodName;");
		script.append(" paramObjWrapper.parameters = $.toJSON(parameters);");
		script.append(" return paramObjWrapper;");
		script.append("}");
		script.append("};");
		Map<String, List<ServiceMapping>> serviceMappings = Context.getServiceMappings();
		Iterator<Entry<String, List<ServiceMapping>>> serviceIterator = serviceMappings.entrySet().iterator();
		Entry<String, List<ServiceMapping>> serviceEntry;
		String serviceName = "";
		List<ServiceMapping> serviceMethodList;
		List<Map<String,String>> methodParamNames;
		while (serviceIterator.hasNext()) {
			serviceEntry = serviceIterator.next();
			serviceName = serviceEntry.getKey();
			serviceMethodList = serviceEntry.getValue();
			script.append(serviceName + "={");
			if (serviceMethodList != null && serviceMethodList.size() > 0) {
				for (ServiceMapping serviceMapping : serviceMethodList) {
					script.append(serviceMapping.getServiceMethod() + ":function(");
					methodParamNames = serviceMapping.getServiceParameters();
					if (methodParamNames != null && methodParamNames.size()> 0)
						for (Map<String,String> paramMap : methodParamNames) {
							script.append(paramMap.get("paramName") + ",");
						}
					script.append("callback){");
					script.append("var parameters = {};");
					for (Map<String,String> paramMap : methodParamNames) {
						script.append("parameters." + paramMap.get("paramName") + "=" + paramMap.get("paramName") + ";");
					}
					script.append("cn.com.zuo.util.invokeService(cn.com.zuo.util.wrapParameter(\"" + serviceName + "\", \"" + serviceMapping.getServiceMethod() + "\", parameters), callback);},");
				}
			}
		}
		if(script.toString().endsWith(",")){
			script = new StringBuffer(script.substring(0, script.lastIndexOf(",")));
		}
		script.append("}");
		return script.toString();
	}
}

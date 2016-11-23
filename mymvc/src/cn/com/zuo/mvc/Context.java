package cn.com.zuo.mvc;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.zuo.service.ServiceMapping;

public class Context {
	public static String contextPath;
	private static Map<String, ActionMapping> actionMappings = new HashMap<String,ActionMapping>();
	private static Map<String, List<ServiceMapping>> serviceMappings = new HashMap<String,List<ServiceMapping>>();

	public static String getContextPath() {
		return contextPath;
	}

	public static void setContextPath(String contextPath) {
		Context.contextPath = contextPath;
	}

	public static Map<String, ActionMapping> getActionMappings() {
		return actionMappings;
	}

	public static void setActionMappings(Map<String, ActionMapping> actionMappings) {
		Context.actionMappings = actionMappings;
	}

	public static Map<String, List<ServiceMapping>> getServiceMappings() {
		return serviceMappings;
	}

	public static void setServiceMappings(Map<String, List<ServiceMapping>> serviceMappings) {
		Context.serviceMappings = serviceMappings;
	}
}

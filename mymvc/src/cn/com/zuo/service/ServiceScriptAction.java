package cn.com.zuo.service;

import java.io.PrintWriter;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cn.com.easy.taglib.function.Functions;
import cn.com.zuo.annotation.Action;
import cn.com.zuo.annotation.Controller;
import cn.com.zuo.mvc.ActionManager;
import cn.com.zuo.mvc.BaseAction;
import cn.com.zuo.mvc.Context;
import cn.com.zuo.utils.JsonUtil;

import com.google.gson.reflect.TypeToken;

@Controller
public class ServiceScriptAction extends BaseAction {
	@Action("service/getServiceScript.action")
	public void getServiceScript(HttpServletRequest request, HttpServletResponse response) {
		PrintWriter out = getUTF8Writer(response);
		String script = ServiceScriptGenerator.genServiceScript();
		if(out!=null){
			out.print(script);
		}
	}
	@Action("cn/com/zuo/service/invokeService.action")
	public void invokeService(HttpServletRequest request, HttpServletResponse response) {
		String serviceName = request.getParameter("serviceName");
		String serviceMethod = request.getParameter("serviceMethod");
		String parameters = request.getParameter("parameters");
//		Map paramMap = JsonUtil.json2java(parameters,Map.class);
		Map paramMap = (Map)Functions.json2java(parameters);
		System.out.println("方法参数========>"+paramMap.toString());
		List<ServiceMapping> serviceList = Context.getServiceMappings().get(serviceName);
		Class<?> clazz = ActionManager.getAction(serviceList.get(0).getServiceClass());
		Method[] methods = clazz.getMethods();
		Entry<String,Object> pEnty;
		int pIndex = 0;
		Map<String,Object> resultMap = new HashMap<String,Object>();
		String dataType = "";
		for(Method method : methods){
			if(method.getName().equals(serviceMethod)){
				Object[] paramObjects = new Object[paramMap.size()];
				Iterator<Entry<String,Object>> pIter = paramMap.entrySet().iterator();
				List<Map<String,String>> params=null;
				for(ServiceMapping mapping : serviceList){
					if(mapping.getServiceMethod().equals(serviceMethod)){
						params = mapping.getServiceParameters();
					}
				}
				while(pIter.hasNext()){
					pEnty = pIter.next();
					paramObjects[pIndex++] = pEnty.getValue();
				}
				try {
					Object resultObj = method.invoke(clazz.newInstance(), paramObjects);
					resultMap.put("returnValueData", resultObj);
				} catch (IllegalArgumentException e) {
					e.printStackTrace();
					resultMap.put("returnValueException", e.getMessage());
				} catch (IllegalAccessException e) {
					e.printStackTrace();
					resultMap.put("returnValueException", e.getMessage());
				} catch (InvocationTargetException e) {
					e.printStackTrace();
					resultMap.put("returnValueException", e.getMessage());
				} catch (InstantiationException e) {
					e.printStackTrace();
					resultMap.put("returnValueException", e.getMessage());
				}
				break;
			}
		}
		PrintWriter out = getUTF8Writer(response);
		if(out!=null){
			out.print(JsonUtil.java2json(resultMap));
		}
	}
}

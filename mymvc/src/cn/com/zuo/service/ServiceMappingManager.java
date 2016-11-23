package cn.com.zuo.service;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import cn.com.zuo.annotation.Service;
import cn.com.zuo.mvc.Context;
import cn.com.zuo.utils.ClassUtil;
import cn.com.zuo.utils.LogUtil;

import com.thoughtworks.paranamer.BytecodeReadingParanamer;
import com.thoughtworks.paranamer.Paranamer;

public class ServiceMappingManager {

	public ServiceMappingManager(String[] packages) {
		for(String tempStr : packages){
			initAnnotationConfigActions(tempStr);
			LogUtil.debug("包"+tempStr+"扫描完毕!");
		}
	}
	private void initAnnotationConfigActions(String packageName) {
		Set<Class<?>> classes = ClassUtil.getClasses(packageName);
		Iterator<Class<?>> classIter = classes.iterator();
		Class<?> clazz;
		Method[] methodArr;
		ServiceMapping actionMapping;
		List<ServiceMapping> serviceMappingList;
		String[] paramNames;
		Map<String,String> paramMap=null;
		while (classIter.hasNext()) {
			clazz = classIter.next();
			if(clazz.isAnnotationPresent(Service.class)){
				methodArr = clazz.getDeclaredMethods();
				serviceMappingList = new ArrayList<ServiceMapping>();
				for (Method m : methodArr) {
					actionMapping = new ServiceMapping();
					actionMapping.setServiceClass(clazz.getName());
					actionMapping.setServiceMethod(m.getName());
					actionMapping.setServiceParameters(new ArrayList<Map<String,String>>());
					final Paranamer methodReader = new BytecodeReadingParanamer();
					paramNames = methodReader.lookupParameterNames(m, false);
					Class<?>[] paramTypes = m.getParameterTypes();
					for(int i=0;i<paramNames.length;i++){
						paramMap = new HashMap<String,String>();
						paramMap.put("paramName",paramNames[i]);
						paramMap.put("paramType",paramTypes[i].getSimpleName());
						actionMapping.getServiceParameters().add(paramMap);
					}
					serviceMappingList.add(actionMapping);
				}	
				Context.getServiceMappings().put(clazz.getAnnotation(Service.class).value(), serviceMappingList);
			}
		}
	}
	
}

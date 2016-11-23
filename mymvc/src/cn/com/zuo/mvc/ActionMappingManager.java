package cn.com.zuo.mvc;

import java.io.InputStream;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import cn.com.zuo.annotation.Action;
import cn.com.zuo.annotation.Controller;
import cn.com.zuo.utils.ClassUtil;
import cn.com.zuo.utils.LogUtil;

public class ActionMappingManager {

	public ActionMappingManager(String[] xmlsOrPackages,String configMode) {
		if("xml".equals(configMode)){
			for(String tempStr : xmlsOrPackages){
				initXmlConfigActions(tempStr);
				LogUtil.debug("配置文件"+tempStr+"初始化完毕!");
			}
		}else if("annotation".equals(configMode)){
			for(String tempStr : xmlsOrPackages){
				initAnnotationConfigActions(tempStr.trim());
				LogUtil.debug("包"+tempStr+"扫描完毕!");
			}
		}
	}

	@SuppressWarnings("rawtypes")
	private void initXmlConfigActions(String configFileName) {
		try {
			if(configFileName==null||configFileName.isEmpty()){
				throw new Exception("配置文件名为空！");
			}
			InputStream is = this.getClass().getResourceAsStream("/"+configFileName);
			Document doc = (new SAXReader()).read(is);
			Element root = doc.getRootElement();
			Iterator actionIter = root.element("actions").elementIterator();
			Element actionElement;
			Element resultElement;
			Iterator resultIter;
			while(actionIter.hasNext()){
				actionElement = (Element)actionIter.next();
				ActionMapping actionMapping = new ActionMapping();
				actionMapping.setName(actionElement.attributeValue("name"));
				actionMapping.setClazz(actionElement.attributeValue("class"));
				actionMapping.setMethod(actionElement.attributeValue("method"));
				resultIter = actionElement.elementIterator();
				while(resultIter.hasNext()){
					resultElement = (Element)resultIter.next();
					actionMapping.addResult(resultElement.attributeValue("name"),resultElement.getText());
				}
				Context.getActionMappings().put(actionElement.attributeValue("name"), actionMapping);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private void initAnnotationConfigActions(String packageName) {
		Set<Class<?>> classes = ClassUtil.getClasses(packageName);
		Iterator<Class<?>> classIter = classes.iterator();
		Class<?> clazz;
		Method[] methodArr;
		String actionName;
		ActionMapping actionMapping;
		while (classIter.hasNext()) {
			clazz = classIter.next();
			if(clazz.isAnnotationPresent(Controller.class)){
				methodArr = clazz.getDeclaredMethods();
				for (Method m : methodArr) {
					if (m.isAnnotationPresent(Action.class)) {
						actionName = m.getAnnotation(Action.class).value();
						actionName = actionName.substring(0, actionName.lastIndexOf("."));
						actionMapping = new ActionMapping();
						actionMapping.setName(actionName);
						actionMapping.setClazz(clazz.getName());
						actionMapping.setMethod(m.getName());
						Context.getActionMappings().put(actionName, actionMapping);
					}
				}	
			}
		}
	}
	public ActionMapping getActionMapping(String actionName) {
		return Context.getActionMappings().get(actionName);
	}
}

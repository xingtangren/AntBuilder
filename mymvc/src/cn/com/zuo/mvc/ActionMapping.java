package cn.com.zuo.mvc;

import java.util.HashMap;
import java.util.Map;

public class ActionMapping {
	private String name;
	private String clazz;
	private String method;
	private Map<String, String> resultMap = new HashMap<String, String>();

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getClazz() {
		return clazz;
	}

	public void setClazz(String clazz) {
		this.clazz = clazz;
	}

	public Map<String, String> getResultMap() {
		return resultMap;
	}

	public void addResult(String resultName, String resultPath) {
		this.resultMap.put(resultName, resultPath);
	}

	public String getMethod() {
		return method;
	}

	public void setMethod(String method) {
		this.method = method;
	}
}

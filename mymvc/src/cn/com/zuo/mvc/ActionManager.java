package cn.com.zuo.mvc;

public class ActionManager {
	public static Class<?> getAction(String className){
		Class<?> clazz = null;
		if (className != null && !className.isEmpty()) {
			try {
				clazz = Thread.currentThread().getContextClassLoader().loadClass(className);
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			}
		}
		if (clazz == null) {
			try {
				clazz = Class.forName(className);
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			}
		}
		return clazz;
	}
}

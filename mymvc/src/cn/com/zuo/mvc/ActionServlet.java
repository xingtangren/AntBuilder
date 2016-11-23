package cn.com.zuo.mvc;

import java.io.IOException;
import java.lang.reflect.Method;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cn.com.zuo.service.ServiceMappingManager;
import cn.com.zuo.utils.JsonUtil;
import cn.com.zuo.utils.LogUtil;

public class ActionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private ActionMappingManager actionMappingManager = null;
	private String configMode = null;

	@Override
	public void init(ServletConfig config) throws ServletException {
		System.out.println("**************servlet启动了**************");
		initControllers(config);
		initServices(config);
	}

	/**
	 * 初始化Controller类
	 * @param config
	 */
	private void initControllers(ServletConfig config) {
		configMode = config.getInitParameter("configMode");
		String[] xmlsOrPackages = null;
		if ("xml".equals(configMode)) {
			xmlsOrPackages = config.getInitParameter("configFile").split(";");
		} else if ("annotation".equals(configMode)) {
			xmlsOrPackages = config.getInitParameter("autoScanPackage").split(";");
		}
		if (xmlsOrPackages != null) {
			actionMappingManager = new ActionMappingManager(xmlsOrPackages, configMode);
		} else {
			LogUtil.error("配置文件错误，请检查web.xml文件配置！");
		}
	}
	
	/**
	 * 初始化Controller类
	 * @param config
	 */
	private void initServices(ServletConfig config) {
		String[] packages = config.getInitParameter("autoScanPackage").split(";");;
		if (packages != null) {
			new ServiceMappingManager(packages);
		} else {
			LogUtil.error("配置文件错误，请检查web.xml文件配置！");
		}
		System.out.println(JsonUtil.java2json(Context.getServiceMappings()));
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String uri = request.getRequestURI();
		String contextPath = request.getContextPath();
		Context.contextPath = contextPath;
		String actionName = uri.substring(contextPath.length() + 1, uri.lastIndexOf("."));
		String targetUrl = "";
		ActionMapping mapping = actionMappingManager.getActionMapping(actionName);
		if (mapping == null) {
			response.sendError(404, "没有找到：" + actionName);
			return;
		}
		String className = mapping.getClazz();
		Class<?> clazz = ActionManager.getAction(className);
		String methodName = mapping.getMethod();
		// 配置方式为xml方式
		if ("xml".equals(configMode)) {
			if (methodName == null || methodName.isEmpty()) {
				methodName = "execute";
			}
			try {
				Method method = clazz.getMethod(methodName, HttpServletRequest.class, HttpServletResponse.class);
				targetUrl = mapping.getResultMap().get(String.valueOf(method.invoke(clazz.newInstance(), request, response)));
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if ("annotation".equals(configMode)) {// 配置方式为注解方式
			if (methodName != null && !methodName.isEmpty()) {
				try {
					Method method = clazz.getMethod(methodName, HttpServletRequest.class, HttpServletResponse.class);
					targetUrl = String.valueOf(method.invoke(clazz.newInstance(), request, response));
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		if (!targetUrl.equals("null") && !targetUrl.isEmpty() ) {
			request.getRequestDispatcher(targetUrl).forward(request, response);
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}

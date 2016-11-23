package cn.com.zuo.mvc;

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import cn.com.zuo.exception.ParseObjectException;

public abstract class BaseAction implements IAction{

	@Override
	public String execute(HttpServletRequest request,HttpServletResponse response) throws Exception {
		return null;
	}

	public <T> T parseObject(HttpServletRequest request,Class<?> clazz) throws ParseObjectException{
		Object bean = null;
		try{
			Enumeration<String> enumeration = request.getParameterNames();
			Field[] fieldArr = clazz.getDeclaredFields();
			bean = clazz.newInstance();
			String paramName="";
			while(enumeration.hasMoreElements()){
				paramName = enumeration.nextElement();
				for(Field field : fieldArr){
					if(field.getName().equals(paramName)){
						BeanUtils.copyProperty(bean, field.getName(), request.getParameter(paramName));
					}
				}
			}
		}catch(Exception e){
			e.printStackTrace();
			throw new ParseObjectException("request转"+clazz.getSimpleName()+"时出现异常");
		}
		return (T)bean;
	}
	
	public void setResponseUTF8(HttpServletResponse response){
		response.setHeader("Charset", "UTF-8");
		response.setContentType("text/html;charset=UTF-8");
	}
	
	public PrintWriter getUTF8Writer(HttpServletResponse response){
		setResponseUTF8(response);
		PrintWriter out = null;
		try {
			out = response.getWriter();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return out;
	}
}

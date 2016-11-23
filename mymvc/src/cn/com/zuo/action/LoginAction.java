package cn.com.zuo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cn.com.zuo.mvc.BaseAction;
import cn.com.zuo.mvc.IAction;
import cn.com.zuo.utils.LogUtil;

public class LoginAction extends BaseAction {

	@Override
	public String execute(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		request.setAttribute("helloMsg", "执行了execute方法");
		return SUCCESS;
	}

	public String hello(HttpServletRequest request,HttpServletResponse response){
		request.setAttribute("helloMsg", "执行了hello方法");
		return "hello";
	}
}

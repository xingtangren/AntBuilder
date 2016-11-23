package cn.com.zuo.mvc;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface IAction {
	public String INPUT = "input";
	public String SUCCESS = "success";
	public String ERROR = "error";
	public String execute(HttpServletRequest request,HttpServletResponse response) throws Exception;
}

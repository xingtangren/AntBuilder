package cn.com.zuo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import cn.com.zuo.annotation.Action;
import cn.com.zuo.annotation.Controller;
import cn.com.zuo.bean.User;
import cn.com.zuo.exception.ParseObjectException;
import cn.com.zuo.mvc.BaseAction;

@Controller
public class RegisterAction extends BaseAction {
	@Action("register.action")
	public String register(HttpServletRequest request, HttpServletResponse response) {
		User user = null;
		try {
			user = parseObject(request, User.class);
			request.setAttribute("userInfo", user);
		} catch (ParseObjectException e) {
			request.setAttribute("msg", e.getMessage());
			e.printStackTrace();
		}
		return "WEB-INF/pages/regSuccess.jsp";
	}
}

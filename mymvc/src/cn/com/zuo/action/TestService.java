package cn.com.zuo.action;

import cn.com.zuo.annotation.Service;

@Service("testService")
public class TestService {
	public String save(String id, String name,double age) {
		return "hello "+age;
	}

	public boolean delete(String id) {
		return true;
	}
}

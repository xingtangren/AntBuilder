package cn.com.zuo.bean;

public class User {
	private String name;
	private String ip;
	private int age;

	public User() {

	}

	public User(String name, String ip,int age) {
		this.name = name;
		this.ip = ip;
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
}

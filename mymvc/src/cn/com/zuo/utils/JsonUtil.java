package cn.com.zuo.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class JsonUtil {
	
	private static Gson gson = new Gson();
    
	/**
	 * java对象转json字符串
	 * @param obj
	 * @return
	 */
	public static String java2json(Object obj) {
		return gson.toJson(obj);
	}

	/**
	 * json字符串转java对象
	 * @param jsonStr
	 * @return
	 */
	public static Object json2java(String jsonStr) {
		return gson.fromJson(jsonStr, Object.class);
	}

	/**
	 * json字符串转泛型类型的对象
	 * @param jsonStr
	 * @param t
	 * @return
	 */
	public static <T> T json2java(String jsonStr, Class<T> t) {
		return gson.fromJson(jsonStr, t);
	}

	/**
	 * json字符串转泛型类型的对象,如List<T>,Map<T,T>
	 * @param jsonStr
	 * @param token
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static <T> T json2java(String jsonStr, TypeToken<T> token) {
		if(jsonStr==null||jsonStr.isEmpty()){
			return (T) jsonStr;
		}
		return gson.fromJson(jsonStr, token.getType());
	}
	
	public static void main(String[] args) {
//		People people = new People("左斌","30","男");
//		System.out.println(JsonUtil.java2json(people));
//		
//		Map<String,String> map = new HashMap<String,String>();
//		map.put("name", "左斌");
//		map.put("age", "30");
//		map.put("sex", "男");
//		System.out.println(JsonUtil.java2json(map));
//		
//		List<People> peopleList = new ArrayList<People>();
//		peopleList.add(people);
//		System.out.println(JsonUtil.java2json(peopleList));
		
		String json = "{\"name\":\"左斌\",\"age\":\"30\",\"sex\":\"男\"}";
		System.out.println(JsonUtil.json2java(json));
		
//		System.out.println(JsonUtil.json2java(json,People.class));
//		
//		String jsonStr = "[{\"name\":\"左斌\",\"age\":\"30\",\"sex\":\"男\"},{\"name\":\"小李\",\"age\":\"31\",\"sex\":\"男\"}]";
//		List<People> pList = JsonUtil.json2java(jsonStr, new TypeToken<List<People>>(){});
//		System.out.println(pList.size());
//		Map<String,String> peopleMap = JsonUtil.json2java(json, new TypeToken<Map<String,String>>(){});
//		System.out.println("peopleMap===>"+peopleMap);
	}
}

class People{
	private String name;
	private String age;
	private String sex;
	public People(String name,String age,String sex){
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
}
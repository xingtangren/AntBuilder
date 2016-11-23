package cn.com.zuo.test;

import cn.com.zuo.test.FruitColor.Color;

public class Apple {
	@FruitName("苹果")
	private String appleName;
	@FruitColor(fruitColor=Color.GREEN)
	private String appleColor;
	@FruitProvider(id=1110,providerName="沃尔玛超市",address="高新区前进大街与卫星路交汇")
	private String appleProvider;

	public String getAppleName() {
		return appleName;
	}

	public void setAppleName(String appleName) {
		this.appleName = appleName;
	}

	public String getAppleColor() {
		return appleColor;
	}

	public void setAppleColor(String appleColor) {
		this.appleColor = appleColor;
	}

	public String getAppleProvider() {
		return appleProvider;
	}

	public void setAppleProvider(String appleProvider) {
		this.appleProvider = appleProvider;
	}
}

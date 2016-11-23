package cn.com.zuo.test;

import java.lang.reflect.Field;

public class FruitRun {
	public static void main(String[] args) {
           Field[] fieldArr = Apple.class.getDeclaredFields();
           for(Field field : fieldArr){
        	   if(field.isAnnotationPresent(FruitName.class)){
        		   System.out.println("水果的名称是:"+field.getAnnotation(FruitName.class).value());
        	   }
        	   if(field.isAnnotationPresent(FruitColor.class)){
        		   System.out.println("水果的颜色是:"+field.getAnnotation(FruitColor.class).fruitColor());
        	   }
        	   if(field.isAnnotationPresent(FruitProvider.class)){
        		   FruitProvider fruitProvider= (FruitProvider) field.getAnnotation(FruitProvider.class);
        		   System.out.println("供应商编号:"+fruitProvider.id());
        		   System.out.println("供应商名称："+fruitProvider.providerName());
        		   System.out.println("供应商地址:"+fruitProvider.address());
        	   }
           }
	}
}

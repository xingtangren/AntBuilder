package cn.com.zuo.test;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface FruitProvider {
	
	int id() default -1;

	String providerName() default "";

	String address() default "";
}

package cn.com.zuo.utils;

import java.io.File;
import java.io.FileFilter;
import java.io.IOException;
import java.net.JarURLConnection;
import java.net.URL;
import java.net.URLDecoder;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;

public class ClassUtil {
	/**
	 * 从包package中获取所有的Class
	 * 
	 * @param pack
	 * @return
	 */
	public static Set<Class<?>> getClasses(String pack) {
		Set<Class<?>> classes = new LinkedHashSet<Class<?>>();// 第一个class类的集合
		boolean recursive = true;// 是否循环迭代
		String packageName = pack;// 获取包的名字 并进行替换
		String packageDirName = packageName.replace('.', '/');
		Enumeration<URL> dirs;// 定义一个枚举的集合 并进行循环来处理这个目录下的things
		try {
			dirs = Thread.currentThread().getContextClassLoader().getResources(packageDirName);
			while (dirs.hasMoreElements()) {
				URL url = dirs.nextElement();
				String protocol = url.getProtocol();// 得到协议的名称
				if ("file".equals(protocol)) {// 如果是以文件的形式保存在服务器上
					String filePath = URLDecoder.decode(url.getFile(), "UTF-8");// 获取包的物理路径
					findAndAddClassesInPackageByFile(packageName, filePath,recursive, classes);// 以文件的方式扫描整个包下的文件 并添加到集合中
				} else if ("jar".equals(protocol)) {
					JarFile jar;
					try {
						jar = ((JarURLConnection) url.openConnection()).getJarFile();//获取jar
						Enumeration<JarEntry> entries = jar.entries();// 从此jar包 得到一个枚举类
						while (entries.hasMoreElements()) {// 同样的进行循环迭代
							JarEntry entry = entries.nextElement();// 获取jar里的一个实体 可以是目录 和一些jar包里的其他文件 如META-INF等文件
							String name = entry.getName();
							if (name.charAt(0) == '/') {// 如果是以/开头的
								name = name.substring(1);// 获取后面的字符串
							}
							if (name.startsWith(packageDirName)) {// 如果前半部分和定义的包名相同
								int idx = name.lastIndexOf('/');
								if (idx != -1) {// 如果以"/"结尾 是一个包
									packageName = name.substring(0, idx).replace('/', '.');// 获取包名 把"/"替换成"."
								}
								if ((idx != -1) || recursive) {// 如果可以迭代下去 并且是一个包
									if (name.endsWith(".class")&& !entry.isDirectory()) {// 如果是一个.class文件 而且不是目录
										String className = name.substring(packageName.length() + 1,name.length() - 6);// 去掉后面的".class" 获取真正的类名
										try {
											// 添加到classes
											classes.add(Class.forName(packageName + '.'+ className));
										} catch (ClassNotFoundException e) {
											e.printStackTrace();
										}
									}
								}
							}
						}
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		}

		return classes;
	}

	/**
	 * 以文件的形式来获取包下的所有Class
	 * 
	 * @param packageName
	 * @param packagePath
	 * @param recursive
	 * @param classes
	 */
	public static void findAndAddClassesInPackageByFile(String packageName,String packagePath, final boolean recursive, Set<Class<?>> classes) {
		File dir = new File(packagePath);// 获取此包的目录 建立一个File
		if (!dir.exists() || !dir.isDirectory()) {// 如果不存在或者 也不是目录就直接返回
			return;
		}
		File[] dirfiles = dir.listFiles(new FileFilter() {//如果存在 就获取包下的所有文件 包括目录
			public boolean accept(File file) {// 自定义过滤规则,如果可以循环(包含子目录) 或则是以.class结尾的文件(编译好的java类文件)
				return (recursive && file.isDirectory()) || (file.getName().endsWith(".class"));
			}
		});
		
		for (File file : dirfiles) {// 循环所有文件
			if (file.isDirectory()) {// 如果是目录 则继续扫描
				findAndAddClassesInPackageByFile(packageName + "." + file.getName(),file.getAbsolutePath(), recursive, classes);
			} else {
				String className = file.getName().substring(0,file.getName().length() - 6);// 如果是java类文件 去掉后面的.class 只留下类名
				try {
					classes.add(Thread.currentThread().getContextClassLoader().loadClass(packageName + '.' + className));
				} catch (ClassNotFoundException e) {
					e.printStackTrace();
				}
			}
		}
	}
	
	public static void main(String[] args) {
		String packageName = "cn.com.zuo";
		Set<Class<?>> classesSet = getClasses(packageName);
		Iterator<Class<?>> classIter = classesSet.iterator();
		while(classIter.hasNext()){
			Class<?> clazz = classIter.next();
			System.out.println(clazz.getName());
		}
	}
}

package com;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Writer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.dom4j.Document;
import org.dom4j.DocumentFactory;
import org.dom4j.Element;

public class AntXmlBuilder {

	/**
	 * 生成build.xml
	 * @param txtFilePath:待更新文件列表文件，txt格式
	 * @param copyToPath:文件打包路径
	 * @param buildXmlPath：build.xml文件生成路径
	 * @throws IOException
	 */
	public static void generateXml(String txtFilePath,String copyToPath,String buildXmlPath) throws IOException {
		String rootUrl = txtFilePath.substring(0, txtFilePath.lastIndexOf("/"));
		String fileName = txtFilePath.substring(txtFilePath.lastIndexOf("/")+1);
		Map<String, List<String>> map = readTxtToMap(rootUrl, fileName);
		String fileStr = "";
		Document domresult = DocumentFactory.getInstance().createDocument();
		// 创建根节点
		Element eProject = domresult.addElement("project");
		eProject.addAttribute("name", "copyFile");
		eProject.addAttribute("default", "copyFile");
		eProject.addAttribute("basedir", ".");

		Element eProperty = eProject.addElement("property"); // 第1个子节点
		eProperty.addAttribute("name", "destDir");
		eProperty.addAttribute("value", copyToPath);// 打包更新的文件到此目录

		Element eTarget = eProject.addElement("target"); // 第2个子节点
		eTarget.addAttribute("name", "init");
		Element eDelete = eTarget.addElement("delete"); // 第2个子节点的第1个子节点
		eDelete.addAttribute("dir", "${destDir}");
		Element eMkdir = eTarget.addElement("mkdir"); // 第2个子节点的第2个子节点
		eMkdir.addAttribute("dir", "${destDir}");

		Element eTarget2 = eProject.addElement("target"); // 第3个子节点
		eTarget2.addAttribute("name", "copyFile");
		eTarget2.addAttribute("depends", "init");

		Set<String> set = map.keySet();
		Iterator<String> iter = set.iterator();
		while (iter.hasNext()) {
			Element eCopy = eTarget2.addElement("copy"); // 第3个子节点的第1个子节点

			String sKey = iter.next();
			String sTemp1 = sKey.replace("/WebRoot", "");
			String sTemp = sKey.replace("/WebRoot", ".");
			if (".".equals(sTemp))
				sTemp += "/";

			eCopy.addAttribute("todir", "${destDir}/" + sTemp1);
			Element eFileset = eCopy.addElement("fileset");
			String sTemp2 = sKey.replace("/WebRoot", ".");
			if (".".equals(sTemp2))
				sTemp2 += "/";
			eFileset.addAttribute("dir", sTemp2);

			List<String> lTemp = map.get(sKey);

			if (lTemp != null && lTemp.size() > 0) {
				for (String s : lTemp) {
					Element eInclude = eFileset.addElement("include");
					eInclude.addAttribute("name", s);
				}
			}

		}

		domresult.setXMLEncoding("UTF-8");
		fileStr = domresult.asXML();

		Writer w = new FileWriter(buildXmlPath+File.separator+"build.xml");
		w.write(fileStr);
		w.close();
		System.out.println(fileStr);

	}
    /**
     * 将txt文件列表中的行读入map
     * @param rootUrl
     * @param fileName
     * @return
     */
	public static Map<String, List<String>> readTxtToMap(String rootUrl,String fileName){
		Map<String, List<String>> map = new HashMap<String, List<String>>();
		File tempFile = new File(rootUrl + File.separator + fileName);
		if(tempFile.isFile()&&tempFile.exists()){
			String tempStr;
	        BufferedReader bufread = null;
	        String encode = getTxtEncode(tempFile);
	        InputStreamReader isr = null;
	        try {
	        	isr = new InputStreamReader(new FileInputStream(tempFile),encode);
	            bufread = new BufferedReader(isr);
	            try {
	            	tempStr = bufread.readLine();
	                while (tempStr != null) {
	                	if(tempStr.trim().length()>0){
	                		tempStr = tempStr.trim();
	                		int startPoint = 0;
	                		int endPoint = tempStr.lastIndexOf("/");
	                		if(startPoint!=-1&&endPoint!=-1&&startPoint!=endPoint){
	                			String key = tempStr.substring(startPoint, endPoint);
		                		String value = tempStr.substring(endPoint + 1);
		                		List<String> valueList = map.get(key);
		                		if(valueList == null){
		                			valueList = new ArrayList<String>();
		                			valueList.add(value);
		                			map.put(key, valueList);
		                		}else{
		                			valueList.add(value);
		                		}
	                		}
	                	}
	                	tempStr = bufread.readLine();
	                }
	            } catch (IOException e) {
	                e.printStackTrace();
	            }
	        } catch (Exception e) {
	        	try {
	        		isr.close();
				} catch (Exception e2) {
				}
	        }
		}
		return map;
	}
	
	private static String getTxtEncode(File file){
    	String code="GBK";
    	InputStream inputStream = null;
    	try {
    		inputStream = new FileInputStream(file);
        	byte[] head = new byte[3];
        	inputStream.read(head);
        	if(head[0] == -1 && head[1] == -2){
        		code="UTF-16";
        	}else if(head[0] == -2 && head[1] == -1){
        		code="Unicode";
        	}else if(head[0] == -17 && head[1]== -69 && head[2] == -65){
        		code="UTF-8";
        	}
        	inputStream.close();
		} catch (Exception e) {
			try {
				inputStream.close();
			} catch (Exception e2) {
			}
			code = "GBK";
		}
		
		return code;
    }
}

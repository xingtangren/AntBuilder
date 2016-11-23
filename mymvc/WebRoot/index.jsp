<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <script type="text/javascript" src="jquery.min.js"></script>
    <script type="text/javascript" src="jquery.json-2.3.min.js"></script>
    <script type="text/javascript" src="http://localhost:8080/mymvc/service/getServiceScript.action"></script>
    <script type="text/javascript">
    	$(function(){
    		testService.save('a','zuobin',30,function(data,exception){
    			alert(data);
    		});
    	});
    </script>
  </head>
  
  <body>
        
  </body>
</html>

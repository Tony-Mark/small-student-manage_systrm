package com.xhu.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.xhu.entity.Student;
import com.xhu.jdbc.utils.JDBCUtils;
import com.xhu.jdbc.utils.RegisterSqlUtil;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Objects;

/**
 * @author TonyJUN
 */
@WebServlet(name = "select", value = "/select")
public class Select extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RegisterSqlUtil.setCode(request, response);
		PrintWriter out0 = response.getWriter();
		Connection connection = JDBCUtils.getConnection();
		ResultSet rs = null;
		/*何种方式查询*/
		String condition = request.getParameter("condition");
		/*查询条件*/
		String message = request.getParameter("message");
		/*查询语句*/
		String sqlSelectForId = "select * from student where studentId = ?";
		String sqlSelectForSex = "select * from student where sex = ?";
		/*第三方工具类(DBUtils)，实现结果集的数据取出
		* BeanHandler<T>是返回一个实体对象，BeanListHandler<T>是返回一个list实体集合，
		* MapHandler是返回不确定的单个实体对象，MapListHandler是返回不确定的list实体集合。
		*/
		BeanListHandler<Student> studentBeanHandler = new BeanListHandler<>(Student.class);
		/*JSON数组向前端传回数据*/
		JSONArray jsonArray = new JSONArray();
		/*判断以何种条件查询*/
		if (Objects.equals(condition, "studentId")){
			try {
				rs = JDBCUtils.preparedSqlForSelect(sqlSelectForId, message);
				/*studentBeanHandler.handle(rs)将结果集封装成一个对象,直接将对象转换为JSON数组*/
				// json.append(JSONObject.toJSONString(studentBeanHandler.handle(rs)));
				// RegisterSqlUtil.modelToJsonArray(studentBeanHandler.handle(rs).toArray(), jsonArray);
				RegisterSqlUtil.resultSetToJson(rs, jsonArray);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}else{
			try {
				rs = JDBCUtils.preparedSqlForSelect(sqlSelectForSex, message);
				// RegisterSqlUtil.modelToJsonArray(studentBeanHandler.handle(rs).toArray(), jsonArray);
				RegisterSqlUtil.resultSetToJson(rs, jsonArray);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		out0.println(jsonArray);
		JDBCUtils.close(rs, connection);
		out0.flush();
		out0.close();
	}
}

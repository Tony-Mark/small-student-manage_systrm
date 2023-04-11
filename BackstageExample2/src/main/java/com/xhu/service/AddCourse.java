package com.xhu.service;

import com.xhu.entity.Course;
import com.xhu.jdbc.utils.JDBCUtils;
import com.xhu.jdbc.utils.RegisterSqlUtil;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.Enumeration;

/**
 * @BelongsProject: BackstageExample2
 * @Author: XJ
 * @CreateTime: 2023-04-08 14:51
 * @Description: TODO
 * @Version: 1.0
 */
@WebServlet(name = "addCourse",value = "/addCourse")
public class AddCourse extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		super.doGet(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Connection connection = JDBCUtils.getConnection();
		PrintWriter writer = resp.getWriter();
		RegisterSqlUtil.setCode(req, resp);
		Course course = new Course();
		/*将对象映射为模式*/
		RegisterSqlUtil.requestToModel(course, req);
		String sqlInsert = "insert into course values(?,?,?,?,?)";
		String sqlSelect = "select courseCode,courseName from course where courseCode = ?";
		ResultSet resultSet = null;
		try {
			/*查询数据库中是否有该条记录*/
			resultSet = JDBCUtils.preparedSqlForSelect(sqlSelect, course.getCourseCode());
		} catch (SQLException e) {
			e.printStackTrace();
		}
		try {
			assert resultSet != null;
			if (resultSet.next()){
				/*数据库中存在改条记录*/
				System.out.println("请勿重复添加");
				writer.println("请勿重复添加");
			}else{
				try {
					System.out.println(JDBCUtils.preparedSqlForInsert(sqlInsert, course));
					writer.println("课程添加成功");
					System.out.println("课程添加成功");
				} catch (IllegalAccessException | SQLException e) {
					e.printStackTrace();
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		JDBCUtils.close(connection);
		writer.flush();
		writer.close();
	}
}

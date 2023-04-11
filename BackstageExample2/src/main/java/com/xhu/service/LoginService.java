package com.xhu.service;

import com.xhu.entity.Login;
import com.xhu.jdbc.utils.JDBCUtils;
import com.xhu.jdbc.utils.RegisterSqlUtil;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * @BelongsProject: BackstageExample2
 * @Author: XJ
 * @CreateTime: 2023-04-08 20:50
 * @Description: TODO
 * @Version: 1.0
 */
@WebServlet(name = "login2", value = "/login2")
public class LoginService extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		super.doGet(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter writer = resp.getWriter();
		Login login = new Login();
		/*实体类映射模式*/
		RegisterSqlUtil.requestToModel(login, req);
		Connection connection = JDBCUtils.getConnection();
		/*数据库查询语句*/
		String sqlSelect = "select studentId,studentName,password from student where studentId = ?";
		ResultSet rs = null;
		/*定义一个标记，便于前端方便标识错误或成功*/
		int flage = -1;
		try {
			rs = JDBCUtils.preparedSqlForSelect(sqlSelect, login.getStudentId());
		} catch (SQLException e) {
			e.printStackTrace();
		}
		try {
			assert rs != null;
			if(rs.next()){
				if (rs.getString("password").equals(login.getPassword())){
					/*学号密码正确允许登录*/
					flage = 1;
				}else{
					/*密码错误提示用户*/
					flage = 0;
				}
			}else{
				/*学号不存在或是不正确*/
				flage = -1;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		writer.println(flage);
		JDBCUtils.close(rs, connection);
		writer.flush();
		writer.close();
	}
}

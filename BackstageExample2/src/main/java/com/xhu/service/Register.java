package com.xhu.service;

import com.xhu.entity.Student;
import com.xhu.jdbc.utils.JDBCUtils;
import com.xhu.jdbc.utils.RegisterSqlUtil;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * @author TonyJUN
 */
@WebServlet(name = "register", value = "/register")
@MultipartConfig
public class Register extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      PrintWriter out1 = response.getWriter();
      RegisterSqlUtil.setCode(request, response);
      Student student = new Student();
      RegisterSqlUtil.requestToModelHaveFile("student", student, request);
      String sqlInsert = "insert into student values(?,?,?,?,?,?,?,?,?,?)";
      String sqlSelect = "select studentId,studentName from student where studentId = ?";
      /*连接数据库*/
      Connection connection = JDBCUtils.getConnection();
      ResultSet rs = null;
      try {
          rs = JDBCUtils.preparedSqlForSelect(sqlSelect, student.getStudentId());
      } catch (SQLException e) {
          e.printStackTrace();
      }
      try {
          if (rs.next()) {
              System.out.println("该用户已存在！");
              out1.println("该用户已存在");
          }else{
              System.out.println(JDBCUtils.preparedSqlForInsert(sqlInsert,student));
              out1.println("注册成功");
          }
      } catch (SQLException | IllegalAccessException e) {
          e.printStackTrace();
      }
      JDBCUtils.close(rs,connection);
      out1.flush();
      out1.close();
  }
}

package com.xhu.service;

import com.xhu.entity.Grade;
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
 * @CreateTime: 2023-04-08 17:57
 * @Description: TODO
 * @Version: 1.0
 */
@WebServlet(name = "addScore", value = "/addScore")
public class AddScore extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		super.doGet(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Connection connection = JDBCUtils.getConnection();
		PrintWriter writer = resp.getWriter();
		RegisterSqlUtil.setCode(req, resp);
		Grade grade = new Grade();
		/*将对象映射为模式*/
		RegisterSqlUtil.requestToModel(grade, req);
		String sqlInsert = "insert into grade values(?,?,?)";
		String sqlSelect = "select studentId,courseCode from grade where studentId = ? and courseCode = ?";
		String sqlSelectStudent = "select studentId from student where studentId = ?";
		String sqlSelectCourse = "select courseCode from course where courseCode = ?";
		ResultSet scoreRs = null;
		ResultSet studentRs = null;
		ResultSet courseRs = null;
		try {
			/*查看数据库中是否有该条记录*/
			scoreRs = JDBCUtils.preparedSqlForSelect(sqlSelect, grade.getStudentId(), grade.getCourseCode());
			/*查看学生库中是否有该学生*/
			studentRs = JDBCUtils.preparedSqlForSelect(sqlSelectStudent, grade.getStudentId());
			/*查看课程表中是否有该课程*/
			courseRs = JDBCUtils.preparedSqlForSelect(sqlSelectCourse, grade.getCourseCode());
		} catch (SQLException e) {
			e.printStackTrace();
		}
		try {
			assert scoreRs != null;
			assert studentRs != null;
			assert courseRs != null;
			if (scoreRs.next()){
				/*存在记录*/
				System.out.println("请勿重复添加");
				writer.println("请勿重复添加");
			}else if (!studentRs.next()){
				/*不存在学生*/
				System.out.println("不存在该学生");
				writer.println("不存在该学生");
			}else if (!courseRs.next()){
				/*不存在课程*/
				System.out.println("不存在该课程");
				writer.println("不存在该课程");
			} else{
				try {
					/*不存在记录则添加*/
					System.out.println(JDBCUtils.preparedSqlForInsert(sqlInsert, grade));
					writer.println("成绩添加成功");
					System.out.println("成绩添加成功");
				} catch (IllegalAccessException | SQLException e) {
					e.printStackTrace();
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		JDBCUtils.close(scoreRs,connection);
		writer.flush();
		writer.close();
	}
}

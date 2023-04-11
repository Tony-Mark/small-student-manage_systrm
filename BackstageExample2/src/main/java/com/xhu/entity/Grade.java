package com.xhu.entity;

/**
 * @BelongsProject: BackstageExample2
 * @Author: XJ
 * @CreateTime: 2023-04-08 09:18
 * @Description: TODO 成绩实体类
 * @Version: 1.0
 */
public class Grade {
	/**学生学号*/
	private String studentId;
	/**课程号*/
	private String courseCode;
	private String score;
	
	public Grade() {
	}
	
	public Grade(String studentId, String courseCode, String score) {
		this.studentId = studentId;
		this.courseCode = courseCode;
		this.score = score;
	}
	
	public String getStudentId() {
		return studentId;
	}
	
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	
	public String getCourseCode() {
		return courseCode;
	}
	
	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}
	
	public String getScore() {
		return score;
	}
	
	public void setScore(String score) {
		this.score = score;
	}
}

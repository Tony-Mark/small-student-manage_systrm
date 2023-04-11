package com.xhu.entity;

/**
 * @BelongsProject: BackstageExample2
 * @Author: XJ
 * @CreateTime: 2023-04-08 09:13
 * @Description: TODO 课程实体类
 * @Version: 1.0
 */
public class Course {
	private String courseCode;
	private String courseName;
	private String credit;
	private String time;
	private String note;
	
	public Course() {}
	
	public Course(String courseCode, String courseName, String credit, String time, String note) {
		this.courseCode = courseCode;
		this.courseName = courseName;
		this.credit = credit;
		this.time = time;
		this.note = note;
	}
	
	public String getCourseCode() {
		return courseCode;
	}
	
	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}
	
	public String getCourseName() {
		return courseName;
	}
	
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	
	public String getCredit() {
		return credit;
	}
	
	public void setCredit(String credit) {
		this.credit = credit;
	}
	
	public String getTime() {
		return time;
	}
	
	public void setTime(String time) {
		this.time = time;
	}
	
	public String getNote() {
		return note;
	}
	
	public void setNote(String note) {
		this.note = note;
	}
}

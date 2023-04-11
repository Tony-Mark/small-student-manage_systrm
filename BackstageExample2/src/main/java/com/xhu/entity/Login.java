package com.xhu.entity;

/**
 * @BelongsProject: BackstageExample2
 * @Author: XJ
 * @CreateTime: 2023-04-08 20:52
 * @Description: TODO 登录数据实体类
 * @Version: 1.0
 */
public class Login {
	private String studentId;
	private String password;
	
	public Login() {
	}
	
	public Login(String studentId, String password) {
		this.studentId = studentId;
		this.password = password;
	}
	
	public String getStudentId() {
		return studentId;
	}
	
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
}

package com.xhu.entity;


/**
 * @BelongsProject: BackstageExample2
 * @Author: XJ
 * @CreateTime: 2023-04-07 23:11
 * @Description: TODO
 * @Version: 1.0
 */
public class Student {
	private String studentId;
	private String studentName;
	private String password;
	private String phone;
	private String sex;
	private StringBuilder hobbies;
	private StringBuilder address;
	private StringBuilder date;
	private String note;
	private StringBuilder file;
	public Student(){
		super();
		studentId = "";
		studentName = "";
		password = "";
		phone = "";
		sex = "男";
		hobbies = new StringBuilder("");
		address = new StringBuilder("");
		date = new StringBuilder("");
		note = "";
		file = new StringBuilder("");
	}
	
	public Student(String studentId, String studentName,
	               String password, String phone, String sex,
	               StringBuilder hobbies, StringBuilder address, StringBuilder date,
	               String note, StringBuilder file) {
		this.studentId = studentId;
		this.studentName = studentName;
		this.password = password;
		this.phone = phone;
		this.sex = sex;
		this.hobbies = hobbies;
		this.address = address;
		this.date = date;
		this.note = note;
		this.file = file;
	}
	
	public String getStudentId() {
		return studentId;
	}
	
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	
	public String getStudentName() {
		return studentName;
	}
	
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getPhone() {
		return phone;
	}
	
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getSex() {
		return sex;
	}
	
	public void setSex(String sex) {
		this.sex = sex;
	}
	
	public StringBuilder getHobbies() {
		return hobbies;
	}
	
	public void setHobbies(StringBuilder hobbies) {
		this.hobbies = hobbies;
	}
	
	public StringBuilder getAddress() {
		return address;
	}
	
	public void setAddress(StringBuilder address) {
		this.address = address;
	}
	
	public StringBuilder getDate() {
		return date;
	}
	
	public void setDate(StringBuilder date) {
		this.date = date;
	}
	
	public String getNote() {
		return note;
	}
	
	public void setNote(String note) {
		this.note = note;
	}
	
	public StringBuilder getFile() {
		return file;
	}
	
	public void setFile(StringBuilder file) {
		this.file = file;
	}
}

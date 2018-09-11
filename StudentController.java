package com.cg.controller;

/**
 * @author rabbhi Modified on - 11/09/2018
 *
 */
import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class StudentController
 */
@WebServlet("/studentController")
public class StudentController extends HttpServlet {

	// doGet Method
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	// doPost Method
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		// Geeting Data into request object
		String name = request.getParameter("sName");
		String department = request.getParameter("dept");
		String twelfthMark = request.getParameter("twelfthMarks");
		String mobile = request.getParameter("mobile");
		String percentage = request.getParameter("percentage");
		double percent = Double.parseDouble(percentage);
		// If Percentege is greater than 100 then again open Home.jsp
		if (percent > 100) {
			RequestDispatcher rd = request.getRequestDispatcher("Home.jsp");
			rd.forward(request, response);
		}

		// Create Session
		HttpSession session = request.getSession();
		// Setting Data in Session object
		session.setAttribute("sName", name);
		session.setAttribute("dept", department);
		session.setAttribute("twelfthMarks", twelfthMark);
		session.setAttribute("mobile", mobile);
		session.setAttribute("percentage", percentage);
		// Forwarding request to success.html
		RequestDispatcher rd = request.getRequestDispatcher("success.html");
		rd.forward(request, response);
	}
}

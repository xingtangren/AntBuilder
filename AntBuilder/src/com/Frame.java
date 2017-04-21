package com;

import java.awt.EventQueue;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;

import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;

public class Frame extends JFrame {
	private static Frame frame;
	private JTextField txtFilePath;
	private JTextField copyToPath;
	private JTextField buildXmlPath;
	JFileChooser jfc; 
	
	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					frame = new Frame();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
	
	public Frame() {
		try {
			//UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
			UIManager.setLookAndFeel("com.sun.java.swing.plaf.windows.WindowsLookAndFeel");
		} catch (Exception e) {
			e.printStackTrace();
		}
		setTitle("Ant增量包xml生成器");
		setResizable(false);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(400, 200, 548, 251);
		getContentPane().setLayout(null);
		jfc=new JFileChooser();
		
		JLabel lblTxt = new JLabel("更新列表文件：");
		lblTxt.setBounds(27, 29, 115, 16);
		getContentPane().add(lblTxt);
		
		JLabel lblBuild = new JLabel("build.xml路径：");
		lblBuild.setBounds(27, 124, 125, 16);
		getContentPane().add(lblBuild);
		
		JLabel label = new JLabel("文件打包路径：");
		label.setBounds(27, 76, 125, 16);
		getContentPane().add(label);
		
		txtFilePath = new JTextField();
		txtFilePath.setBounds(140, 20, 290, 30);
		getContentPane().add(txtFilePath);
		txtFilePath.setColumns(10);
		
		copyToPath = new JTextField();
		copyToPath.setColumns(10);
		copyToPath.setBounds(140, 70, 290, 30);
		getContentPane().add(copyToPath);
		
		buildXmlPath = new JTextField();
		buildXmlPath.setColumns(10);
		buildXmlPath.setBounds(140, 120, 290, 30);
		getContentPane().add(buildXmlPath);
		
		JButton genXmlBtn = new JButton("生成");
		genXmlBtn.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				try {
					AntXmlBuilder.generateXml(txtFilePath.getText(), copyToPath.getText(), buildXmlPath.getText());
				} catch (IOException e1) {
					e1.printStackTrace();
				}
			}
		});
		genXmlBtn.setBounds(215, 171, 132, 35);
		getContentPane().add(genXmlBtn);
		
		
		JButton browerTxtFileBtn = new JButton("浏览...");
		browerTxtFileBtn.setBounds(430, 20, 90, 30);
		browerTxtFileBtn.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
		        jfc.setFileSelectionMode(JFileChooser.FILES_ONLY);  
		        jfc.showDialog(new JLabel(), "选择txt文件");  
		        File file=jfc.getSelectedFile();  
		        if(file.isFile()){  
		        	txtFilePath.setText(file.getAbsolutePath());
		        }  
			}
		});
		getContentPane().add(browerTxtFileBtn);
		
		JButton browerCopyToBtn = new JButton("浏览...");
		browerCopyToBtn.setBounds(430, 70, 90, 30);
		browerCopyToBtn.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				jfc.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);  
		        jfc.showDialog(new JLabel(), "选择打包文件路径");  
		        File file=jfc.getSelectedFile();  
		        if(file.isDirectory()){  
		        	copyToPath.setText(file.getAbsolutePath());
		        }  
			}
		});
		getContentPane().add(browerCopyToBtn);
		
		JButton browerXmlPathBtn = new JButton("浏览...");
		browerXmlPathBtn.setBounds(430, 120, 90, 30);
		browerXmlPathBtn.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				jfc.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);  
		        jfc.showDialog(new JLabel(), "选择build.xml生成路径");  
		        File file=jfc.getSelectedFile();  
		        if(file.isDirectory()){  
		        	buildXmlPath.setText(file.getAbsolutePath());
		        }  
			}
		});
		getContentPane().add(browerXmlPathBtn);
	}
}

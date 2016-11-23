package cn.com.zuo.exception;

public class ParseObjectException extends Exception {
	
	private static final long serialVersionUID = 1L;

	public ParseObjectException() {

	}

	public ParseObjectException(String arg0) {
		super(arg0);
	}

	public ParseObjectException(Throwable arg0) {
		super(arg0);
	}

	public ParseObjectException(String arg0, Throwable arg1) {
		super(arg0, arg1);
	}
}

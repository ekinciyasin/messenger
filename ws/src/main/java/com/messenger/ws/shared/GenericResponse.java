package com.messenger.ws.shared;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class GenericResponse {
	
		private String message;
	

	

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
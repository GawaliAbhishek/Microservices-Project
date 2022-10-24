package com.Abhishek.entity;

public class Pair {

		private int id;
		private boolean login;
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public boolean isLogin() {
			return login;
		}
		public void setLogin(boolean login) {
			this.login = login;
		}
		public Pair(int id, boolean login) {
			super();
			this.id = id;
			this.login = login;
		}
		
}

var link=document.querySelector(".feedback-form button");
			var popup=document.querySelector(".modal-feedback");
			var overlay=document.querySelector(".modal-overlay");
			var close=popup.querySelector(".modal-close");
			var form=popup.querySelector("form");
			var login=popup.querySelector("[name=login]");
			var email=popup.querySelector("[name=email]");
			var storage = localStorage.getItem("login");

			link.addEventListener("click", function(evt){
				evt.preventDefault();
				overlay.classList.add("modal-overlay-show");
				popup.classList.add("modal-show");
				if (storage) {
					login.value = storage;
					email.focus();
				} else {
					login.focus();
				}
			});

			close.addEventListener("click", function(evt) {
				evt.preventDefault();
				popup.classList.remove("modal-show");
				popup.classList.remove("modal-error");
				overlay.classList.remove("modal-overlay-show");
			});

			form.addEventListener("submit", function(evt) {
				if (!login.value || !email.value) {
					evt.preventDefault();
					popup.classList.remove("modal-error");
					popup.offsetWidth = popup.offsetWidth;
					popup.classList.add("modal-error");
				} else {
					localStorage.setItem("login", login.value);
				}
			});

			window.addEventListener("keydown", function(evt) {
				if (evt.keyCode === 27) {
					evt.preventDefault();
					if (popup.classList.contains("modal-show")) {
						popup.classList.remove("modal-show");
						popup.classList.remove("modal-error");
						overlay.classList.remove("modal-overlay-show");
					}
				}
			});

function animKeys(key) {
	if (key.id === "bu") {
		key.style.border = "3px #fff solid";
		key.style.borderTop = "1px #fff solid";
		key.style.borderBottom = "4px #fff solid";
		key.style.transform = "translateY(-2px)";
	} 
	if (key.id === "bd") {
		key.style.border = "3px #fff solid";
		key.style.borderBottom = "1px #fff solid";
		key.style.borderTop = "4px #fff solid";
		key.style.transform = "translateY(2px)";
	}
	if (key.id === "bl") {
		key.style.border = "3px #fff solid";
		key.style.borderLeft = "1px #fff solid";
		key.style.borderRight = "4px #fff solid";
		key.style.transform = "translateX(-2px)";
	}
	if (key.id === "br") {
		key.style.border = "3px #fff solid";
		key.style.borderRight = "1px #fff solid";
		key.style.borderLeft = "4px #fff solid";
		key.style.transform = "translateX(2px)";
	}

	//reset
	setTimeout(() => {
		key.style.border = "2px #fff solid";
		key.style.borderTop = "2px #fff solid";
		key.style.borderBottom = "2px #fff solid";
		key.style.borderLeft = "2px #fff solid";
		key.style.borderRight = "2px #fff solid";
		key.style.transform = "translateY(0px)";
		key.style.transform = "translateX(0px)";
	}, "150");
}
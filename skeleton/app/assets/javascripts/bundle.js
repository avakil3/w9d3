/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

class FollowToggle {
	constructor(el){
		// debugger
		this.el = $(el);
		this.userId = this.el.data('user-id');
		this.followState = this.el.data('initial-follow-state'); 
		this.render();
		this.el.on('click',this.handleClick.bind(this))
		// this.handleClick().then(this.render);
	}

	render() {
		if (this.followState === 'unfollowed') {
			this.el.text('Follow!');
		} else {
			this.el.text("Unfollow!");
		}
	}

	handleClick() {
		debugger
		this.el.on('submit', (e) => {
			e.preventDefault();
			debugger
			if (this.followState === 'unfollowed') {
				debugger
				return $.ajax({
					method: "POST",
					url: `/users/${this.userId}/follow`,
					data: {user: {user_id: this.userId}},
					dataType: 'JSON'
				})
			} else {
				return $.ajax({
					method: "DELETE",
					url: `/users/${this.userId}/follow`,
					data: {user: {user_id: this.userId}},
					dataType: 'JSON'
				})
			}
		});
	}
}



module.exports = FollowToggle;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

console.log("row 3");
$(document).ready(()=>{
	console.log("row 5");
	$('button.follow-toggle').each((i) => new FollowToggle($('button.follow-toggle')[i]));
});

console.log("row 8");
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
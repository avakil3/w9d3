/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const ApiUtil = {
	newFollow: function(userId){
		return $.ajax({
			method: "POST",
			url: `/users/${userId}/follow`,
			// data: {user: {user_id: userId}},
			dataType: 'JSON'
		})
	},

	deleteFollow: function(userId){
		return $.ajax({
			method: "DELETE",
			url: `/users/${userId}/follow`,
			// data: {user: {user_id: userId}},
			dataType: 'JSON'})
	}

};



module.exports = ApiUtil;



/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ApiUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");

class FollowToggle {
	constructor(el){
		// debugger
		this.el = $(el);
		this.userId = this.el.data('user-id');
		this.followState = this.el.data('initial-follow-state');
		this.render();
		this.el.on('click', (e) => {
			e.preventDefault();
			this.handleClick.bind(this)();
		})
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
		// debugger
		if (this.followState === 'unfollowed') {
			this.followState = 'followed';
			// debugger
			ApiUtil.newFollow(this.userId)
				.then(this.render.bind(this));
		} else {
			this.followState = 'unfollowed';
			ApiUtil.deleteFollow(this.userId)
				.then(this.render.bind(this));
		}

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

$(document).ready(()=>{
	$('button.follow-toggle').each((i) => new FollowToggle($('button.follow-toggle')[i]));
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
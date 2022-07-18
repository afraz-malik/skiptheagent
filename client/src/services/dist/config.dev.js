"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API = exports.socket = exports.fetchBackend = exports.socket_url = exports.db_url = void 0;

var _reactToastify = require("react-toastify");

var _store = require("../redux/store");

var _user = require("../redux/user/user.actions");

var _axios = _interopRequireDefault(require("axios"));

var _socket = require("socket.io-client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var server = 'http://15.206.84.143:5000/';
var db_url = server + 'api';
exports.db_url = db_url;
var socket_url = server;
exports.socket_url = socket_url;

var fetchBackend = function fetchBackend(method, url, payload, params) {
  return regeneratorRuntime.async(function fetchBackend$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", (0, _axios["default"])(_objectSpread({
            method: method,
            url: "".concat(db_url).concat(url)
          }, payload && {
            data: payload
          }, {}, params && {
            params: params
          }, {
            headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'multipart/form-data',
              'Access-Control-Allow-Origin': '*',
              Authorization: 'Bearer ' + _store.store.getState().setUser.token,
              mode: 'no-cors'
            }
          })).then(function (res) {
            return res.data;
          })["catch"](function (err) {
            // console.log(err.message)
            if (err.response.data.message === 'jwt expired' || err.response.data.message === 'jwt malformed') {
              _reactToastify.toast.dismiss();

              _reactToastify.toast.error('Your session has expired. Kindly login again');

              _store.store.dispatch((0, _user.signOutStart)());
            } else {
              throw new Error(err.response.data.message);
            }
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.fetchBackend = fetchBackend;
var socket = (0, _socket.io)(socket_url);
exports.socket = socket;
var API = {
  // Auth
  login: '/user/login/',
  googleLogin: '/user/login/google',
  updateUser: '/user/update',
  passwordReset: '/user/reset-password',
  register: '/user/register/',
  passwordForgot: '/user/forget',
  // User Ads
  upload: '/upload',
  //POST
  postAd: '/user/ads',
  //POST
  getUser: '/user/getuser/',
  // GET
  getUserAds: '/user/ads',
  getUserLikedAds: '/user/ads/liked',
  deleteAd: '/user/ads',
  //Delete
  // Admin routes
  getUsersForAdmin: '/get_users_for_admin',
  banUser: '/ban_user/',
  // Public Ads
  getRecentAds: '/ads/latest',
  getAd: '/ads/',
  getAds: '/ads'
};
exports.API = API;
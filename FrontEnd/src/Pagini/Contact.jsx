"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
// @ts-nocheck
const react_1 = __importStar(require("react"));
const browser_1 = __importDefault(require("@emailjs/browser"));
const Contact = () => {
    const form = (0, react_1.useRef)();
    const sendEmail = (e) => {
        e.preventDefault();
        browser_1.default.sendForm('service_ynv83op', 'template_3oljtxo', form.current, '92Cb78cmp5MUyYktO')
            .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (<div className="container-fluid text-center bg-grey border-colorat">
	<div className="row">
		<div className="col-md-12">

    <form ref={form} onSubmit={sendEmail} style={{ 'display': 'inline-grid' }}>
      <label>Name</label>
      <input type="text" value={localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['name'] : "Name"} name="user_name"/>
      <label>Email</label>
      <input type="email" name="user_email"/>
      <label>Message</label>
      <textarea name="message"/>
      <input type="submit" value="Send"/>
    </form>

    </div>
	</div>
    </div>);
};
exports.Contact = Contact;
//# sourceMappingURL=Contact.jsx.map
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
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const lodash_1 = require("lodash");
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
const GridGenerator = ({ cols, children }) => {
    const colWidth = 12 / cols;
    const rows = (0, lodash_1.chunk)(React.Children.toArray(children), cols);
    return (React.createElement(react_bootstrap_1.Container, { style: { color: "red" }, }, rows.map((cols) => (React.createElement(react_bootstrap_1.Row, null, cols.map((col) => (React.createElement(react_bootstrap_1.Col, { md: colWidth, className: "align-self-end" }, col))))))));
};
exports.default = GridGenerator;
//# sourceMappingURL=GridGen.jsx.map
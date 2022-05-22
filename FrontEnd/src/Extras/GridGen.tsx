// @ts-nocheck
import { chunk } from 'lodash';
import * as React from 'react';
import { Col, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const GridGenerator = ({ cols, children }: { cols: number; children: any }) => {
    const colWidth = 12 / cols;
    const rows = chunk(React.Children.toArray(children), cols);
    return (
        React.createElement(Container,{style:{color:"red"},  }, rows.map((cols) => (
            React.createElement(Row, null, cols.map((col) => (
                React.createElement(Col, { md: colWidth , className: "align-self-end" }, col)))))))
        );
};
export default GridGenerator;
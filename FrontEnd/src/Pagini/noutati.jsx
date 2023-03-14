"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const axios_1 = __importDefault(require("axios"));
class Noutati extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            persons: []
        };
    }
    componentDidMount() {
        axios_1.default.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
            const persons = res.data;
            this.setState({ persons });
        });
    }
    render() {
        return (<div className="container border-colorat">
	<div className="row">
		<div className="col-md-12">
			<h3 className="text-center">
				h3. Lorem ipsum dolor sit amet.
			</h3>
			<p className="text-muted lead">
				Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. <small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices massa, et feugiat ipsum consequat eu.</small>
			</p>
			</div>

			<div className="container p-5">
	 
	  <ul className="list-group">
	
        {this.state.persons.map((person) => <li key={person['id']}>{person['name']}</li>)}
  
  </ul>
  </div>
  </div></div>);
    }
}
exports.default = Noutati;
//# sourceMappingURL=noutati.jsx.map
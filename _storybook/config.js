  
import {configure, storiesOf} from 'a1-redux-storybook';
import PropTypes from 'proptypes';

const directiveHelloFactory = [() => ({
  _propTypes_: {hello: PropTypes.string},
  link($scope){
    console.log($scope);
  },
  template: `<h2>Hello {{hello}}</h2>`,
})];

function loadStories() {
  // require as many as stories you need.
  storiesOf('Hello World', module)
      .add('hello world', () => ({
        html: `<div directive-hello hello="helloStr"></div>`,
        directiveList: {
          directiveHello: directiveHelloFactory,
        },
        acceptData: {
          helloStr: 'world'
        },
      }))
      .add('hello a1', () => ({
        html: `<div directive-hello hello="helloStr"></div>`,
        directiveList: {
          directiveHello: directiveHelloFactory,
        },
        acceptData: {
          helloStr: 'a1-redux'
        },
      }))
  ;
}

configure(loadStories, module);

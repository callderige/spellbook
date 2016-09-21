Router.configure({layoutTemplate: 'Layout'});

Router.route('/new-book', {template: 'NewBook'});

Router.route('/', {template: 'Home'});

Router.route('/:name', {template: 'Home'});
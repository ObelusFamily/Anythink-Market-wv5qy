var seeder = require('mongoose-seed');
require('./models/User');
require('./models/Comment');
// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function() {
 
  // Load Mongoose models
  seeder.loadModels([
    'models/Comment.js',
    'models/Item.js',
    'models/User.js'

  ]);
 
  // Clear specified collections
  seeder.clearModels(['Comment', 'Item', 'User'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
let items =[]
let comments = []
let users = []
for(let i=0; i<100; i++) {
  const item = {
      'title': `title-${i}`,
      'description': 'desc1'
  }
  items.push(item)
  const comment = {

    'body': `body-${i}`,
    
  }
  comments.push(comment)
  const user = {
    'username': `username${i}`,
    'email': `a${i}@a.com`
  }
  users.push(user)
}


var data = [
    {
        'model': 'Item',
        'documents':items


    },
    {
      'model': 'Comment',
      'documents':comments
      
  },
  {
    'model': 'User',
    'documents':users

    
}
];
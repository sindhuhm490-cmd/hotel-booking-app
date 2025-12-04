const mongoose = require('mongoose');

// Replace with your email
const EMAIL_TO_MAKE_ADMIN = 'john@example.com';

mongoose.connect('mongodb://localhost:27017/hotel-booking')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    const result = await mongoose.connection.db.collection('users').updateOne(
      { email: EMAIL_TO_MAKE_ADMIN },
      { $set: { isAdmin: true } }
    );
    
    if (result.modifiedCount > 0) {
      console.log(`✓ Successfully made ${EMAIL_TO_MAKE_ADMIN} an admin!`);
    } else {
      console.log(`✗ User with email ${EMAIL_TO_MAKE_ADMIN} not found.`);
      console.log('Available users:');
      const users = await mongoose.connection.db.collection('users').find({}).toArray();
      users.forEach(u => console.log(`  - ${u.email}`));
    }
    
    await mongoose.disconnect();
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });

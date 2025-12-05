const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotel-booking')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Check hotels
    const hotels = await mongoose.connection.db.collection('hotels').find({}).toArray();
    console.log('\n=== HOTELS ===');
    hotels.forEach(hotel => {
      console.log(`- ${hotel.name} in ${hotel.city}, ${hotel.state} (Rate: $${hotel.rate})`);
    });
    
    // Check users
    const users = await mongoose.connection.db.collection('users').find({}).toArray();
    console.log('\n=== USERS ===');
    users.forEach(user => {
      console.log(`- ${user.firstName} ${user.lastName} (${user.email}) - Admin: ${user.isAdmin}`);
    });
    
    // Check bookings
    const bookings = await mongoose.connection.db.collection('bookings').find({}).toArray();
    console.log('\n=== BOOKINGS ===');
    bookings.forEach(booking => {
      console.log(`- Booking ID: ${booking._id}`);
      console.log(`  Hotel: ${booking.hotel?.name || 'N/A'}`);
      console.log(`  Check-in: ${booking.checkInDate}`);
      console.log(`  Check-out: ${booking.checkOutDate}`);
      console.log(`  Room: ${booking.roomType}`);
    });
    
    await mongoose.disconnect();
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
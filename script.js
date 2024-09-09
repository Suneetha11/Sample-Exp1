document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const selectedEvent = document.getElementById('events').value;
    const courses = Array.from(document.querySelectorAll('input[name="courses"]:checked')).map(course => course.value);

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phone);
    console.log('Gender:', gender);
    console.log('Event:', selectedEvent);
    console.log('Courses:', courses);

    alert('Registration successful! Thank you for registering.');
    
    document.getElementById('registrationForm').reset();
});

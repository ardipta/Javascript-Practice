let whoIsHere = 'user'

if (whoIsHere === 'user') {
    console.log('Hello User!')
    console.log('Allow access to view all course!')
} 
else if (whoIsHere === 'teacher') {
    console.log('Hello Teacher!')
    console.log('Allow access to his course!')
} 
else {
    console.log('MESSAGE: Please Verify yourself!')
    console.log('Send user an email for varification!')
}
const form = document.getElementById('applicationForm');
const resultScreen = document.getElementById('resultScreen');
const submitBtn = document.getElementById('submitBtn');
const newApplicationBtn = document.getElementById('newApplicationBtn');

//create event listener for form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';
  
  //get form data
  const formData = new FormData(form);
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    dateOfBirth: formData.get('dateOfBirth'),
    ssn: formData.get('ssn'),
    addressLine1: formData.get('addressLine1'),
    addressLine2: formData.get('addressLine2'),
    city: formData.get('city'),
    state: formData.get('state'),
    postalCode: formData.get('postalCode'),
    country: formData.get('country')
  };
  
  
  //sending result back to the backend on render
  try {
    const API_URL = 'https://alloyapp.onrender.com/api/submit';
    
    //send data to backend
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit application');
    }
    
    const result = await response.json();
    
    showResult(result.outcome);
    
  } catch (error) {
    alert('Error: ' + error.message);
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Application';
  }
});

//show result screen based on outcome
function showResult(outcome) {
  const resultIcon = document.getElementById('resultIcon');
  const resultTitle = document.getElementById('resultTitle');
  const resultMessage = document.getElementById('resultMessage');
  
  //hide form, show result
  form.style.display = 'none';
  resultScreen.style.display = 'block';
  
  //set content based on outcome
  if (outcome === 'Approved') {
    resultIcon.textContent = '✅';
    resultTitle.textContent = 'Application Approved!';
    resultMessage.textContent = 'Congratulations! Your account has been successfully created.';
  } else if (outcome === 'Manual Review') {
    resultIcon.textContent = '⏳';
    resultTitle.textContent = 'Under Review';
    resultMessage.textContent = "Thanks for submitting your application, we’ll be in touch shortly.";
  } else if (outcome === 'Denied') {
    resultIcon.textContent = '❌';
    resultTitle.textContent = 'Application Denied';
    resultMessage.textContent = "We're sorry, but we're unable to approve your application at this time.";
  }
}

//handle new application button
newApplicationBtn.addEventListener('click', () => {
  form.reset();
  
  form.style.display = 'block';
  resultScreen.style.display = 'none';

  submitBtn.disabled = false;
  submitBtn.textContent = 'Submit Application';
});

